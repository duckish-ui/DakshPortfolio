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
  Hi, I’m Daksh. I’m part of a family of five. My dad, my mom, my sister, our German
  Shepherd Skye, and me. Skye runs the house and definitely knows it. We live in
  Folsom, California, but I grew up in Rancho before we moved here.
</p>
<p>
  I go to Mira Loma High School, where I spend most of my time juggling school,
  projects, and whatever new thing I’m curious about that week. I like staying
  busy and learning by actually doing things instead of just reading about them. I also love going to the gym, playing chess, and hanging out with friends.
</p>
                      </div>
                    </Col>
                    <Col md={6} className="mb-4">
                      <div className="about-content">
                        <h3>What I Do</h3>
                       <p>
  Most of my work lives at the intersection of web development and problem-solving.
  I’ve built full-stack projects, worked with machine learning concepts, and played
  around with data to understand patterns and make better decisions.
</p>
<p>
  I’m comfortable working with tools like React, JavaScript, Python, and databases,
  but I care more about understanding <b>why</b> something works than just using a
  framework because it’s popular.
</p>
                      </div>
                    </Col>
                  </Row>
                  
                  <Row className="mt-4">
                    <Col xs={12}>
                      <div className="about-content">
                        <h3>My Background</h3>
                       <p>
  I’m currently a student focused on computer science related fields, balancing
  school with personal projects, research, and extracurriculars. I try to stay
  involved wherever I can, whether that’s through leadership, collaboration, or
  helping others learn.
</p>
<p>
  Long term, I want to build technology that actually matters, things that solve
  real problems and feel thoughtful, not just flashy. I’m always trying to learn while being on the <b>edge</b>. The world moves fast, so I try my best to keep up. </p>
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