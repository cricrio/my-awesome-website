import React from "react"
import { graphql } from "gatsby"

import { Presentation } from "../components/Presentation"
import { Description } from "../components/Description"
import { WritingSection } from "../components/WritingSection"
import { Footer } from "../components/Footer"
import styled from "styled-components"

const IndexPage = ({ data, errors }) => {
  if (errors) {
    return <duv>{JSON.stringify(errors, null, 2)}</duv>
  }
  const posts = errors
    ? null
    : data.allMarkdownRemark.edges.map(({ node }) => ({
        date: node.frontmatter.date,
        title: node.frontmatter.title,
        id: node.id,
        excerpt: node.excerpt,
        slug: node.fields.slug,
      }))

  return (
    <StyledDiv>
      <Presentation />
      {posts && posts.length !== 0 && <WritingSection posts={posts} />}
      <Footer />
    </StyledDiv>
  )
}
export default IndexPage

const StyledDiv = styled.div`
  color: white;
  background-color: black;
`
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
