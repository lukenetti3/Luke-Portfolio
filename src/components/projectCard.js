import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import homeStyles from "../styles/home.module.scss"
import projectCardStyles from "../styles/projectCard.module.scss"

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

const ProjectCard = props => (
    <div>
      <div className={projectCardStyles.cardStyles}>
        <img
          src={props.img}
          alt=""
          className={projectCardStyles.imgBorder}
          css={zoomImg}
        />
        <div className={projectCardStyles.bodyPadding}>
          <p className={projectCardStyles.title}>{props.title}</p>
          <p className={projectCardStyles.description}>{props.description}</p>

          <div className={homeStyles.flexGrid}>
            <div style={{ flex: "1" }}>
              <ProjectButton style={{ backgroundColor: "#7aada4" }}>
                <A
                  href={props.appLink}
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
                  href={props.codeLink}
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
)

export default ProjectCard
