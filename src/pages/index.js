import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import About from "../components/About"

const IndexPage = () => (
  <div>
    <Layout>
      <Hero />
      <Projects />
      <About />
    </Layout>
  </div>
)

export default IndexPage
