import React from "react"

const Highlight = (props) => (
  <span style={{background: `linear-gradient(180deg,rgba(255,255,255,0) 55%, ${props.color} 50%)`}}>
      {props.children}
  </span>
)

export default Highlight
