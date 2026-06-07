import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import About from "./pages/About";
import Experience from "./pages/Experience";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/about" element={<About />} />
      <Route path="/experience" element={<Experience />} />
    </Routes>
  );
}

export default App;