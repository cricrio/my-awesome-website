import React from "react"
import styled from "styled-components"
import { Carousel } from "./Carousel"
import { AwesomeText } from "./AwesomeText"
import { SocialLink } from "./SocialLink"

export const Presentation = () => (
  <Container className="presentation">
    <Profil className="profil">
      <Name className="name">Christopher Bellanger</Name>
      <Carousel>
        <AwesomeText text={"Human"} />
        <AwesomeText text={"a Maker"} />
        <AwesomeText text={"a Comedian"} />
      </Carousel>
      <SocialLinks className="social-links">
        <SocialLink href="https://www.linkedin.com/in/christopher-bellanger-074817117/">
          LinkedIn
        </SocialLink>
        <SocialLink href="https://github.com/cricrio">Github</SocialLink>
        <SocialLink href="https://twitter.com/_cricrio_">Twitter</SocialLink>
      </SocialLinks>
    </Profil>
  </Container>
)

const Container = styled.div`
  font-family: sans-serif;
  height: 100vh;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
`

const Profil = styled.section`
  color: white;
  height: 250px;
`

const Name = styled.h1`
  font-size: 3rem;
  justify-content: space-between;
`

const SocialLinks = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
`
