import React from "react"
import homeStyles from "../styles/home.module.scss"
import Highlight from "../components/Highlight"
import Fade from "react-reveal/Fade"
import { graphql, StaticQuery, Link } from "gatsby"
import PrimaryButton from "../components/PrimaryButton"

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
      <section className="bg-blue-500 mt-2 p-20">
        <Fade bottom>
          <h1 className="font-header font-bold text-white text-6xl mb-4">
            Hi, Luke Netti, Web Developer and Engineer
          </h1>
          <p className="font-body text-white text-lg mb-8">
            {data.gcms.heroes[0].description.text}
          </p>
          <Link
            to="/#my-work"
            className="bg-blue-900 px-5 py-4 rounded-3xl shadow-sm text-white"
          >
            see my work
          </Link>
        </Fade>
      </section>
    )}
  />
)

export default Hero
