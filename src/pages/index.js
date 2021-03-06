import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Job from "../components/Job"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hola personas</h1>
    <Job />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
