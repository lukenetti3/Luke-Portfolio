import React from "react"
import homeStyles from "../styles/home.module.scss"
import Highlight from "../components/Highlight"
import { css } from "@emotion/core"
import Fade from "react-reveal/Fade"
import styled from "@emotion/styled"
import { Link, graphql, StaticQuery } from "gatsby"
import PrimaryButton from "../components/PrimaryButton"

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const scrollLine = css({
  textTransform: "uppercase",
  position: "absolute",
  right: "15rem",
  top: "50rem",
  transform: "rotate(90deg)",
  borderBottom: "2px solid black",
})

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
            {console.log(data.gcms.heroes[0].button)}
          </p>
          <PrimaryButton>
            <StyledLink to="/#my-work">{data.gcms.heroes[0].button}</StyledLink>
          </PrimaryButton>
          <div css={scrollLine} id={homeStyles.scroll}>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/#my-work"
            >
              Scroll
            </Link>
          </div>
        </Fade>
      </section>
    )}
  />
)

export default Hero
