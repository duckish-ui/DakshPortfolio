import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/pillimg.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/quit1.png";
import projImg4 from "../assets/img/car1.jpg";
import projImg5 from "../assets/img/car2.jpg";
import projImg6 from "../assets/img/noteagent1.png";
import projImg7 from "../assets/img/noteagent2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

   const projects = [
    {
      id: "pill-dispenser",
      title: "Automatic Pill Dispenser",
      description: "Embedded Systems & Assistive Tech",
      imgUrl: projImg1,
    },
    {
      id: "quittogether",
      title: "QuitTogether",
      description: "AI Powered Mobile App",
      imgUrl: projImg3,
    },
    {
      id: "hydrogen-car",
      title: "Hydrogen Grand Prix Car",
      description: "Systems Engineering",
      imgUrl: projImg4,
    },
    {
      id: "noteagent",
      title: "NoteAgent",
      description: "LLM Powered Note Taking Platform",
      imgUrl: projImg6,
    },
    
  ];

  const research = [
    {
      id: "nasa-sees",
      title: "NASA SEES",
      description: "ML & Climate Data Analysis",
      imgUrl: projImg2,
    },
    {
      id: "assip-ml",
      title: "ASSIP (GMU)",
      description: "Time-Series ML Research",
      imgUrl: projImg3,
    },
    {
      id: "ucsc-cosmic-web",
      title: "UC Santa Cruz Research",
      description: "Cosmic Web Visualization",
      imgUrl: projImg1,
    },
  ];

  const extracurriculars = [
    {
      id: "ta-crc",
      title: "Teaching Assistant",
      description: "College CS Instruction",
      imgUrl: projImg2,
    },
    {
      id: "fbla",
      title: "FBLA Co-President",
      description: "Leadership & Organization",
      imgUrl: projImg3,
    },
    {
      id: "chess",
      title: "USCF Competitive Chess",
      description: "State-Ranked Tournament Player",
      imgUrl: projImg1,
    },
  ];

  return (
    <>
      {/* Projects Section */}
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                  <h2>Projects</h2>
                  
                  <Row className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>
                </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} alt="background"></img>
      </section>

      {/* Research Section */}
      <section className="project research-section" id="research">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                  <h2>Research</h2>
                  
                  <Row className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    {
                      research.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>
                </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} alt="background"></img>
      </section>

      {/* Extracurriculars Section */}
      <section className="project extracurriculars-section" id="extracurriculars">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                  <h2>Extracurriculars</h2>
               
                  <Row className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    {
                      extracurriculars.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>
                </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} alt="background"></img>
      </section>
    </>
  )
}