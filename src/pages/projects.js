import React from "react"
import Layout from "../components/layout"
import homeStyles from "../components/home.module.scss"
import { css } from "@emotion/core"
import Fade from "react-reveal/Fade"
import websiteImg from "../images/emilynettiphotography.png"
import Highlight from "../components/highlight"
import { FaArrowRight, FaGithub, FaCodepen } from "react-icons/fa"
import Calculator from "../images/calculator.png"

const categoryTxt = css({
  textTransform: "uppercase",
  color: "grey",
  fontSize: "1rem",
  marginBottom: "0.5rem",
  letterSpacing: "2px",
})

const centerPage = css(css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(193, 148, 92, 0.14);
  padding: 4rem 9rem 17rem 9rem;
  flex-direction: column;
  @media (max-width: 1000px) {
    padding: 2rem;
  }
`)

const websiteStyles = css(css`
  position: relative;
  bottom: 15rem;
  width: 75%;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-bottom: -10rem;
  @media (max-width: 1000px) {
    bottom: 2rem;
    width: 90%;
    margin-bottom: 0;
    margin-right: 5%;
    margin-left: 5%;
  }
`)

const githubImg = css(css`
    position: relative;
    bottom: 12rem;
    width 75%;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: -7rem;
    border-radius: 5px;
    @media (max-width: 1000px) {
        bottom: 2rem;
        width: 90%;
        margin-bottom: 0;
        margin-right: 5%;
        margin-left: 5%;
      }
`)

const Projects = () => (
  <div>
    <Layout>
      <section css={centerPage}>
        <Fade bottom>
          <p css={categoryTxt}>project showcase</p>
          <h1>Projects</h1>
          <p
            className={homeStyles.textPad}
            style={{ width: "70%", textAlign: "center", marginBottom: "0" }}
          >
            This website is a simple and classic website for Emily Netti Photography.
            I chose a minimal style plan that included a few core colors.
            Creating a clean, fast, and mobile responsive website.
          </p>
          <a
            href="https://emilynettiphotography.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <p>
              <Highlight color="#7aada4">
                visit live site <FaArrowRight />
              </Highlight>
            </p>
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

      <section
        className={homeStyles.flexGrid}
        id={homeStyles.About}
        style={{paddingTop: '0', paddingBottom: '17%'}}
      >
        <div className={homeStyles.col}>
          <Fade>
            <h1>
              Projects using <Highlight color="#c2988b">JavaScript</Highlight>
            </h1>
          </Fade>
        </div>
        <div className={homeStyles.col}>
          <p
            className={homeStyles.textPad}
            style={{ marginBottom: "0", paddingBottom: "0" }}
          >
            For more projects using JavaScript, please see:{" "}
            <p style={{ paddingTop: "2rem" }}>
              <a
                href="https://github.com/lukenetti3"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white", textDecoration: "underline" }}
              >
                Github account.
              </a>
              <FaGithub
                style={{ color: "white", fontSize: "25px", margin: "0 10px" }}
              />
            </p>
          </p>

          <p
            className={homeStyles.textPad}
            style={{ marginBottom: "0", paddingTop: "0" }}
          >
            <a
              href="https://codepen.io/lukenetti3"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", textDecoration: "underline" }}
            >
              <br />
              Codepen account.
            </a>
            <FaCodepen
              style={{ color: "white", fontSize: "25px", margin: "0 10px" }}
            />
          </p>
        </div>
      </section>

      <section
        className={homeStyles.flexGrid}
        style={{ justifyContent: "center" }}
        css={css`
          padding-top: 1rem;
        `}
      >
        <img src={Calculator} alt="" css={githubImg} />
      </section>
    </Layout>
  </div>
)

export default Projects
