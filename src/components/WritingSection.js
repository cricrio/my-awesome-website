import React from "react"
import styled from "styled-components"

import { PostDetail } from "./PostDetail"

const Section = styled.section`
  color: white;
  margin: 0 auto;
  padding: 2rem;
  max-width: 960px;
`

export const WritingSection = ({ posts }) => (
  <div style={{ background: "black" }}>
    <Section>
      <h1>Writing</h1>
      {posts.map(p => (
        <PostDetail key={p.id} {...p} />
      ))}
    </Section>
  </div>
)
