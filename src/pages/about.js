import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Page About" />
    <h1>Hi from the About Page</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odio quae cum libero laudantium nostrum ipsam totam aut fugit. Numquam ex quis impedit corrupti exercitationem incidunt alias voluptas quidem est voluptatum tempora, aperiam autem molestiae consectetur beatae asperiores excepturi odit?</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
