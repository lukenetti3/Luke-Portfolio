import React from "react"
import Layout from "../components/layout"
import homeStyles from "../components/home.module.scss"
import PrimaryButton from "../components/PrimaryButton"
import Highlight from "../components/highlight"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { css } from "@emotion/core"

const scrollLine = css({
  textTransform: "uppercase",
  position: "absolute",
  right: "15rem",
  top: "50rem",
  transform: "rotate(90deg)",
  borderBottom: "2px solid black",
})

const IndexPage = () => (
  <div>
    <Layout>
      <section className={homeStyles.hero}>
        <h1>
          Hi, Luke Netti, <Highlight>Web Developer</Highlight> and{" "}
          <Highlight>Engineer</Highlight>
        </h1>
        <p className={homeStyles.textPad}>
          I am awesome. Hire me. I love my wife and Melly. If you hire me, you
          will get my passion and Melly's professionalism.
        </p>
        <PrimaryButton>see my work</PrimaryButton>
        <div css={scrollLine}>Scroll</div>
      </section>

      <section className={homeStyles.flexGrid} id={homeStyles.Projects}>
        <div className={homeStyles.col}>
          <h1>Projects</h1>
          <span style={{ padding: '4px', marginRight: "20px", backgroundColor: '#7aada4' }}>Website Design</span>
          <span style={{ padding: '4px', marginRight: "20px", backgroundColor: '#7aada4' }}>Website Development</span>
          <span style={{ padding: '4px', backgroundColor: '#7aada4'}}>Concept</span>
          <p className={homeStyles.textPad}>
            This is a homepage design and build for a concept project – a chat
            application. I designed the page first then built a responsive web
            page using Webflow.
          </p>
          <PrimaryButton>see projects</PrimaryButton>
        </div>
        <div className={homeStyles.col}></div>
      </section>
    </Layout>
  </div>
)

export default IndexPage
