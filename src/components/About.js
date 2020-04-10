import React from "react"
import homeStyles from "../styles/home.module.scss"
import Highlight from "../components/Highlight"
import lukeImg from "../images/luke.jpg"
import Fade from "react-reveal/Fade"
import Zoom from "react-reveal/Zoom"
import { css } from "@emotion/core"

const leftImg = css({
    padding: "0 2rem 0 0",
  })
  
  const specialP = css({
    fontSize: "2rem",
    textWeight: "bolder",
  })

const About = () => (
  <div>
    <section
      className={homeStyles.flexGrid}
      id={homeStyles.About}
      style={{ paddingTop: "0" }}
    >
      <div className={homeStyles.col}>
        <Fade>
          <h1>
            What I <Highlight color="#c2988b">Do</Highlight>
          </h1>
        </Fade>
      </div>
      <div className={homeStyles.col}>
        <p css={specialP}>Development</p>
        <p>
          I care about writing clean and concise code. Writing software that is
          functional and directional is important to me. This website was built
          using GatsbyJS with the intent that speed and efficiency are vital. I
          have begun the process of branching to React and developing a skill
          set that is modern and current with web development trends.
        </p>
        <p>
          Hiring me will give your company a focused and attention to detail
          employee, looking to make the world a better place from behind a
          screen.
        </p>
      </div>
    </section>

    <section id={homeStyles.AboutMe}>
      <div className={homeStyles.flexGrid}>
        <div className={homeStyles.col}>
          <img src={lukeImg} css={leftImg} alt="" />
        </div>
        <div className={homeStyles.col}>
          <Zoom>
            <h1>About Me</h1>
            <p>
              Hello there, I’m Luke, an engineer with a passion for web
              development and creating software. Thanks to my wife, I recently
              found out I am an Enneagram 6. I am a hobby man with a passion for
              making music, reading, and sports.
            </p>
          </Zoom>
        </div>
      </div>
    </section>
  </div>
)

export default About
