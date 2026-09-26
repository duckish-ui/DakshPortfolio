import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

// A reflective, continuously deforming surface. No external textures or services.
export default function Sculpture() {
  const host = useRef(null);
  useEffect(() => {
    const element = host.current;
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    element.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 8;
    const pmrem = new THREE.PMREMGenerator(renderer);
    const room = new RoomEnvironment();
    const environment = pmrem.fromScene(room, 0.04);
    scene.environment = environment.texture;
    room.dispose();
    pmrem.dispose();
    const geometry = new THREE.SphereGeometry(1, 80, 56);
    const original = geometry.attributes.position.array.slice();
    const material = new THREE.MeshPhysicalMaterial({
      color: "#829375",
      metalness: 0.92,
      roughness: 0.09,
      clearcoat: 1,
      clearcoatRoughness: 0.04,
      envMapIntensity: 1.9,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh, new THREE.HemisphereLight("#ffffff", "#253520", 2));
    const light = new THREE.DirectionalLight("#ffffff", 4);
    light.position.set(3, 5, 4);
    scene.add(light);
    const pointer = new THREE.Vector2();
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 1,
      height = 1,
      frame,
      active = true,
      elapsed = 0,
      previous = 0;
    function resize() {
      width = element.clientWidth;
      height = element.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      const viewHeight = 2 * Math.tan(Math.PI / 8) * 8;
      const mobile = width <= 640;
      mesh.position.set(
        mobile ? 0 : viewHeight * camera.aspect * 0.25,
        mobile ? -1.25 : 0,
        0,
      );
      const scale = mobile
        ? Math.min(1.12, camera.aspect * 2.1)
        : Math.min(1.65, camera.aspect * 1.05);
      mesh.scale.setScalar(scale);
      if (motion.matches) draw(0);
    }
    function move(event) {
      pointer.set(
        (event.clientX / width) * 2 - 1,
        -((event.clientY / height) * 2 - 1),
      );
    }
    function draw(time) {
      const positions = geometry.attributes.position;
      for (let i = 0; i < positions.count; i++) {
        const x = original[i * 3],
          y = original[i * 3 + 1],
          z = original[i * 3 + 2];
        const wave =
          Math.sin(x * 3.6 + time) *
          Math.cos(y * 3.2 - time * 0.7) *
          Math.sin(z * 3.4 + time * 0.45);
        const radius =
          1 + wave * 0.27 + Math.sin(y * 4 + x * 2 + time * 0.65) * 0.1;
        positions.setXYZ(i, x * radius, y * radius, z * radius);
      }
      positions.needsUpdate = true;
      geometry.computeVertexNormals();
      mesh.rotation.y += (pointer.x * 0.3 - mesh.rotation.y) * 0.035;
      mesh.rotation.x += (-pointer.y * 0.25 - mesh.rotation.x) * 0.035;
      mesh.rotation.z = Math.sin(time * 0.16) * 0.12;
      renderer.render(scene, camera);
    }
    function animate(now) {
      if (!active) return;
      if (!document.hidden && now - previous > 30) {
        elapsed += 0.025;
        previous = now;
        draw(elapsed);
      }
      frame = requestAnimationFrame(animate);
    }
    function updateMotion() {
      cancelAnimationFrame(frame);
      draw(elapsed);
      if (!motion.matches) frame = requestAnimationFrame(animate);
    }
    const observer = new ResizeObserver(resize);
    observer.observe(element);
    resize();
    updateMotion();
    window.addEventListener("pointermove", move, { passive: true });
    motion.addEventListener("change", updateMotion);
    return () => {
      active = false;
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("pointermove", move);
      motion.removeEventListener("change", updateMotion);
      geometry.dispose();
      material.dispose();
      environment.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);
  return <div className="sculpture" ref={host} aria-hidden="true" />;
}
