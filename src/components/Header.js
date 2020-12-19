import React from "react"
import Highlight from "./Highlight"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Header = () => (
  <div className="flex justify-between py-5">
    <Link to="/">
      <p className="font-header font-bold text-xl">Luke Netti.</p>
    </Link>
    <div className="flex">
      <Link to="">
        <li className="list-none px-5 text-lg">
          <Link to="/#my-work">my work</Link>
        </li>
      </Link>
      <Link to="">
        <li className="list-none px-5 text-lg">
          <Link to="/#get-in-touch">get in touch</Link>
        </li>
      </Link>
    </div>
  </div>
)

export default Header
