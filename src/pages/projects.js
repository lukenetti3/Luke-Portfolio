import React from "react"
import Layout from "../components/layout"
import homeStyles from "../components/home.module.scss"
import { css } from "@emotion/core"
import Fade from "react-reveal/Fade"
import websiteImg from "../images/emilynettiphotography.png"
import Highlight from "../components/highlight"
import { FaArrowRight } from 'react-icons/fa';

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
  padding: "9rem 9rem 17rem 9rem",
  flexDirection: "column",
})

const websiteStyles = css({
  position: "relative",
  bottom: "12rem",
  width: "75%",
  textAlign: "right",
  boxShadow: "0 0 30px 0 rgba(0, 0, 0, 0.1)",
  borderRadius: "5px",
})

const Projects = () => (
  <div>
    <Layout>
      <section css={centerPage}>
        <Fade bottom>
          <p css={categoryTxt}>project showcase</p>
          <h1>Projects</h1>
          <p
            className={homeStyles.textPad}
            style={{ width: "70%", textAlign: "center" }}
          >
            This is a homepage design and build for a concept project – a chat
            application. I designed the page first then built a responsive web
            page using Webflow.
          </p>
          <a
            href="https://emilynettiphotography.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{textDecoration: "none" }} 
          >
            <p><Highlight color="#7aada4">visit live site <FaArrowRight/></Highlight></p>
          </a>
        </Fade>
      </section>

      <section>
        <div
          className={homeStyles.flexGrid}
          style={{ justifyContent: "center" }}
        >
          <img src={websiteImg} alt="" css={websiteStyles} />
        </div>
      </section>
    </Layout>
  </div>
)

export default Projects
