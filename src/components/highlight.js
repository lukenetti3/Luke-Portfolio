import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { css } from "@emotion/core"

const Highlight = (props) => (
  <span style={{background: `linear-gradient(180deg,rgba(255,255,255,0) 55%, ${props.color} 50%)`}}>
      {props.children}
  </span>
)

const Welcome = (props) => (
  <div>
    <h1>{props.name}</h1>
    <p>{props.children}</p>
  </div>
)

export default Highlight
