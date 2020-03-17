import React from "react"
import Layout from "../components/layout"
import homeStyles from "../components/home.module.scss"
import PrimaryButton from "../components/PrimaryButton"
import Highlight from "../components/highlight"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import lukeImg from "../images/luke.jpg"
import Fade from "react-reveal/Fade"
import Zoom from "react-reveal/Zoom"
import styled from "@emotion/styled"
import ProjectCard from "../components/projectCard"

const scrollLine = css({
  textTransform: "uppercase",
  position: "absolute",
  right: "15rem",
  top: "50rem",
  transform: "rotate(90deg)",
  borderBottom: "2px solid black",
})

const leftImg = css({
  padding: "0 2rem 0 0",
})

const specialP = css({
  fontSize: "2rem",
  textWeight: "bolder",
})

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`


const IndexPage = () => (
  <div>
    <Layout>
      <section className={homeStyles.hero}>
        <Fade bottom>
          <h1>
            Hi, Luke Netti, <Highlight color="#7aada4">Web Developer</Highlight>{" "}
            and
            <Highlight color="#7aada4"> Engineer</Highlight>
          </h1>
          <p className={homeStyles.textPad}>
            I have a passion for web development and love to write code to make
            everything a little bit easier for everyone.
          </p>
          <PrimaryButton>
            <StyledLink to="/#my-work">see my work</StyledLink>
          </PrimaryButton>
          <div css={scrollLine} id={homeStyles.scroll}>
            <Link style={{color: "black", textDecoration: "none"}} to='/#my-work'>Scroll</Link>
          </div>
        </Fade>
      </section>

      <section className={homeStyles.Projects} id="my-work">
        <div className={homeStyles.projectHeader}>
          <p style={{ marginBottom: "0" }}>WORK</p>
          <h1>Projects</h1>
        </div>
        <div style={{ textAlign: "center" }}>
          <span
            style={{
              padding: "4px",
              marginRight: "20px",
              backgroundColor: "#7aada4",
            }}
          >
            HTML
          </span>
          <span
            style={{
              padding: "4px",
              marginRight: "20px",
              backgroundColor: "#7aada4",
            }}
          >
            CSS
          </span>
          <span
            style={{
              padding: "4px",
              marginRight: "20px",
              backgroundColor: "#7aada4",
            }}
          >
            JavaScript
          </span>
          <span
            style={{
              padding: "4px",
              marginRight: "20px",
              backgroundColor: "#7aada4",
            }}
          >
            React
          </span>
        </div>

        <ProjectCard />
      </section>

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
            I care about writing clean and concise code. Writing software that
            is functional and directional is important to me. This website was
            built using GatsbyJS with the intent that speed and efficiency are
            vital. I have begun the process of branching to React and developing
            a skill set that is modern and current with web development trends.
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
                found out I am an Enneagram 6. I am a hobby man with a passion
                for making music, reading, and sports.
              </p>
            </Zoom>
          </div>
        </div>
      </section>
    </Layout>
  </div>
)

export default IndexPage
