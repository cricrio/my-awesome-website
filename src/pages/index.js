import React from "react"
import { graphql } from "gatsby"

import "./index.css"

import { Presentation } from "../components/Presentation"
import { WritingSection } from "../components/WritingSection"
import { Footer } from "../components/Footer"

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(({ node }) => ({
    date: node.frontmatter.date,
    title: node.frontmatter.title,
    id: node.id,
    excerpt: node.excerpt,
    slug: node.fields.slug,
  }))

  return (
    <>
      <Presentation />
      <WritingSection posts={posts} />
      <Footer />
    </>
  )
}
export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date
            title
          }
          fields {
            slug
          }
          id
          excerpt
        }
      }
    }
  }
`
