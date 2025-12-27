import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import projImg1 from "../assets/img/pillimg.png";
import projImg2 from "../assets/img/pillimg2.jpg";
import projImg3 from "../assets/img/quit1.png";
import projImg4 from "../assets/img/car1.jpg";
import projImg5 from "../assets/img/car2.jpg";
import projImg6 from "../assets/img/noteagent1.png";
import projImg7 from "../assets/img/noteagent2.png";

export const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

 
 const allProjects = {
  "pill-dispenser": {
  title: "Cost-Effective Automatic Pill Dispenser",
  description: "Embedded Systems & Assistive Technology",
  imgUrl: projImg2,
  images: [projImg2],
  detailedDescription:
    "Led the design and development of a low-cost automatic pill dispenser intended to support individuals with dementia in managing daily medications. Built a full hardware/software system using Arduino, integrating sensors, timing logic, and safety constraints. The app connected with the arduino system was made with HTML, CSS, and JavaScript. Presented model to IEEE judges and placed 3rd globally among 250+ participants from over 25 countries. Earned $125 as a prize.",
  technologies: ["Arduino", "C++", "JavaScript", "HTML/CSS", "Sensors"],
  features: [
    "Automated pill scheduling and dispensing",
    "Sensor-based validation for correct dosing",
    "Fail-safe timing logic",
    "Physical prototype tested under real constraints"
  ],
  duration: "Summer 2025",
  role: "Lead Engineer & App Developer",
  githubLink: "https://github.com/duckish-ui/IEEE-SSCS-Contest",
  youtubeLink: "https://www.youtube.com/watch?v=Mfo9XYn5cXk",
  competitionLink: "https://arduino-contest.sscs.ieee.org/winners"
},
  "quittogether": {
    title: "QuitTogether",
    description: "AI-Powered Mobile Application",
    imgUrl: projImg3,
    detailedDescription:
      "Designed and built an AI-powered mobile application to help students quit vaping through personalization, behavioral nudges, and secure data handling. The app was recognized as the winner of the Congressional App Challenge for California’s 6th District by Representative Ami Bera and featured at the U.S. Capitol.",
    technologies: ["Dart", "Firebase", "JavaScript", "APIs", "LLMs"],
    features: [
     "Secure user authentication and account management with Firebase",
    "Personalized goal creation with tags, due dates, and progress tracking",
    "AI-powered QuitBot",
    "Real-time health and wellness news integration via Google News API",
    "Local rehabilitation center search using ZIP code based API lookup",
    "Editable user profiles with secure password update and verification"
    ],
    duration: "August 2024 -December 2025",
    role: "Founder & Full-Stack Developer",
    githubLink: "https://github.com/duckish-ui/QuitTogether",
    youtubeLink: "https://www.youtube.com/watch?v=s28rSpq_aWw",
    competitionLink: "https://www.congressionalappchallenge.us/24-CA06/"
  },

  "hydrogen-car": {
    title: "Hydrogen Grand Prix Race Car",
    description: "Systems Engineering & Energy Efficiency",
    imgUrl: projImg5,
    detailedDescription:
      "As captain of the Hydrogen Grand Prix team, I led the design and integration of a hydrogen-powered endurance race car. Worked across electrical systems and mechanical design to performance under competition constraints. Placed 6th at NorCal regionals and 11th out of 120 teams at the California State Competition.",
    technologies: ["Systems Engineering", "Electronics", "Energy Systems", "CAD"],
    features: [
      "Hydrogen fuel cell integration",
      "Electrical system design and testing",
      "Energy optimization for an 4 hour race",
      "Custom PCB design"
    ],
    duration: "2023 - Present",
    role: "Team Captain & Systems Engineer"
  },

  "noteagent": {
  title: "NoteAgent",
  description: "LLM-Powered Note-Taking and Task Management Platform",
  imgUrl: projImg7,
  detailedDescription:
    "Contributed to the development of NoteAgent, an LLM-powered note-taking and productivity system built as part of the UC Davis PRISM Machine Learning group. Worked primarily on the React-based frontend while collaborating with backend and research teams to support conversational note interaction, semantic search, and agent-driven task extraction within an active research product.",
  technologies: [
    "React",
    "JavaScript",
    "Django",
    "LangGraph",
    "LLMs",
    "Vector Databases"
  ],
  features: [
     "Block-based React interface for structured note creation",
  "Frontend support for LLM-powered summarization and recall",
  "Semantic note retrieval using vector-based search",
  "Agent-driven task extraction from notes and transcripts",
  ],
  duration: "September 2025 - Present",
  role: "Frontend Developer"
}
,

  /* =======================
     RESEARCH
  ======================= */

  "nasa-sees": {
    title: "NASA SEES – Hack the GLOBE",
    description: "Machine Learning & Climate Analysis",
    imgUrl: projImg2,
    detailedDescription:
      "Selected for NASA’s SEES program to analyze global climate datasets using dimensionality reduction and unsupervised learning. Applied PCA and clustering methods to identify anomalies and long-term trends, presenting results to NASA engineers and submitting findings to AGU.",
    technologies: ["Python", "PCA", "Unsupervised Learning", "Climate Data"],
    features: [
      "Large-scale environmental data analysis",
      "Dimensionality reduction using PCA",
      "Outlier detection and trend analysis",
      "Technical presentation to NASA researchers"
    ],
    duration: "Summer 2025",
    role: "Student Research Intern"
  },

  "assip-ml": {
    title: "ASSIP – Flood & Rainfall Prediction",
    description: "Time-Series Machine Learning Research",
    imgUrl: projImg3,
    detailedDescription:
      "Conducted machine learning research under Dr. Boicu at George Mason University, developing LSTM, XGBoost, and ensemble models for short-term rainfall and flood prediction. First author on a paper accepted to IEEE MIT URTC.",
    technologies: ["Python", "LSTM", "XGBoost", "Time-Series Modeling"],
    features: [
      "Feature engineering for temporal data",
      "Model comparison and validation",
      "Research paper and poster presentation",
      "Peer-reviewed conference acceptance"
    ],
    duration: "Summer 2025",
    role: "Research Intern",
    paperLink: "https://example.com"
  },

  "ucsc-cosmic-web": {
    title: "Cosmic Web Visualization",
    description: "Computational Astrophysics Research",
    imgUrl: projImg1,
    detailedDescription:
      "Assisted in analyzing and visualizing large-scale cosmic web structures using the Monte Carlo Physarum Machine algorithm. Worked on refining Taichi-based visualization tools to support scientific interpretation under Dr. Elek.",
    technologies: ["Python", "Taichi", "Scientific Visualization"],
    features: [
      "Graph-based structure reconstruction",
      "Visualization of 2D and 3D datasets",
      "Research workflow exposure",
      "Collaboration with academic researchers"
    ],
    duration: "2024",
    role: "Student Research Intern"
  },

  /* =======================
     EXTRACURRICULARS & LEADERSHIP
  ======================= */

  "ta-crc": {
    title: "Teaching Assistant – Cosumnes River College",
    description: "Computer Science Instruction",
    imgUrl: projImg2,
    detailedDescription:
      "First high school student hired as a TA for CISW 300 and CISW 400. Assisted with lectures, created instructional materials, supported course planning, and helped develop a new course on Python for cybersecurity.",
    technologies: ["Python", "Web Scripting", "Teaching", "Curriculum Design"],
    features: [
      "Assisted college-level CS courses",
      "Developed educational materials",
      "Supported curriculum development",
      "Mentored enrolled students"
    ],
    duration: "2025",
    role: "Teaching Assistant"
  },

  "fbla": {
    title: "FBLA Co-President",
    description: "Leadership & Organization",
    imgUrl: projImg3,
    detailedDescription:
      "Led Mira Loma’s largest student organization with over 110 members. Organized competitions, fundraisers, and initiatives to establish FBLA as a credited course for the first time in over a decade.",
    technologies: ["Leadership", "Organization", "Public Speaking"],
    features: [
      "Managed 110+ members",
      "Organized regional and state competitions",
      "Raised over $1,500 in funds",
      "Institutional program development"
    ],
    duration: "2024–2025",
    role: "Co-President"
  },

  "chess": {
    title: "USCF Competitive Chess",
    description: "Competitive Strategy & Analysis",
    imgUrl: projImg1,
    detailedDescription:
      "Competed in USCF-rated tournaments across California, earning over $1,500 in winnings and achieving a peak rating of 1747. Emphasized preparation, probabilistic reasoning, and post-game analysis.",
    technologies: ["Strategic Thinking", "Game Theory", "Analysis"],
    features: [
      "State-ranked competitor",
      "Tournament prize earnings",
      "Extensive preparation and review",
      "High-level competitive play"
    ],
    duration: "2019–Present",
    role: "Competitive Player"
  }
};


  const project = allProjects[id];

  if (!project) {
    return (
      <Container className="project-detail" style={{ minHeight: '100vh', paddingTop: '100px' }}>
        <h2>Project not found</h2>
        <Button variant="outline-light" onClick={() => navigate('/')}>Go Back Home</Button>
      </Container>
    );
  }

  return (
    <section className="project-detail" id="project-detail">
      <Container>
        <Row className="align-items-center">
          <Col>
            <Button 
              variant="outline-light" 
              onClick={() => navigate('/')}
              className="mb-4"
            >
              ← Back to Home
            </Button>
          </Col>
        </Row>
        
        <Row className="align-items-center mb-5">
  <Col xs={12} md={6} className="mb-4 mb-md-0">
    {project.images && project.images.length > 0 ? (
      <div className="project-images">
        {project.images.map((image, index) => (
          <img 
            key={index}
            src={image} 
            alt={`${project.title} - Image ${index + 1}`} 
            className="img-fluid rounded mb-3" 
          />
        ))}
      </div>
    ) : (
      <img src={project.imgUrl} alt={project.title} className="img-fluid rounded" />
    )}
  </Col>
          <Col xs={12} md={6}>
            <h2>{project.title}</h2>
            <p className="project-subtitle" style={{ fontSize: '1.2rem', color: '#B8B8B8' }}>
              {project.description}
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.8' }}>
              {project.detailedDescription}
            </p>
            
            {project.duration && (
              <p><strong>Duration:</strong> {project.duration}</p>
            )}
            
            {project.role && (
              <p><strong>Role:</strong> {project.role}</p>
            )}
          </Col>
        </Row>

        <Row className="mt-5">
          <Col xs={12} md={6} className="mb-4">
            <h3>Technologies Used</h3>
            <ul style={{ lineHeight: '2' }}>
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </Col>
          
          <Col xs={12} md={6} className="mb-4">
            <h3>Key Features</h3>
            <ul style={{ lineHeight: '2' }}>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </Col>
        </Row>

        <Row className="mt-4">
  <Col>
    {project.githubLink && (
      <Button 
        variant="outline-light" 
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="me-3 mb-3"
      >
        View on GitHub
      </Button>
    )}
    
    {project.youtubeLink && (
      <Button 
        variant="outline-light" 
        href={project.youtubeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="me-3 mb-3"
      >
        Watch Video
      </Button>
    )}
    
    {project.competitionLink && (
      <Button 
        variant="outline-light" 
        href={project.competitionLink}
        target="_blank"
        rel="noopener noreferrer"
        className="me-3 mb-3"
      >
        View Competition
      </Button>
    )}
    
    {project.liveLink && (
      <Button 
        variant="primary" 
        href={project.liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="me-3 mb-3"
      >
        View Live Demo
      </Button>
    )}
    
    {project.paperLink && (
      <Button 
        variant="outline-light" 
        href={project.paperLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-3"
      >
        Read Paper
      </Button>
    )}
  </Col>
</Row>
      </Container>
    </section>
  );
}