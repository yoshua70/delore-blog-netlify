import React from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"

const BlogPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {

  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  const StoriesPosts = edges
    .filter(edge => edge.node.frontmatter.hashtag === "stories")
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  const DecouvertesPosts = edges
    .filter(edge => edge.node.frontmatter.hashtag === "decouvertes")
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  
    return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      
      <h2>Mes stories &darr;</h2>
      <div className="grids">
        {StoriesPosts}
      </div>
      <h2>Découvertes &darr;</h2>
      <div className="grids">
        {DecouvertesPosts}
      </div>
      <h2>Tous mes posts &darr;</h2>
      <div className="grids">
        {Posts}
      </div>
    </Layout>
  )
}

export default BlogPage
export const pageQuery = graphql`
  query blogPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
            hashtag
          }
        }
      }
    }
  }
`
