import React from "react"
import homeStyles from "../styles/home.module.scss"
import Highlight from "../components/Highlight"
import { css } from "@emotion/core"
import Fade from "react-reveal/Fade"
import { Link, graphql, StaticQuery } from "gatsby"
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
      <section className={homeStyles.hero}>
        <Fade bottom>
          <h1>
            Hi, Luke Netti, <Highlight color="#7aada4">Web Developer</Highlight>{" "}
            and
            <Highlight color="#7aada4"> Engineer</Highlight>
          </h1>
          <p className={homeStyles.textPad}>
            {data.gcms.heroes[0].description.text}
          </p>
          <PrimaryButton />
        </Fade>
      </section>
    )}
  />
)

export default Hero
