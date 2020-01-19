import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { css } from "@emotion/core"

const highlightText = css({
    background: 'linear-gradient(180deg,rgba(255,255,255,0) 55%, #7aada4 50%)'
})

const Highlight = ({ children }) => (
    <span css={highlightText}>
        {children}
    </span>
  )
  
  export default Highlight