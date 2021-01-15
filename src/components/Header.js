import React from "react"
import { Link } from "gatsby"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Header = () => (
  <div className="flex flex-wrap md:justify-between justify-center py-6">
    <Link to="/">
      <p className="font-header font-bold text-xl">Luke Netti.</p>
    </Link>
    <div className="flex flex-wrap align-middle">
      <li className="list-none px-5 text-lg m-0">
        <Link to="/#my-work">my work</Link>
      </li>

      <li className="list-none px-5 text-lg m-0">
        <Link to="/#get-in-touch">get in touch</Link>
      </li>

      <li className="list-none px-5 text-lg m-0">
        <a
          href="https://blog.lukenetti.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          blog
        </a>
      </li>
    </div>
  </div>
)

export default Header
