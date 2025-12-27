import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { ProjectDetail } from "./components/ProjectDetail";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <About />
            <Skills />
            <Projects />
          </>
        } />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="*" element={
          <>
            <Banner />
            <About />
            <Skills />
            <Projects />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;