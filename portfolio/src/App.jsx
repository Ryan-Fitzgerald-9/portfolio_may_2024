import './app.scss'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import Parallax from './components/parallax/Parallax'

function App() {
  return <div>
    <section id="Home">
      <Navbar/>
      <Home/>
    </section>
    <section id="Skills"><Parallax type="skills"/></section>
    <section>Skills</section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section>Portfolio4</section>
    <section id="Contact">Contact</section>
  </div>
}

export default App
