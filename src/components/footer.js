import React from "react"
import Highlight from "./highlight"
import { Link } from "gatsby"
import homeStyles from "./home.module.scss"
import { css } from "@emotion/core"
import Fade from "react-reveal/Fade"

const specialP = css({
  fontWeight: "bolder",
})

const Footer = () => (
  <div>
    <section
      className={homeStyles.flexGrid}
      id={homeStyles.Contact}
      style={{ paddingTop: "0" }}
    >
      <div className={homeStyles.col}>
        <h1>Want to <Highlight color='black'>Work?</Highlight></h1>
      </div>
      <div className={homeStyles.col}>
        <p>
          I’m Luke, an Engineer with a passion for web development and creating
          webspace. I want to work with a business where I can see it thrive.
          You can email me directly at:
        </p>
          <p css={specialP}>Email: luke.netti3@gmail.com</p>
          <p css={specialP}>Phone: 315.329.9451</p>
      </div>
    </section>
  </div>
)

export default Footer
