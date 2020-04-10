import React from "react"
import homeStyles from "../styles/home.module.scss"
import ProjectCard from "../components/ProjectCard"
import Weather from "../images/weatherApp.png"
import Wedding from "../images/weddingImg.png"
import Pomodoro from "../images/pomodoroClock.png"
import Calculator from "../images/calculator.png"
import projectCardStyles from "../styles/projectCard.module.scss"

const Projects = () => (
  <section className={homeStyles.Projects} id="my-work">
    <div className={homeStyles.projectHeader}>
      <p style={{ marginBottom: "0" }}>WORK</p>
      <h1>Projects</h1>
    </div>
    <div style={{ textAlign: "center" }}>
      <span className={homeStyles.skillsIcons}>HTML</span>
      <span className={homeStyles.skillsIcons}>CSS</span>
      <span className={homeStyles.skillsIcons}>JavaScript</span>
      <span className={homeStyles.skillsIcons}>React</span>
    </div>

    <div className={projectCardStyles.cardFlex}>
      <ProjectCard
        img={Weather}
        title={"Weather App"}
        description={`A weather app built using React hooks, and a weather API. 
        Built using create-react-app, and Bootstrap for styling.`}
        appLink={"https://gallant-mirzakhani-a5f34a.netlify.com/"}
        codeLink={"https://github.com/lukenetti3/Weather-App"}
      />
      <ProjectCard
        img={Wedding}
        title={"Wedding Website"}
        description={`A website for a photographer using WordPress custom theme,
        Bootstrap, and Advanced Custom Fields plugin. It is hosted by
        myself on a Digital Ocean server, using SpinupWP to manage it.`}
        appLink={"https://emilynettiphotography.com"}
        codeLink={"https://github.com/lukenetti3/emily-netti-photography"}
      />
      <ProjectCard
        img={Pomodoro}
        title={"Pomodoro Clock"}
        description={
          "A Pomodoro Clock built on HTML, CSS, and JavaScript/jQuery."
        }
        appLink={"https://codepen.io/lukenetti3/full/ddBvad"}
        codeLink={"https://github.com/lukenetti3/Pomodoro-Clock"}
      />
      <ProjectCard
        img={Calculator}
        title={"JavaScript Calculator"}
        description={`his is a replica build of the standard iPhone calculator app. 
        It was built using HTML, CSS, and JavaScript/jQuery.`}
        appLink={"https://codepen.io/lukenetti3/full/BYeQZj"}
        codeLink={"https://github.com/lukenetti3/JavaScript-Calculator"}
      />
    </div>
  </section>
)

export default Projects
