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
        <section className="from-green-400 to-blue-300 bg-gradient-to-r flex flex-wrap justify-between text-white py-24 px-20 mt-10 rounded-3xl shadow-md transform -rotate-1">
          <div className="max-w-xl transform rotate-1">
            <Fade>
              <h1 className="text-6xl font-header font-bold">
                What I Do
              </h1>
            </Fade>
          </div>
          <div className="max-w-xl transform rotate-1">
            <div className="font-body text-xl leading-8" dangerouslySetInnerHTML={{__html: data.gcms.aboutMes[0].developmentParagraph.html}}>  
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
                <h1 className="text-6xl font-header font-bold mb-8">About Me</h1>
                <div className="font-body text-xl leading-8" dangerouslySetInnerHTML={{__html: data.gcms.aboutMes[0].aboutMeParagraph.html}}>  
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
