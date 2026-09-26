import { lazy, Suspense, useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import {
  Github,
  Instagram,
  Linkedin,
  ArrowUpRight,
  ArrowLeft,
} from "react-bootstrap-icons";
import { allProjects } from "./data/projects";
import family from "./assets/img/tesla.png";
import "./App.css";
const Sculpture = lazy(() => import("./components/Sculpture"));
const phrases = [
  "Daksh Mamnani",
  "Developer & Researcher",
  "Competitive Chess Player",
  "Always Building",
];
const categories = {
  Projects: [
    "guthealth",
    "mathlink",
    "pill-dispenser",
    "quittogether",
    "hydrogen-car",
  ],
  Experience: ["smud", "noteagent"],
  Research: ["nasa-sees", "assip-ml", "ucsc-cosmic-web"],
  "Beyond the code": ["chess", "cac-ambassador", "mathnasium", "gym-training"],
};
function Socials() {
  return (
    <div className="socials">
      <a
        href="https://www.linkedin.com/in/daksh-mamnani-6a69812a1"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <Linkedin />
      </a>
      <a
        href="https://github.com/duckish-ui"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <Github />
      </a>
      <a
        href="https://www.instagram.com/daksh.mamnani"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
      >
        <Instagram />
      </a>
    </div>
  );
}
function Typewriter() {
  const [text, setText] = useState(phrases[0]);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let phrase = 0,
      length = phrases[0].length,
      deleting = true,
      timer;
    const tick = () => {
      const word = phrases[phrase];
      length += deleting ? -1 : 1;
      setText(word.slice(0, length));
      let delay = deleting ? 45 : 85;
      if (length === 0) {
        phrase = (phrase + 1) % phrases.length;
        deleting = false;
        delay = 450;
      } else if (length === word.length && !deleting) {
        deleting = true;
        delay = 2500;
      }
      timer = setTimeout(tick, delay);
    };
    timer = setTimeout(tick, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <h1
      className="hero-title"
      aria-label="Daksh Mamnani — developer and researcher"
    >
      <span className="sr-only">Daksh Mamnani — developer and researcher</span>
      <span aria-hidden="true">
        {text}
        <span className="cursor" />
      </span>
    </h1>
  );
}
function Home() {
  return (
    <main id="main" className="home">
      <div className="intro">
        <Typewriter />
        <Socials />
      </div>
      <Suspense fallback={null}>
        <Sculpture />
      </Suspense>
      <Link className="explore" to="/projects">
        Explore my work <ArrowUpRight />
      </Link>
    </main>
  );
}
function About() {
  return (
    <main id="main" className="page about-page">
      <h1 className="page-title">Me</h1>
      <div className="about-grid">
        <figure className="portrait">
          <img
            src={family}
            alt="Daksh, at the far right, visiting the Tesla factory with his family"
          />
          <figcaption>
            With my family in Fremont. That's me on the right.
          </figcaption>
        </figure>
        <div className="about-copy">
          <p>
            Hi! I'm Daksh. I study Applied Mathematics at UC Berkeley with a
            minor in Computer Science. I build full-stack applications and data
            systems, with a focus on backend architecture, asynchronous
            processing, and AI-powered workflows.
          </p>
          <p>
            I like working across the stack: designing a database, building an
            API, and making the interface feel straightforward. At SMUD, I
            worked on production data pipelines and operational analytics. In my
            own projects, I'm exploring how background jobs and LLM
            orchestration can turn raw data into useful tools.
          </p>
          <p>
            Away from a screen, you'll find me at the gym, playing competitive
            chess, or spending time with my family and our German Shepherd,
            Skye.
          </p>
          <p>
            I care about understanding <em>why</em> something works. There's
            always something new to learn.
          </p>
          <Socials />
        </div>
      </div>
      <section className="toolkit">
        <h2>What I work with</h2>
        <div className="tags">
          {[
            "React",
            "TypeScript",
            "JavaScript",
            "Python",
            "SQL",
            "PostgreSQL",
            "Redis",
            "Docker",
            "LangGraph",
            "Firebase",
            "Node.js",
            "C++",
          ].map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </section>
      <section className="beyond">
        <h2>Beyond the code</h2>
        <div className="activity-list">
          {categories["Beyond the code"].map((id) => (
            <Link to={"/project/" + id} key={id}>
              <span>{allProjects[id].title}</span>
              <ArrowUpRight />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
function ProjectCard({ id }) {
  const project = allProjects[id];
  return (
    <article className="project-card">
      {project.imgUrl && (
        <img
          className="card-background"
          loading="lazy"
          src={project.imgUrl}
          alt=""
          style={{ objectPosition: project.imagePosition || "center" }}
        />
      )}
      <Link to={"/project/" + id} className="card-main">
        <div className="card-copy">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div className="card-technologies">
            {project.technologies.slice(0, 4).join(" / ")}
          </div>
        </div>
      </Link>
      <div className="card-footer">
        <Link to={"/project/" + id}>
          Explore project <ArrowUpRight />
        </Link>
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            aria-label={"View " + project.title + " on GitHub"}
          >
            <Github />
          </a>
        )}
      </div>
    </article>
  );
}
function Projects() {
  const [category, setCategory] = useState("Projects");
  return (
    <main id="main" className="page projects-page">
      <h1 className="page-title">My work</h1>
      <div className="filters" aria-label="Project categories">
        {Object.keys(categories).map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            aria-pressed={category === item}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {categories[category].map((id) => (
          <ProjectCard key={id} id={id} />
        ))}
      </div>
    </main>
  );
}
function Detail() {
  const { id } = useParams();
  const project = allProjects[id];
  if (!project) return <NotFound />;
  const links = [
    ["githubLink", "Source code"],
    ["youtubeLink", "Watch demo"],
    ["competitionLink", "Competition"],
    ["liveLink", "Live project"],
    ["paperLink", "Read paper"],
    ["chessComLink", "Play chess"],
    ["uscfLink", "USCF profile"],
  ];
  return (
    <main id="main" className="page detail-page">
      <Link className="back-link" to="/projects">
        <ArrowLeft /> Back to my work
      </Link>
      <header className="detail-heading">
        <p>{project.description}</p>
        <h1>{project.title}</h1>
      </header>
      <div
        className={`detail-grid${project.imgUrl ? "" : " detail-grid-text"}`}
      >
        {project.imgUrl && (
          <div className="detail-image">
            {(project.images || [project.imgUrl]).map((img, i) => (
              <img
                key={img}
                src={img}
                alt={project.title + " — image " + (i + 1)}
              />
            ))}
          </div>
        )}
        <div className="detail-summary">
          <p>{project.detailedDescription}</p>
          <dl>
            {project.role && (
              <>
                <dt>Role</dt>
                <dd>{project.role}</dd>
              </>
            )}
          </dl>
          <div className="project-links">
            {links
              .filter(([key]) => project[key])
              .map(([key, label]) => (
                <a
                  key={key}
                  href={project[key]}
                  target="_blank"
                  rel="noreferrer"
                >
                  {label}
                  <ArrowUpRight />
                </a>
              ))}
          </div>
        </div>
        {!project.imgUrl && (
          <section className="project-why">
            <h2>Why</h2>
            <p>{project.why}</p>
          </section>
        )}
      </div>
      {project.imgUrl && (
        <section className="project-why">
          <h2>Why</h2>
          <p>{project.why}</p>
        </section>
      )}
      <div className="detail-bottom">
        <section>
          <h2>Tools & technologies</h2>
          <div className="tags">
            {project.technologies.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
function NotFound() {
  return (
    <main id="main" className="page">
      <h1 className="page-title">Page not found.</h1>
      <Link className="back-link" to="/">
        Back home <ArrowUpRight />
      </Link>
    </main>
  );
}
export default function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const section = pathname.startsWith("/project/")
      ? allProjects[pathname.split("/")[2]]?.title
      : { "/about": "About", "/projects": "Projects" }[pathname];
    document.title = section
      ? section + " — Daksh Mamnani"
      : "Daksh Mamnani — Developer & Researcher";
  }, [pathname]);
  return (
    <>
      <a
        className="skip-link"
        href="#main"
        onClick={(event) => {
          event.preventDefault();
          const main = document.getElementById("main");
          main?.setAttribute("tabindex", "-1");
          main?.focus();
        }}
      >
        Skip to content
      </a>
      <header className="site-header">
        <nav aria-label="Main navigation">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive || pathname.startsWith("/project/")
                ? "active"
                : undefined
            }
          >
            Projects
          </NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
