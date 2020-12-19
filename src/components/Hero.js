import React from "react"
import Fade from "react-reveal/Fade"
import { graphql, StaticQuery, Link } from "gatsby"

const Hero = () => (
  <StaticQuery
    query={graphql`
      query {
        gcms {
          heroes {
            button
            description {
              text
            }
          }
        }
      }
    `}
    render={data => (
      <section className="bg-blue-500 from-blue-500 to-green-200 bg-gradient-to-r mb-2 py-36 md:px-20 px-10 mt-5 rounded-3xl shadow-md transform rotate-1">
        <div className="transform -rotate-1">
          <Fade bottom>
            <h1 className="font-header font-bold text-white text-6xl mb-4">
              Hi, Luke Netti, Web Developer <br />
              and Engineer
            </h1>
            <p className="font-body text-white text-lg mb-8">
              {data.gcms.heroes[0].description.text}
            </p>
            <Link
              to="/#my-work"
              className="bg-blue-900 px-5 py-4 rounded-3xl shadow-sm text-white transition duration-500 hover:text-blue-900 hover:bg-white"
            >
              see my work
            </Link>
          </Fade>
        </div>
      </section>
    )}
  />
)

export default Hero
