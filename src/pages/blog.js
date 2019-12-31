import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blogs Summary Page" />
    <div>
      <h1>Latest Blog Posts</h1>
      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id}>
          <h3>{post.node.frontmatter.title}</h3>
          <small>
            Posted by: {post.node.frontmatter.author} on{" "}
            {post.node.frontmatter.date}
            <br /> <br />
            <Link to={post.node.frontmatter.path}>Read More</Link>
            <br /> <br />
            <hr />
          </small>
        </div>
      ))}
    </div>
  </Layout>
)
export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            author
            date
            path
            title
          }
        }
      }
    }
  }
`
export default BlogPage
