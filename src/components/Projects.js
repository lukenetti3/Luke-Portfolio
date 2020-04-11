import React from "react"
import homeStyles from "../styles/home.module.scss"
import ProjectCard from "../components/ProjectCard"
import projectCardStyles from "../styles/projectCard.module.scss"
import { StaticQuery, graphql } from "gatsby"

const Projects = () => (
  <StaticQuery
    query={graphql`
      query {
        gcms {
          projectCards {
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
          {data.gcms.projectCards.map(item => 
          <ProjectCard
            img={item.image.url}
            title={item.title}
            description={item.description.text}
            appLink={item.appUrl}
            codeLink={item.codeUrl}
          />
          )}
        </div>
      </section>
    )}
  />
)

export default Projects
