import React from "react"
import homeStyles from "../styles/home.module.scss"
import Highlight from "../components/Highlight"
import { css } from "@emotion/core"
import Fade from "react-reveal/Fade"
import styled from "@emotion/styled"
import { Link } from "gatsby"
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
    <section className={homeStyles.hero}>
        <Fade bottom>
          <h1>
            Hi, Luke Netti, <Highlight color="#7aada4">Web Developer</Highlight>{" "}
            and
            <Highlight color="#7aada4"> Engineer</Highlight>
          </h1>
          <p className={homeStyles.textPad}>
            I have a passion for web development and love to write code to make
            everything a little bit easier for everyone.
          </p>
          <PrimaryButton>
            <StyledLink to="/#my-work">see my work</StyledLink>
          </PrimaryButton>
          <div css={scrollLine} id={homeStyles.scroll}>
            <Link style={{color: "black", textDecoration: "none"}} to='/#my-work'>Scroll</Link>
          </div>
        </Fade>
      </section>
)

export default Hero

// export const query = graphql`
// query {
//   gcms {
//     hero(where: {id: "ck8s6vi2w0bpc0177183pn4qh"}) {
//       title
//       description {
//         text
//       }
//       button
//     }
//   }
// }
// `