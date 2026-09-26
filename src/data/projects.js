import projImg2 from "../assets/img/pillimg2.jpg";
import projImg3 from "../assets/img/quit1.png";
import projImg5 from "../assets/img/car2.jpg";
import projImg7 from "../assets/img/noteagent2.png";
import projImg9 from "../assets/img/sees2.png";
import projImg11 from "../assets/img/assip1.png";
import projImg13 from "../assets/img/Polyphy2.png";
import projImg17 from "../assets/img/chess1.png";
import projImg18 from "../assets/img/cong1.png";
import projImg19 from "../assets/img/Mathnasium1.png";
import projImg20 from "../assets/img/gym`.jpg";

export const allProjects = {
  "pill-dispenser": {
    title: "PillPoint",
    description: "Connected hardware for medication management",
    imgUrl: projImg2,
    images: [projImg2],
    detailedDescription:
      "Engineered an IoT pill dispenser in C++ on an ESP32, using four-channel servo control to automate medication delivery for dementia care. Built an embedded HTTP server and REST API connected to a JavaScript web interface for real-time actuation, device state management, and remote override. The project placed third globally in the IEEE SSCS Arduino contest.",
    technologies: [
      "C++",
      "ESP32",
      "JavaScript",
      "HTML/CSS",
      "REST APIs",
      "Embedded HTTP Server",
    ],
    role: "Lead Engineer & App Developer",
    githubLink: "https://github.com/duckish-ui/IEEE-SSCS-Contest",
    youtubeLink: "https://www.youtube.com/watch?v=Mfo9XYn5cXk",
    competitionLink: "https://arduino-contest.sscs.ieee.org/winners",
    why: "A small everyday task can become a real source of stress when memory is unreliable. I wanted to connect software to something tangible: a device that makes a routine easier for both a person and their caregiver.",
  },
  quittogether: {
    title: "QuitTogether",
    description: "AI-Powered Mobile Application",
    imgUrl: projImg3,
    detailedDescription:
      "Designed and built an AI-powered mobile app to support students trying to quit vaping. Integrated Firebase authentication and profile management, personalized goals, an AI QuitBot, and external APIs for wellness information and local support resources. Won the Congressional App Challenge for California's 6th District and was featured at the U.S. Capitol.",
    technologies: ["Dart", "Firebase", "JavaScript", "APIs", "LLMs"],
    role: "Founder & Full-Stack Developer",
    githubLink: "https://github.com/duckish-ui/QuitTogether",
    youtubeLink: "https://www.youtube.com/watch?v=s28rSpq_aWw",
    competitionLink: "https://www.congressionalappchallenge.us/24-CA06/",
    why: "Deciding to quit is one moment; sticking with it is a series of much smaller ones. I wanted to build something people could return to between those moments, with encouragement, practical goals, and a way to find support.",
  },
  "hydrogen-car": {
    title: "Hydrogen Grand Prix Race Car",
    description: "Systems Engineering & Energy Efficiency",
    imgUrl: projImg5,
    detailedDescription:
      "Captained a team building a hydrogen-powered endurance race car. Led fuel-cell integration, electrical systems, custom PCB design, and energy optimization under competition constraints. The team placed sixth at NorCal regionals and eleventh among 120 teams at the California state competition.",
    technologies: [
      "Systems Engineering",
      "Electronics",
      "Energy Systems",
      "CAD",
    ],
    role: "Team Captain & Systems Engineer",
    why: "A fast lap means little if the car cannot finish the race. I enjoyed the tradeoffs: chasing speed while budgeting energy, finding weak points, and watching a collection of parts become a system that actually works.",
  },
  noteagent: {
    title: "NoteAgent",
    description: "AI-powered notes and task workflows",
    imgUrl: projImg7,
    detailedDescription:
      "Built the React/ES6+ frontend for NoteAgent at the UC Davis PRISM AI Lab. Implemented Redux and Context state management for real-time interface updates and asynchronous task queues, and integrated API-driven semantic search and AI workflows. Focused on modular components and predictable frontend state as requests and background tasks completed.",
    technologies: [
      "React",
      "JavaScript / ES6+",
      "Redux",
      "Context API",
      "REST APIs",
      "Django",
      "LangGraph",
      "Vector Databases",
    ],
    role: "Software Engineer Intern (Frontend) - UC Davis PRISM AI Lab",
    why: "Notes are easy to collect and surprisingly hard to use again. What interested me was closing that gap: helping someone find the thought they forgot, pick up a conversation, or turn a page of ideas into a next step.",
  },
  "nasa-sees": {
    title: "NASA SEES - Hack the GLOBE",
    description: "Data pipelines and environmental anomaly detection",
    imgUrl: projImg9,
    detailedDescription:
      "Engineered Python preprocessing pipelines with YData Profiling to clean, impute, and feature-engineer temporal and geospatial environmental data. Implemented PCA, t-SNE, and UMAP to map high-dimensional surface temperatures into two-dimensional embeddings, with a reported reconstruction error of 0.0350. Combined Isolation Forest, DBSCAN, and Gaussian mixture models to flag corrupt sensor logs and environmental outliers.",
    technologies: [
      "Python",
      "YData Profiling",
      "PCA",
      "t-SNE",
      "UMAP",
      "Isolation Forest",
      "DBSCAN",
      "Gaussian Mixture Models",
    ],
    role: "Software Engineering Research Intern - NASA",
    githubLink:
      "https://github.com/duckish-ui/SEES-Dimensionality-Reduction-for-GLOBE-Dataset",
    why: "An unusual reading can be the most interesting part of a dataset, or just a broken sensor. I liked working on that distinction: making messy observations usable without throwing away the signals worth investigating.",
  },
  "assip-ml": {
    title: "ASSIP - Rainfall Prediction",
    description: "Time-Series Machine Learning Research",
    imgUrl: projImg11,
    detailedDescription:
      "Developed LSTM and XGBoost models for short-term rainfall forecasting at George Mason University under Dr. Boicu. Built a stacked ensemble to combine temporal sequence learning with nonlinear feature interactions. More than 96% of predictions fell within 1 mm of observed rainfall. First author on a paper accepted to IEEE MIT URTC.",
    technologies: ["Python", "LSTM", "XGBoost", "Time-Series Modeling"],
    role: "Research Intern - George Mason University",
    paperLink:
      "https://drive.google.com/file/d/1ldQ0HSRQRjrwvN57L9tQwBeBK55aPOCh/view?usp=sharing",
    githubLink: "https://github.com/duckish-ui/Machine-Learning-ASSIP",
    why: "Rain is familiar; predicting what it will do next is not. I wanted to see whether two models that make different kinds of mistakes could work better together, especially on a problem with consequences beyond a benchmark.",
  },
  "ucsc-cosmic-web": {
    title: "Cosmic Web Visualization",
    description: "Computational Astrophysics & Scientific Visualization",
    imgUrl: projImg13,
    detailedDescription:
      "Contributed to the Rhizome Cosmology project under Dr. Elek, using PolyPhy and the Monte Carlo Physarum Machine to reconstruct cosmic web density fields from sparse galaxy and dark matter halo catalogs. Refined Taichi-based, GPU-accelerated visualization pipelines to improve volumetric rendering, filament contrast, and parameter sensitivity analysis.",
    technologies: [
      "Python",
      "Taichi",
      "PolyPhy",
      "GPU Computing",
      "Agent-Based Modeling",
      "Data Visualization",
    ],
    role: "Student Research Intern - UC Santa Cruz",
    githubLink: "https://github.com/PolyPhyHub",
    why: "A list of galaxy coordinates does not immediately look like a connected universe. I was drawn to making that hidden structure visible, especially through a model inspired by the way slime molds build networks.",
  },
  chess: {
    title: "USCF Competitive Chess",
    description: "Competitive Strategy & Analysis",
    imgUrl: projImg17,
    detailedDescription:
      "I compete in USCF-rated tournaments across California, with a peak rating of 1747 and more than $2,000 in tournament winnings. I spend as much time reviewing games and preparing lines as I do playing. If you are up for a game, you can find me on Chess.com.",
    technologies: ["Strategic Thinking", "Game Theory", "Analysis"],
    role: "Competitive Player",
    chessComLink: "https://www.chess.com/member/cryingwolf2009",
    uscfLink: "https://ratings.uschess.org/player/15871783",
    why: "There is nowhere to hide in a chess game: your decisions stay on the board. I keep coming back for the moment when a position that felt impossible suddenly makes sense, and for the reminder that a bad move does not have to decide the whole game.",
  },
  "cac-ambassador": {
    title: "Congressional App Challenge Ambassador",
    description: "Community Outreach & App Development Mentorship",
    imgUrl: projImg18,
    detailedDescription:
      "Supported first-time developers as a Congressional App Challenge Ambassador after winning the competition. Led five virtual workshops for more than 30 participants, covering frontend development, project workflows, and turning an app idea into a working submission.",
    technologies: [
      "App Development",
      "JavaScript",
      "Mentorship",
      "Public Speaking",
    ],
    role: "Ambassador",
    why: "The jump from 'I have an idea' to 'I can build this' can feel enormous. I wanted to make it smaller for someone else by sharing the practical things I wished I had known when starting out.",
  },
  mathnasium: {
    title: "Mathnasium Instructor",
    description: "Mathematics Instruction & Academic Support",
    imgUrl: projImg19,
    detailedDescription:
      "Tutored students from algebra through calculus using personalized lesson plans and guided problem-solving. Helped 15 students improve their grades by roughly 22% on average, with an emphasis on understanding a method rather than memorizing its steps.",
    technologies: ["Applied Mathematics", "Problem Solving", "Instruction"],
    role: "Instructor/Tutor",
    why: "My favorite part of teaching is the pause before someone says, 'Oh, I get it.' Finding a different way to explain the same idea taught me as much about listening as it did about math.",
  },
  "gym-training": {
    title: "Strength & Conditioning Training",
    description: "Science Based Lifting",
    imgUrl: projImg20,
    detailedDescription:
      "I train for hypertrophy and sustainable progress, using an anterior-posterior split and tracking how volume, recovery, and consistency affect performance. It is a practice in making small adjustments and giving them enough time to work.",
    technologies: [
      "Hypertrophy Programming",
      "Progressive Overload",
      "Recovery Management",
    ],
    why: "Lifting gives me a kind of feedback that is hard to argue with. Progress is gradual, consistency matters, and sometimes the best thing you can do is recover and come back tomorrow.",
  },
  guthealth: {
    title: "GutHealth",
    description: "Asynchronous health analytics & AI workflows",
    detailedDescription:
      "Built a full-stack meal and symptom tracker with a React/TypeScript dashboard, FastAPI, and PostgreSQL. Auth0 and JWT-protected APIs isolate each user's records. Redis and Celery run background analysis of delayed ingredient-symptom associations, with permutation tests and false-discovery adjustment. A LangGraph workflow turns aggregate results into structured explanations, with a deterministic fallback when AI is unavailable. Docker Compose and GitHub Actions support repeatable builds and automated backend and frontend tests. The analysis surfaces exploratory patterns, not diagnoses.",
    role: "Full-Stack Developer",
    technologies: [
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Auth0",
      "Redis",
      "Celery",
      "LangGraph",
      "OpenAI API",
      "Docker",
      "GitHub Actions",
      "Pytest",
      "Vitest",
    ],
    why: "A food diary can tell you what happened without helping you see a pattern. I wanted to connect the entries across days, make the results understandable, and give someone a better starting point for questions instead of another spreadsheet to interpret.",
    githubLink: "https://github.com/duckish-ui/GutHealth",
  },
  mathlink: {
    title: "MathLink",
    description: "Collaborative math learning with AI assistance",
    detailedDescription:
      "Built a peer-to-peer math platform in React and TypeScript with Cloud Firestore for real-time document synchronization and Firebase Auth for authenticated study sessions. Integrated Gemini API workflows to generate problem explanations and personalized learning assistance from user inputs.",
    role: "Full-Stack Developer",
    technologies: [
      "React",
      "TypeScript",
      "Firebase Auth",
      "Cloud Firestore",
      "NoSQL",
      "Gemini API",
      "Tailwind CSS",
    ],
    why: "Getting stuck on a math problem is often easier to work through with another person. I wanted to bring that shared study-table experience online, with explanations available when a group needs a nudge rather than a complete change of direction.",
  },
  smud: {
    title: "SMUD / SETA",
    description: "Enterprise data engineering & operational analytics",
    detailedDescription:
      "Engineered and optimized more than five production ETL pipelines in Python and SQL to automate ingestion and migration across internal enterprise databases. Built a Power BI analytics dashboard tracking more than 300 AI support tickets, with relational data models and automated refresh jobs to surface operational insights for IT stakeholders.",
    role: "Software Engineer Intern",
    technologies: [
      "Python",
      "SQL",
      "ETL Pipelines",
      "Power BI",
      "Relational Data Modeling",
    ],
    why: "The useful part of a dashboard is the decision someone can make after looking at it. I enjoyed the work underneath: connecting scattered data, making refreshes dependable, and turning an internal process into something a team could actually see.",
  },
};
