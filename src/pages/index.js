import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import About from "../components/About"
import { Helmet } from "react-helmet"
import favicon from "../images/favicon.png"

const IndexPage = () => (
  <div>
    <Helmet>
          <meta charSet="utf-8" />
          <title>Luke Netti</title>
          <link rel="canonical" href="https://lukenetti.com" />
          <link rel="icon" href={favicon} />
        </Helmet>
    <Layout>
      <Hero />
      <Projects />
      <About />
    </Layout>
  </div>
)

export default IndexPage
