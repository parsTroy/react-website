import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


// Colour Pallete
//        Dark - #151a1d
//        Dark-light - #1b3338
//        Teal - #669297
//        Text - #caccc1
//        Accent - #bf874c


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
