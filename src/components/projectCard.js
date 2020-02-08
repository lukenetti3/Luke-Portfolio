import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Calculator from "../images/calculator.png"
import Wedding from "../images/weddingImg.png"
import Pomodoro from "../images/pomodoroClock.png"
import Simon from "../images/simonGame.png"
import homeStyles from "../components/home.module.scss"

const card = css(`
    max-width: 450px;
    border-radius: 5px;
    margin: 70px auto 40px auto;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);
    overflow: hidden;
`)

const bodyPadding = css(`
    padding: 0 20px 20px 20px;
`)

const ProjectButton = styled.button`
  color: white;
  border: none;
  height: 43px;
  width: 120px;
  border-radius: 100px;
  font-size: 1rem;
  @media (max-width: 1000px) {
    height: 45px;
    width: 130px;
    margin-bottom: 1.5rem;
  }
  &:hover {
    transform: scale(1.1);
    transition: all 0.5s;
  }
`

const zoomImg = css(`
&:hover {
    transform: scale(1.1);
  }
  transition: all 1s;
`)

const A = styled.a`
  color: white;
  text-decoration: none;
`

const ProjectCard = () => (
  <div>
    <div className={homeStyles.flexGrid}>
      <div className={homeStyles.col}>
        <div css={card}>
          <img
            src={Calculator}
            alt=""
            style={{ borderRadius: "5px 5px 0 0" }}
            css={zoomImg}
          />
          <div css={bodyPadding}>
            <p style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: '4px' }}>
              JavaScript Calculator
            </p>
            <p style={{fontSize: '1.3rem', paddingBottom: '35px'}}>
              This is a replica build of the standard iPhone calculator app. 
              It was built using HTML, CSS, and JavaScript/jQuery.
            </p>

            <div className={homeStyles.flexGrid}>
              <div style={{ flex: "1" }}>
                <ProjectButton style={{ backgroundColor: "#7aada4" }}>
                  <A
                    href="https://codepen.io/lukenetti3/full/BYeQZj"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    App
                  </A>
                </ProjectButton>
              </div>
              <div style={{ flex: "1" }}>
                <ProjectButton style={{ backgroundColor: "black" }}>
                  <A
                    href="https://github.com/lukenetti3/JavaScript-Calculator"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </A>
                </ProjectButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={homeStyles.col}>
        <div css={card}>
          <img
            src={Wedding}
            alt=""
            style={{ borderRadius: "5px 5px 0 0" }}
            css={zoomImg}
          />
          <div css={bodyPadding}>
            <p style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: '4px' }}>
              Wedding Website
            </p>
            <p style={{fontSize: '1.3rem', paddingBottom: '35px'}}>
              A website for a photographer using WordPress custom theme,
              Bootstrap, and Advanced Custom Fields plugin. It is hosted by
              myself on a Digital Ocean server, using SpinupWP to manage it.
            </p>

            <div className={homeStyles.flexGrid}>
              <div style={{ flex: "1" }}>
                <ProjectButton style={{ backgroundColor: "#7aada4" }}>
                  <A
                    href="https://emilynettiphotography.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    App
                  </A>
                </ProjectButton>
              </div>
              <div style={{ flex: "1" }}>
                <ProjectButton style={{ backgroundColor: "black" }}>
                  <A
                    href="https://github.com/lukenetti3/emily-netti-photography"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </A>
                </ProjectButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={homeStyles.flexGrid}>
      <div className={homeStyles.col}>
        <div css={card}>
          <img
            src={Pomodoro}
            alt=""
            style={{ borderRadius: "5px 5px 0 0" }}
            css={zoomImg}
          />
          <div css={bodyPadding}>
            <p style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: '4px' }}>
              Pomodoro Clock
            </p>
            <p style={{fontSize: '1.3rem', paddingBottom: '35px'}}>
              A Pomodoro Clock built on HTML, CSS, and JavaScript/jQuery.
            </p>

            <div className={homeStyles.flexGrid}>
              <div style={{ flex: "1" }}>
                <ProjectButton style={{ backgroundColor: "#7aada4" }}>
                  <A href="https://codepen.io/lukenetti3/full/ddBvad" target="_blank" rel="noopener noreferrer">
                    App
                  </A>
                </ProjectButton>
              </div>
              <div style={{ flex: "1" }}>
                <ProjectButton style={{ backgroundColor: "black" }}>
                <A href="https://github.com/lukenetti3/Pomodoro-Clock" target="_blank" rel="noopener noreferrer">
                    Code
                  </A>
                </ProjectButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={homeStyles.col}>
        <div css={card}>
          <img
            src={Simon}
            alt=""
            style={{ borderRadius: "5px 5px 0 0" }}
            css={zoomImg}
          />
          <div css={bodyPadding}>
            <p style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: '4px' }}>Simon Game</p>
            <p style={{fontSize: '1.3rem', paddingBottom: '35px'}}>
              This is an old Simon memory game. Select the 'on' radio button
              and click 'start.' Built using HTML, CSS, and JavaScript/jQuery. 
            </p>

            <div className={homeStyles.flexGrid}>
              <div style={{ flex: "1" }}>
                <ProjectButton style={{ backgroundColor: "#7aada4" }}>
                  <A
                    href="https://codepen.io/lukenetti3/full/jzwmyY"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    App
                  </A>
                </ProjectButton>
              </div>
              <div style={{ flex: "1" }}>
                <ProjectButton style={{ backgroundColor: "black" }}>
                <A
                    href="https://github.com/lukenetti3/Simon-Game"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </A>
                </ProjectButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ProjectCard
