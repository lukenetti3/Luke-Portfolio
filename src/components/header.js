import React from "react"
import Highlight from "./highlight"
import { Link } from "gatsby"

const Header = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "rgba(193, 148, 92, 0.14)",
      padding: '20px 4rem'
    }}
  >
    <Link to="/" style={{ textDecoration: "none" }}>
      <p style={{ fontWeight: "bolder", margin: "0" }}>Luke Netti.</p>
    </Link>
    <div style={{ display: "flex" }}>
      <Link to="" style={{ textDecoration: "none" }}>
        <li>
          <Highlight>my work</Highlight>
        </li>
      </Link>
      <Link to="" style={{ textDecoration: "none" }}>
        <li>
          <Highlight>get in touch</Highlight>
        </li>
      </Link>
    </div>
  </div>
)

export default Header
