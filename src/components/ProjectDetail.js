import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import projImg1 from "../assets/img/pillimg.png";
import projImg2 from "../assets/img/pillimg2.jpg";
import projImg3 from "../assets/img/quit1.png";
import projImg4 from "../assets/img/car1.jpg";
import projImg5 from "../assets/img/car2.jpg";
import projImg6 from "../assets/img/noteagent1.png";
import projImg7 from "../assets/img/noteagent2.png";
import projImg8 from "../assets/img/sees1.png";
import projImg9 from "../assets/img/sees2.png";
import projImg10 from "../assets/img/assip2.png";
import projImg11 from "../assets/img/assip1.png";
import projImg12 from "../assets/img/Polyphy1.png";
import projImg13 from "../assets/img/Polyphy2.png";
import projImg14 from "../assets/img/ta1.png";
import projImg15 from "../assets/img/fbla1.png";
import projImg16 from "../assets/img/fbla2.png";
import projImg17 from "../assets/img/chess1.png";
import projImg18 from "../assets/img/cong1.png";
import projImg19 from "../assets/img/Mathnasium1.png";
import projImg20 from "../assets/img/gym`.jpg";
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
    title: "NASA SEES - Hack the GLOBE",
    description: "Machine Learning & Climate Analysis",
    imgUrl: projImg9,
    detailedDescription:
      "Selected for NASA’s SEES program to analyze global climate datasets using dimensionality reduction and unsupervised learning. Applied PCA and clustering methods to identify anomalies and long-term trends. We wanted to see which dimensionality reduction technique best revealed the underlying structure of surface temperature data. Then we used this to identify outliers and inform flag generation in environmental datasets. Presented results to NASA engineers and presented findings at the 2025 American Geophysical Union.",
    technologies: ["Python", "PCA", "KMeans", "Unsupervised Learning (DBSCAN + GMM + Isolation Forest)", "Climate Data"],
    features: [
      "Large-scale environmental data analysis",
      "Dimensionality reduction using PCA",
      "Outlier detection and trend analysis",
      "Technical presentation to NASA researchers"
    ],
    duration: "Summer 2025",
    role: "Student Research Intern",
    githubLink: "https://github.com/duckish-ui/SEES-Dimensionality-Reduction-for-GLOBE-Dataset",
  },

  "assip-ml": {
    title: "ASSIP – Flood & Rainfall Prediction",
    description: "Time-Series Machine Learning Research",
    imgUrl: projImg11,
    detailedDescription:
      "Conducted machine learning research under Dr. Boicu at George Mason University through Aspiring Scientists Summer Internship Program (ASSIP), developing LSTM, XGBoost, and ensemble models for short-term rainfall and flood prediction. First author on a paper accepted to IEEE MIT URTC. Flooding is one of the most damaging weather-related hazards, and improving short-term rainfall forecasts is critical for effective risk management. In this project, I investigated whether machine learning models could provide faster and more accurate hourly rainfall predictions than traditional physics-based approaches. Using over a decade of hourly rainfall data (2012–2024) from the Iowa Environmental Mesonet, I compared a Long Short-Term Memory (LSTM) neural network with an XGBoost regression model, each representing a distinct approach to time-series forecasting. To leverage their complementary strengths, I developed a stacked ensemble that combined predictions from both models. While LSTM captured temporal patterns directly from sequential data and XGBoost excelled at modeling nonlinear feature interactions, the ensemble consistently outperformed both. Over 96% of its predictions fell within ±1 mm of observed rainfall, highlighting the potential of hybrid machine learning systems for reliable, real-time rainfall forecasting and flood preparedness. ",
    technologies: ["Python", "LSTM", "XGBoost", "Time-Series Modeling"],
    features: [
      "Feature engineering for temporal data",
      "Model comparison and validation",
      "Research paper and poster presentation",
      "Peer-reviewed conference acceptance"
    ],
    duration: "Summer 2025",
    role: "Research Intern",
    paperLink: "https://drive.google.com/file/d/1ldQ0HSRQRjrwvN57L9tQwBeBK55aPOCh/view?usp=sharing",
    githubLink: "https://github.com/duckish-ui/Machine-Learning-ASSIP",
  },

"ucsc-cosmic-web": {
  title: "Cosmic Web Visualization",
  description: "Computational Astrophysics & Scientific Visualization",
  imgUrl: projImg13,
  detailedDescription:
    "Contributed to the Rhizome Cosmology project by analyzing and visualizing large-scale cosmic web structures reconstructed using the Monte Carlo Physarum Machine (MCPM), an agent-based probabilistic model inspired by Physarum polycephalum. Worked with PolyPhy, an open-source GPU-accelerated framework, to generate high-resolution 3D scalar density fields from sparse galaxy and dark matter halo catalogs. Focused on refining Taichi-based visualization pipelines to improve volumetric rendering, filament contrast, and parameter sensitivity analysis, enabling clearer scientific interpretation of multi-scale filamentary networks. This work supported ongoing research linking cosmic web filaments to the intergalactic medium and anomalous dispersion measures in fast radio burst observations, under the mentorship of Dr. Elek.",
  technologies: ["Python", "Taichi", "PolyPhy", "GPU Computing", "Agent-Based Modeling", "Data Visualization"],
  features: [
    "Physarum-inspired agent-based reconstruction of 3D cosmic web density fields",
    "Volumetric rendering and interactive exploration of probabilistic filament networks",
    "GPU-accelerated simulation of millions of stochastic agents",
    "Parameter tuning and sensitivity analysis for multi-scale structure recovery",
    "Collaboration with academic researchers in computational cosmology"
  ],
  duration: "2024",
  role: "Student Research Intern",
  githubLink: "https://github.com/PolyPhyHub",
}

