import React from "react"
import Highlight from "./Highlight"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const color = css({
  background: `linear-gradient(180deg,rgba(255,255,255,0) 55%, #fff947 50%)`,
})

const yellowHighlight = css({
  ":hover": color,
})

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`

const Header = () => (
  <div
    css={css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: rgba(193, 148, 92, 0.14);
      padding: 20px 4rem;
      @media (max-width: 1000px) {
        padding: 20px 2rem;
      }
      `}
  >
    <Link to="/" style={{ textDecoration: "none" }}>
      <p style={{ fontWeight: "bolder", margin: "0" }} css={yellowHighlight}>
        Luke Netti.
      </p>
    </Link>
    <div
      css={{
        display: "flex",
        "@media(max-width: 600px)": {
          display: "block",
        },
      }}
    >
      <Link to="" style={{ textDecoration: "none" }}>
        <li>
          <Highlight color="#7aada4">
            <StyledLink to="/#my-work">my work</StyledLink>
          </Highlight>
        </li>
      </Link>
      <Link to="" style={{ textDecoration: "none" }}>
        <li>
          <Highlight color="#7aada4">
            <StyledLink to="/#get-in-touch">get in touch</StyledLink>
          </Highlight>
        </li>
      </Link>
    </div>
  </div>
)

export default Header
