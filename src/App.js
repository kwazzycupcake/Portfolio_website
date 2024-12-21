import "./App.css";
import React from 'react';
import Navbar from "./Components/navbar_component/navbar";
import Hero from "./Components/hero_component/hero";
import About from "./Components/about_me/about";
import Experience from "./Components/experience/exp";
import Skills from "./Components/skills/skills";
import Projects from "./Components/projects/projects";
import Contact from "./Components/contact/contact";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Recipes from "./Components/recipes/recipes";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section id="about">
        <About />
      </section>
      
      <Experience />
  
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      
    </div>
  );
}
export default App;

// import "./App.css";
// import React from 'react';
// import Navbar from "./Components/navbar_component/navbar";
// import Hero from "./Components/hero_component/hero";
// import About from "./Components/about_me/about";
// import Experience from "./Components/experience/exp";
// import Skills from "./Components/skills/skills";
// import Projects from "./Components/projects/projects";
// import Contact from "./Components/contact/contact";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Recipes from "./Components/recipes/recipes";

// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Routes>
//           {/* Main route with the homepage content */}
//           <Route 
//             path="/" 
//             element={
//               <div>
//                 <Hero />
//                 <section id="about">
//                   <About />
//                 </section>
//                 <Experience />
//                 <section id="skills">
//                   <Skills />
//                 </section>
//                 <section id="projects">
//                   <Projects />
//                 </section>
//                 <section id="contact">
//                   <Contact />
//                 </section>
//               </div>
//             }
//           />
//           {/* Route for the Recipes page */}
//           <Route path="/recipes" element={<Recipes />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

