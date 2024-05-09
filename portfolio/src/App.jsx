import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";

function App() {
  return (
      <div className="app">
        <Cursor />
        <section id="Home">
          <Navbar />
          <Home />
        </section>
        <section id="Skills">
          <Parallax type="skills" />
        </section>
        <section>
          <Skills />
        </section>
        <section id="Portfolio">
          <Parallax type="portfolio" />
        </section>
          <Portfolio />
        <section id="Contact">
          <Contact />
        </section>
      </div>
  );
}

export default App;
