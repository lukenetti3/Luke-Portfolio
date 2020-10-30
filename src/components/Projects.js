import React from "react"
import homeStyles from "../styles/home.module.scss"
import ProjectCard from "../components/ProjectCard"
import projectCardStyles from "../styles/projectCard.module.scss"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import photographyImg from "../images/PhotographyMockup.png"
import videographyImg from "../images/BryanCav.png"

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

const A = styled.a`
  color: white;
  text-decoration: none;
`

const Projects = () => (
  <StaticQuery
    query={graphql`
      query {
        gcms {
          projectCards(orderBy: order_DESC) {
            title
            appUrl
            codeUrl
            description {
              text
            }
            image {
              url
            }
          }
        }
      }
    `}
    render={data => (
      <section className={homeStyles.Projects} id="my-work">
        <div className={homeStyles.projectHeader}>
          <p style={{ marginBottom: "0" }}>WORK</p>
          <h1>Projects</h1>
        </div>
        <div style={{ textAlign: "center" }}>
          <span className={homeStyles.skillsIcons}>HTML</span>
          <span className={homeStyles.skillsIcons}>CSS</span>
          <span className={homeStyles.skillsIcons}>JavaScript</span>
          <span className={homeStyles.skillsIcons}>React</span>
        </div>

        <div className={projectCardStyles.cardFlex}>
          {console.log(data.gcms.projectCards)}
          {data.gcms.projectCards.map(item => (
            <ProjectCard
              img={item.image.url}
              title={item.title}
              description={item.description.text}
              appLink={item.appUrl}
              codeLink={item.codeUrl}
            />
          ))}
        </div>

        <div
          className={homeStyles.projectHeader}
          style={{ marginTop: "100px" }}
        >
          <h1>Websites</h1>
          <div style={{ textAlign: "center" }}>
            <span className={homeStyles.skillsIcons}>WordPress</span>
            <span className={homeStyles.skillsIcons}>GatsbyJS</span>
            <span className={homeStyles.skillsIcons}>Custom Design</span>
          </div>
          <div className={projectCardStyles.cardFlex}>
            <div className={projectCardStyles.websiteBox}>
              <div className={projectCardStyles.verticalText}>
                <p style={{ fontSize: "27px", fontWeight: "bold" }}>
                  Photographer Website
                </p>
                <p>
                  A website for a photographer using GatsbyJS and Prismic.io as
                  a CMS. The styling was done using Flexbox and CSS Grid. The
                  design was done with the intent to keep the website clean,
                  simple, and imagery focused.
                </p>
                <A
                  href="https://emilynettiphotography.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ProjectButton
                    style={{ backgroundColor: "#7aada4", cursor: "pointer" }}
                  >
                    Website
                  </ProjectButton>
                </A>
              </div>
            </div>
            <div className={projectCardStyles.websiteBox}>
              <img src={photographyImg} alt="computer screen mockup" />
            </div>
          </div>

          

          <div className={projectCardStyles.cardFlex}>
            <div className={projectCardStyles.websiteBox}>
              <img src={videographyImg} alt="computer screen mockup" />
            </div>
            <div className={projectCardStyles.websiteBox}>
              <div className={projectCardStyles.verticalText}>
                <p style={{ fontSize: "27px", fontWeight: "bold" }}>
                  Videography Website
                </p>
                <p>
                  This is the website design and development of a videographer
                  portfolio website. This was built using WordPress and a page
                  builder. The design goal was to display his work but also show
                  imagery and his personality reflected through the website.
                </p>
                <A
                  href="https://bryancavellier.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ProjectButton
                    style={{ backgroundColor: "#7aada4", cursor: "pointer" }}
                  >
                    Website
                  </ProjectButton>
                </A>
              </div>
            </div>
          </div>
        </div>
      </section>
    )}
  />
)

export default Projects
