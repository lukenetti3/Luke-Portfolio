import React from "react"
import ProjectCard from "../components/ProjectCard"
import { StaticQuery, graphql } from "gatsby"
import photographyImg from "../images/photographyMockup.png"
import apexImg from "../images/apexMockup.png"

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
        {console.log(data)}
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
            <span className="mx-5 mt-2 px-1 rounded-sm bg-green-500 text-white">
              Design
            </span>
          </div>
          <div className="flex justify-center flex-wrap mt-24">
            <div className="">
              <p className="font-bold text-4xl mb-7 font-header">
                Emily Netti Photography
              </p>
              <p className="max-w-2xl mb-10 font-body text-lg">
                The client wanted an updated website design for her photography
                business. She does wedding photography as well as lifestyle
                sessions. Her need for a website was so she can showcase her
                work and have an easy way for potential clients to get in touch
                with her.
              </p>
              <a
                className="transition duration-500 transform hover:scale-110 from-green-500 to-green-400 bg-gradient-to-r px-7 py-3 rounded-3xl shadow-sm text-white"
                href="https://emilynettiphotography.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                website
              </a>
            </div>
            <div className="max-w-2xl pt-10 lg:pt-0">
              <img src={photographyImg} alt="computer screen mockup" />
            </div>
          </div>

          <div className="flex justify-center flex-wrap-reverse mt-24">
            <div className="max-w-2xl lg:pt-0 pt-10">
              <img src={apexImg} alt="computer screen mockup" />
            </div>
            <div className="max-w-2xl lg:pl-20 pl-0">
              <p className="font-bold text-4xl mb-7 font-header">
                Apex Spray Foam
              </p>
              <p className="mb-10 font-body text-lg">
                A construction company that needed a website to represent who
                they were and what they stood for. This website helped them show
                their work to future clients. It also allowed them to update
                their content in an easy and efficient way.
              </p>
              <a
                className="transition duration-500 transform hover:scale-110 from-green-500 to-green-400 bg-gradient-to-r px-7 py-3 rounded-3xl shadow-sm text-white"
                href="https://apexsprayfoam.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                website
              </a>
            </div>
          </div>
        </div>
      </section>
    )}
  />
)

export default Projects
