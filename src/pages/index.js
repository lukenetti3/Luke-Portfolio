import React from "react"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import About from "../components/About"
import { Helmet } from "react-helmet"
import favicon from "../images/favicon.png"
import Header from "../components/Header"
import Footer from "../components/Footer"

const IndexPage = () => (
  <div>
    <Helmet>
          <meta charSet="utf-8" />
          <title>Luke Netti</title>
          <link rel="canonical" href="https://lukenetti.com" />
          <link rel="icon" href={favicon} />
        </Helmet>
    <div className="w-10/12 mx-auto">
      <Header />
      <Hero />
      <Projects />
      <About />
      <Footer />
    </div>
  </div>
)

export default IndexPage