,
  /* =======================
     EXTRACURRICULARS & LEADERSHIP
  ======================= */

  "ta-crc": {
    title: "Teaching Assistant @ Cosumnes River College",
    description: "Computer Science Instruction",
    imgUrl: projImg14,
    detailedDescription:
      "First high school student hired as a TA for CISW 300 and CISW 400 (Web Development and Client-Side Programming). Assisted with lectures, created instructional materials, supported course planning, and currently I am helping develop a new course on Python for cybersecurity with Professor Wendell Fishman.",
    technologies: ["Python", "Web Scripting", "JavaScript", "HTML/CSS"],
    features: [
      "Assisted college level CS courses",
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
    imgUrl: projImg16,
    detailedDescription:
      "Led Mira Loma’s largest student organization with over 110 members. Organized competitions, fundraisers, and initiatives to establish FBLA as a credited course for the first time in over a decade. Placed top 3 several times in Introduction to Information Technology at regional and state levels. Placed top 5 in Digital Video Production at the state level twice. Fun fact: This club flyer was what helped us win the elections to become presidents!",
    technologies: ["Leadership", "Basic Python", "Information Technology", "Public Speaking"],
    features: [
      "Managed 110+ members",
      "Organized regional and state competitions",
      "Raised over $1,500 in funds",
      "2x National Qualifier in computer science events"
    ],
    duration: "2022 - Present",
    role: "Co-President"
  },

  "chess": {
    title: "USCF Competitive Chess",
    description: "Competitive Strategy & Analysis",
    imgUrl: projImg17,
    detailedDescription:
      "I’ve been playing chess since I was seven years old. I took a long break from it for a while, but ended up picking it back up during my freshman year, and honestly, it stuck harder than ever. Chess is something I genuinely love. It’s shaped how I think, how I approach problems, and how I deal with pressure. I’ve competed in USCF-rated tournaments across California, earned over $2000 in winnings, and reached a peak rating of 1747, but what keeps me coming back is the process: preparing lines, reviewing games, spotting patterns, and getting better one mistake at a time. Whether it’s a serious tournament game or a random match with friends, I’m always down to play. If you like chess, feel free to add me or challenge me anytime.",
    technologies: ["Strategic Thinking", "Game Theory", "Analysis"],
    features: [
      "2nd Place out of 90 competitors at the 2025 Berkeley Golden State Open",
      "2nd Place out of 44 competitors at the 2024 Central California Open",
      
    ],
    duration: "My whole life :)",
    role: "Competitive Player",
    chessComLink: "https://www.chess.com/member/cryingwolf2009",
    uscfLink: "https://ratings.uschess.org/player/15871783"
  },

  "cac-ambassador": {
  title: "Congressional App Challenge Ambassador",
  description: "Community Outreach & App Development Mentorship",
  imgUrl: projImg18,
  detailedDescription:
    "Served as a Congressional App Challenge Ambassador after previously winning the challenge, supporting students interested in app development through mentorship, technical guidance, and community outreach. Hosted and led Zoom workshops covering pipelines, frontend development, and other strategies, helping participants translate ideas into functional applications. Acted as a bridge between first-time developers and the broader CAC ecosystem.",
  technologies: ["App Development", "JavaScript", "Mentorship", "Public Speaking"],
  features: [
    "Hosted  5 virtual workshops",
    "30+ participants",
    "Promoted accessible pathways into computer science"
  ],
  duration: "August 2025 - November 2025",
  role: "Ambassador"
},

"mathnasium": {
  title: "Mathnasium Instructor",
  description: "Mathematics Instruction & Academic Support",
  imgUrl: projImg19,
  detailedDescription:
    "Tutored students from Algebra through Calculus using the Mathnasium Method. I assisted with personalized lesson plans, guided problem-solving, and tracked progress. Helped 15 students improve grades by ~22% on average while building teaching, communication, and mentoring skills. Used the money to fund college applications. ",
  technologies: ["Applied Mathematics", "Problem Solving", "Instruction"],
  features: [
    "Trigonometry",
    "Pre-Calculus",
    "AP Calculus AB",
    "AP Calculus BC",
    "Emphasis on conceptual understanding over memorization",
  
  ],
  duration: "October 2024 - July 2025",
  role: "Instructor/Tutor"
},

"gym-training": {
  title: "Strength & Conditioning Training",
  description: "Science Based Lifting",
  imgUrl: projImg20,
  detailedDescription:
    "I love to go to the gym with a primary focus on hypertrophy and sustainable progress. My current program follows an anterior–posterior split trained at a three-times-per-week frequency. Going to the gym not only helps be build my physique but also teaches my discipline and other lessons that I use outside of the gym, especially in academics.",
  technologies: [
    "Hypertrophy Programming",
    "Progressive Overload",
    "Recovery Management"
  ],
  features: [
    "Anterior/posterior split trained at high frequency (3x per week)",
    "Emphasis on recovery, volume control, and long-term consistency",
  ],
  duration: "March 2024 - Present",
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
        className="me-3 mb-3"
      >
        Read More
      </Button>
    )}

    {project.chessComLink && (
      <Button
        variant="outline-light"
        href={project.chessComLink}
        target="_blank"
        rel="noopener noreferrer"
        className="me-3 mb-3"
      >
        View Chess.com Profile
      </Button>
    )}

    {project.uscfLink && (
      <Button
        variant="outline-light"
        href={project.uscfLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-3"
      >
        View USCF Profile
      </Button>
    )}

  </Col>
</Row>

      </Container>
    </section>
  );
}