import React from "react"
import homeStyles from "../styles/home.module.scss"
import Highlight from "../components/Highlight"
import lukeImg from "../images/luke.jpg"
import Fade from "react-reveal/Fade"
import Zoom from "react-reveal/Zoom"
import { css } from "@emotion/core"
import { StaticQuery, graphql } from "gatsby"

const leftImg = css({
  padding: "0 2rem 0 0",
})

const specialP = css({
  fontSize: "2rem",
  textWeight: "bolder",
})

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        gcms {
          aboutMes {
            aboutMeParagraph {
              html
            }
            developmentParagraph {
              html
            }
          }
        }
      }
    `}
    render={data => (
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
            <p dangerouslySetInnerHTML={{__html: data.gcms.aboutMes[0].developmentParagraph.html}}>  
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
                <p dangerouslySetInnerHTML={{__html: data.gcms.aboutMes[0].aboutMeParagraph.html}}>  
            </p>
              </Zoom>
            </div>
          </div>
        </section>
      </div>
    )}
  />
)

export default About
