import React from "react"
import ProjectCard from "../components/ProjectCard"
import { StaticQuery, graphql } from "gatsby"
import photographyImg from "../images/PhotographyMockup.png"
import videographyImg from "../images/BryanCav.png"

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
      <section className="mt-14" id="my-work">
        <div className="flex justify-center align-middle">
          <h2 className="font-header text-6xl font-semibold py-5">Projects</h2>
        </div>
        <div className="flex justify-center">
          <span className="mx-5 mt-2 px-1 rounded-sm bg-blue-300 text-white">
            HTML
          </span>
          <span className="mx-5 mt-2 px-1 rounded-sm bg-blue-400 text-white">
            CSS
          </span>
          <span className="mx-5 mt-2 px-1 rounded-sm bg-blue-500 text-white">
            JavaScript
          </span>
          <span className="mx-5 mt-2 px-1 rounded-sm bg-blue-500 text-white">
            React
          </span>
        </div>

        <div className="flex flex-wrap justify-center">
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

        <div className="mt-24">
          <h1 className="font-header text-6xl font-semibold text-center pb-5">
            Websites
          </h1>
          <div className="flex flex-wrap justify-center">
            <span className="mx-5 mt-2 px-1 rounded-sm bg-green-300 text-white">
              WordPress
            </span>
            <span className="mx-5 mt-2 px-1 rounded-sm bg-green-400 text-white">
              GatsbyJS
            </span>
            <span className="mx-5 mt-2 px-1 rounded-sm bg-green-500 text-white">
              Design
            </span>
          </div>
          <div className="flex justify-center flex-wrap mt-24">
            <div className="">
              <p className="font-bold text-4xl mb-7 font-header">
                Photographer Website
              </p>
              <p className="max-w-2xl mb-10 font-body text-lg">
                A website for a photographer using GatsbyJS and Prismic.io as a
                CMS. The styling was done using Flexbox and CSS Grid. The design
                was done with the intent to keep the website clean, simple, and
                imagery focused.
              </p>
              <a
                className="transition duration-500 transform hover:scale-110 from-green-500 to-green-400 bg-gradient-to-r px-7 py-3 rounded-3xl shadow-sm text-white"
                href="https://emilynettiphotography.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            </div>
            <div className="max-w-2xl pt-10 lg:pt-0">
              <img src={photographyImg} alt="computer screen mockup" />
            </div>
          </div>

          <div className="flex justify-center flex-wrap-reverse mt-24">
            <div className="max-w-2xl lg:pt-0 pt-10">
              <img src={videographyImg} alt="computer screen mockup" />
            </div>
            <div className="max-w-2xl lg:pl-20 pl-0">
              <p className="font-bold text-4xl mb-7 font-header">Videography Website</p>
              <p className="mb-10 font-body text-lg">
                This is the website design and development of a videographer
                portfolio website. This was built using WordPress and a page
                builder. The design goal was to display his work but also show
                imagery and his personality reflected through the website.
              </p>
              <a
                className="transition duration-500 transform hover:scale-110 from-green-500 to-green-400 bg-gradient-to-r px-7 py-3 rounded-3xl shadow-sm text-white"
                href="https://bryancavellier.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            </div>
          </div>
        </div>
      </section>
    )}
  />
)

export default Projects
