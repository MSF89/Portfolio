import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import MyWork from "./Components/MyWork";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import Styles from "./Styles.css"



function App() {
  return (
    <div>
      <Navbar/>
      <About  id="about"  title="Sobre Mi"/>
      <Skills  id="skills"  title="Skills"/>
      <MyWork  id="work"  title="Proyectos"/>
      <Contact id="contact"  title="Contacto" />
    </div>
  );
}



export default App;
