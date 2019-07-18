import React from "react"
import styled from "styled-components"

import { Link } from "gatsby"
import { Time } from "./Time"

const Title = styled.h2`
  margin-bottom: 0.5rem;
`

const PostLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const ReadMore = styled.div`
  font-weight: bold;
  margin-top: -1rem;
`

export const PostDetail = ({ title, date, excerpt, slug }) => (
  <div style={{ marginBottom: "1.5rem" }}>
    <Title>
      <PostLink to={slug}>{title}</PostLink>
    </Title>

    <p>
      <Time date={date} /> - {excerpt}
    </p>
    <ReadMore>
      <PostLink to={slug}> Continue reading → </PostLink>
    </ReadMore>
  </div>
)
