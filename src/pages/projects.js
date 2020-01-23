import React from "react"
import Layout from "../components/layout"
import homeStyles from "../components/home.module.scss"
import PrimaryButton from "../components/PrimaryButton"
import Highlight from "../components/highlight"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import projectImg from "../images/projectImg.jpg"
import codeImg from "../images/code.jpg"
import lukeImg from "../images/luke.jpg"
import Fade from "react-reveal/Fade"
import Zoom from "react-reveal/Zoom"

const categoryTxt = css({
  textTransform: "uppercase",
  color: "grey",
  fontSize: "1rem",
  marginBottom: "0.5rem",
  letterSpacing: "2px",
})

const centerPage = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(193, 148, 92, 0.14)",
  padding: "9rem",
  flexDirection: 'column',
})

const Projects = () => (
  <div>
    <Layout>
      <section css={centerPage}>
          <Fade bottom>
            <p css={categoryTxt}>project showcase</p>
            <h1>Projects</h1>
            <p className={homeStyles.textPad} style={{width: '70%', textAlign: 'center'}}>
              This is a homepage design and build for a concept project – a chat
              application. I designed the page first then built a responsive web
              page using Webflow.
            </p>
          </Fade>
      </section>
    </Layout>
  </div>
)

export default Projects
