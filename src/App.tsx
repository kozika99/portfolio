import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Education from "./components/education";
import Experience from "./components/experience";

function App() {
  return (
    <div className="min-h-screen">
      <div className="max-w-5xl w-11/12 mx-auto">
        <Header />
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
