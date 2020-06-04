import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { css } from "@emotion/core"

const buttonMove = css({
  transform: "translate(10px, 10px)",
})

const buttonHover = css({
  ":hover": buttonMove,
})

const Button = styled.button`
  background-color: black;
  color: white;
  border: none;
  height: 63px;
  width: 200px;
  font-size: 1.2rem;
  @media (max-width: 1000px) {
    height: 53px;
    width: 150px;
    margin-bottom: 1.5rem;
  }
`

const outlineBox = css({
  height: "63px",
  width: "200px",
  border: "3px solid black",
  position: "relative",
  bottom: "52px",
  left: "10px",
  zIndex: "-99",
})

const PrimaryButton = ({ children }) => (
  <div>
    <Link to="/#my-work" style={{ color: "white", textDecoration: "none" }}>
      <Button css={buttonHover} style={{ cursor: "pointer" }}>
        see my work
      </Button>
    </Link>

    <span
      css={css`
        @media (max-width: 1000px) {
          display: none;
        }
      `}
    >
      <div css={outlineBox}></div>
    </span>
  </div>
)

export default PrimaryButton
