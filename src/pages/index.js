import React from "react"
import Layout from "../components/layout"
import homeStyles from "../components/home.module.scss"
import PrimaryButton from "../components/PrimaryButton"
import Highlight from "../components/highlight"
import { Link } from "gatsby"
import { css, jsx } from "@emotion/core"
import projectImg from "../images/projectImg.jpg"
import codeImg from "../images/code.jpg"
import lukeImg from "../images/luke.jpg"
import Fade from "react-reveal/Fade"
import Zoom from "react-reveal/Zoom"
import styled from "@emotion/styled"

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

const categoryTxt = css({
  textTransform: "uppercase",
  color: "grey",
  fontSize: "1rem",
  marginBottom: "0.5rem",
  letterSpacing: "2px",
})

const specialP = css({
  fontSize: "2rem",
  textWeight: "bolder",
})

const boxShadow = css({
  boxShadow: "2px 2px px 2px rgba(0,0,0,0.3)",
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
            I am awesome. Hire me. I love my wife and Melly. If you hire me, you
            will get my passion and Melly's professionalism.
          </p>
          <PrimaryButton>see my work</PrimaryButton>
          <div css={scrollLine} id={homeStyles.scroll}>
            Scroll
          </div>
        </Fade>
      </section>

      <section className={homeStyles.flexGrid} id={homeStyles.Projects}>
        <div className={homeStyles.col} style={{ marginRight: "7rem" }}>
          <p css={categoryTxt}>Work</p>
          <h1>Projects</h1>
          <span
            style={{
              padding: "4px",
              marginRight: "20px",
              backgroundColor: "#7aada4",
            }}
          >
            Website Design
          </span>
          <span
            style={{
              padding: "4px",
              backgroundColor: "#7aada4",
            }}
          >
            Website Development
          </span>
          <p className={homeStyles.textPad}>
            This is a homepage design and build for a concept project – a chat
            application. I designed the page first then built a responsive web
            page using Webflow.
          </p>
          <PrimaryButton>
            <StyledLink to="/projects">see projects</StyledLink>
          </PrimaryButton>
        </div>
        <div className={homeStyles.col}>
          <Fade right>
            <img src={projectImg} alt="" className={homeStyles.imgPad} />
          </Fade>
        </div>
      </section>

      <section
        className={homeStyles.flexGrid}
        id={homeStyles.Projects}
        style={{ paddingTop: "0" }}
      >
        <div className={homeStyles.col} style={{ marginRight: "7rem" }}>
          <p css={categoryTxt}>Skillset</p>
          <h1>Web Development</h1>
          <span
            style={{
              padding: "4px",
              marginRight: "20px",
              backgroundColor: "#7aada4",
            }}
          >
            WordPress
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
          <span style={{ padding: "4px", backgroundColor: "#7aada4" }}>
            HTML, CSS
          </span>
          <p className={homeStyles.textPad}>
            This is a homepage design and build for a concept project – a chat
            application. I designed the page first then built a responsive web
            page using Webflow.
          </p>
          <PrimaryButton>
            <StyledLink to="/projects">see projects</StyledLink>
          </PrimaryButton>
        </div>
        <div className={homeStyles.col}>
          <Fade right>
            <img src={codeImg} alt="" className={homeStyles.imgPad} />
          </Fade>
        </div>
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
          <p css={specialP}>Design</p>
          <p>
            I design beautiful and powerful websites for modern businesses. Any
            business today needs a website that wins customers’ trust and helps
            you do your business well. I make sure your website is up to that
            standard.
          </p>
          <p css={specialP}>Development</p>
          <p>
            I build websites in Webflow where I can create responsive, powerful
            and fully custom websites. Plus, Webflow has an incredibly simple
            Content Editor for you and your team to edit website content quickly
            and easily.
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
              <p css={specialP}>About Me</p>
              <p>
                Hello there, I’m Luke, an Engineer with a passion for web
                development and creating webspace for creatives. Thanks to my
                wife, I recently found out I am an Enneagram 6. I am a hobby man
                with a passion for making music, reading, and sports.
              </p>
            </Zoom>
          </div>
        </div>
      </section>
    </Layout>
  </div>
)

export default IndexPage
