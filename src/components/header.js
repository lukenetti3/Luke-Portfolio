import React from "react"
import Highlight from "./highlight"
import { Link } from "gatsby"
import { css } from "@emotion/core"

const color = css({
  background: `linear-gradient(180deg,rgba(255,255,255,0) 55%, #fff947 50%)`,
})

const yellowHighlight = css({
  ":hover": color,
})

const Header = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "rgba(193, 148, 92, 0.14)",
      padding: "20px 4rem",
    }}
  >
    <Link to="/" style={{ textDecoration: "none" }}>
      <p style={{ fontWeight: "bolder", margin: "0" }} css={yellowHighlight}>
        Luke Netti.
      </p>
    </Link>
    <div
      css={{
        display: 'flex',
        "@media(max-width: 600px)": {
          display: 'block',
        },
      }}
    >
      <Link to="" style={{ textDecoration: "none" }}>
        <li>
          <Highlight color="#7aada4" css={yellowHighlight}>
            my work
          </Highlight>
        </li>
      </Link>
      <Link to="" style={{ textDecoration: "none" }}>
        <li>
          <Highlight color="#7aada4">get in touch</Highlight>
        </li>
      </Link>
    </div>
  </div>
)

export default Header
