import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicesPage = () => (
  <Layout>
    <SEO title="Services Page" />
    <h1>Our Services</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odio quae cum libero laudantium nostrum ipsam totam aut fugit. Numquam ex quis impedit corrupti exercitationem incidunt alias voluptas quidem est voluptatum tempora, aperiam autem molestiae consectetur beatae asperiores excepturi odit?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odio quae cum libero laudantium nostrum ipsam totam aut fugit. Numquam ex quis impedit corrupti exercitationem incidunt alias voluptas quidem est voluptatum tempora, aperiam autem molestiae consectetur beatae asperiores excepturi odit?</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ServicesPage
