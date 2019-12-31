import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
export default function Template({data}) {
  const post = data.markdownRemark

  return (
    <Layout>
    <SEO title="Blogs Details Page" />
    <div>
      <Link to="/blog">Go back</Link>
      <hr />
      <h1> {post.frontmatter.title} </h1>
      <h4>Posted by {post.frontmatter.author} on {post.frontmatter.date} </h4>
      <div dangerouslySetInnerHTML = {{__html:post.html}} />
    </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!){
    markdownRemark (frontmatter: {path: {eq: $path }}) {
        html 
        frontmatter {
          author
          date
          path
          title
        }  
    }
  }
`