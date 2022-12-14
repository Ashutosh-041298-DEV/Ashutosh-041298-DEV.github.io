import "./App.css";
import { About } from "./components/.About";
import { Contact } from "./components/contact";
import { Home } from "./components/Home";

import { Navbar } from "./components/Navbar";
import { Projects } from "./components/projects";
import Calender from "./components/calender";
import { Skills } from "./components/skills";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />

      <Projects />
      <div>
        <h1 align="center">📊 My Github Stats</h1>
        <br />
        <Calender />
        <br />
        <p align="center">
          <a
            className="stat"
            href="https://github.com/Ashutosh-041298-DEV/github-readme-stats"
          >
            <img
              alt="Ashutosh-041298-DEV Top Languages"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Ashutosh-041298-DEV&langs_count=8&count_private=true&layout=compact&theme=synthwave"
            />
          </a>
        </p>
        <br />
        <p align="center">
          <a
            className="stat"
            href="https://github.com/Ashutosh-041298-DEV/github-readme-streak-stats"
          >
            <img
              title="🔥 Get streak stats for your profile at git.io/streak-stats"
              alt="Ashutosh-041298-DEV streak"
              src="https://github-readme-streak-stats.herokuapp.com/?user=Ashutosh-041298-DEV&hide_border=true&theme=synthwave"
            />
          </a>
        </p>

        <br />
        <br />
        <p align="center">
          <a
            className="stat"
            href="https://github.com/Ashutosh-041298-DEV/github-readme-stats"
          >
            <img
              alt="Ashutosh-041298-DEV Github Stats"
              src="https://github-readme-stats.vercel.app/api?username=Ashutosh-041298-DEV&show_icons=true&locale=en&theme=synthwave"
            />
          </a>
        </p>
      </div>
      <Contact />
    </div>
  );
}

export default App;
