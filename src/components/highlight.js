import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { css } from "@emotion/core"

const green = css({
    background: 'linear-gradient(180deg,rgba(255,255,255,0) 55%, #7aada4 50%)'
})

const white = css({
    background: 'linear-gradient(180deg,rgba(255,255,255,0) 55%, #ffffff 50%)'
})

const Highlight = ({children}, props) => (
    <span css={green}>
        {children}
    </span>
  )
  
  export default Highlight