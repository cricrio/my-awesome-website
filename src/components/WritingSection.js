import React from "react"
import styled from "styled-components"

const WS = styled.section`
  padding-top: 2rem;
  background: grey;
  color: white;
  margin: 0 auto;
  padding: 1rem 1rem;
  max-width: 960px;
`
const Title = styled.h2`
  margin-bottom: 0.5rem;
`

const Time = styled.time`
  font-weight: bold;
`

const Post = () => (
  <div>
    <Title>Lorem ipsum dolor sit amet</Title>

    <p>
      <Time>July 18th 2019</Time> - consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud
    </p>
  </div>
)

export const WritingSection = () => (
  <div style={{ background: "grey" }}>
    <WS>
      <h1>Writing</h1>
      <Post />
      <Post />
      <Post />
    </WS>
  </div>
)
