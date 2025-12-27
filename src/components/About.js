import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row className="align-items-center">
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>About Me</h2>
                  <Row className="mt-5">
                    <Col md={6} className="mb-4">
                      <div className="about-content">
                        <h3>Who I Am</h3>
                        <p>
                          Hi! I'm Daksh Mamnani, a passionate developer and researcher with a strong 
                          interest in creating innovative solutions through technology. I specialize 
                          in full-stack development, machine learning, and data analysis.
                        </p>
                        <p>
                          My journey in tech started with a curiosity about how things work, which 
                          evolved into a deep passion for building applications that make a difference. 
                          I'm constantly learning and exploring new technologies to expand my skill set.
                        </p>
                      </div>
                    </Col>
                    <Col md={6} className="mb-4">
                      <div className="about-content">
                        <h3>What I Do</h3>
                        <p>
                          I work on a variety of projects ranging from web applications to machine 
                          learning models. My experience spans across different technologies including 
                          React, Node.js, Python, and various database systems.
                        </p>
                        <p>
                          Beyond coding, I'm actively involved in research, exploring cutting-edge 
                          topics in AI and data science. I also dedicate time to leadership roles 
                          and community service, believing that technology should be accessible to everyone.
                        </p>
                      </div>
                    </Col>
                  </Row>
                  
                  <Row className="mt-4">
                    <Col xs={12}>
                      <div className="about-content">
                        <h3>My Background</h3>
                        <p>
                          I'm currently pursuing my education with a focus on Computer Science and 
                          related fields. Throughout my academic journey, I've maintained a strong 
                          GPA while actively participating in various extracurricular activities, 
                          including tech clubs, sports, and volunteer work.
                        </p>
                        <p>
                          My goal is to leverage technology to solve real-world problems and create 
                          meaningful impact. Whether it's through innovative software solutions, 
                          research contributions, or mentoring others, I'm committed to making a 
                          positive difference in the tech community.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};