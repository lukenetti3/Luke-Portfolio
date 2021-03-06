import React from "react"
import lukeImg from "../images/luke.jpg"
import Fade from "react-reveal/Fade"
import Zoom from "react-reveal/Zoom"
import { StaticQuery, graphql } from "gatsby"


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
        <section className="from-green-400 to-blue-300 bg-gradient-to-r flex flex-wrap justify-between text-white mb-2 md:py-36 py-10 md:px-20 px-10 mt-5 rounded-3xl shadow-md transform -rotate-1">
          <div className="max-w-xl transform rotate-1">
            <Fade>
              <h1 className="md:text-6xl text-5xl font-header font-bold pb-5 lg:pb-0">
                What I Do
              </h1>
            </Fade>
          </div>
          <div className="max-w-xl transform rotate-1">
            <div className="font-body md:text-xl text-lg md:leading-8 " dangerouslySetInnerHTML={{__html: data.gcms.aboutMes[0].developmentParagraph.html}}>  
            </div>
          </div>
        </section>

        <section className="mt-24">
          <div className="flex flex-wrap justify-around">
            <div className="max-w-xl">
              <img src={lukeImg} alt="luke headshot" className="rounded-lg"/>
            </div>
            <div className="max-w-xl">
              <Zoom>
                <h1 className="md:text-6xl text-5xl font-header font-bold mb-8">About Me</h1>
                <div className="font-body md:text-xl text-lg md:leading-8" dangerouslySetInnerHTML={{__html: data.gcms.aboutMes[0].aboutMeParagraph.html}}>  
                </div>
              </Zoom>
            </div>
          </div>
        </section>
      </div>
    )}
  />
)

export default About
