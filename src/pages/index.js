import React from "react"
import "./index.css"

import { AwesomeText } from "../components/AwesomeText"
import { Carousel } from "../components/Carousel"
import { SocialLink } from "../components/SocialLink"

const IndexPage = () => (
  <div className="outer">
    <div className="inner">
      <div className="profil">
        <h1 className="name">Christopher Bellanger</h1>
        <Carousel>
          <AwesomeText text={"Human"} />
          <AwesomeText text={"Maker"} />
          <AwesomeText text={"Comedian"} />
        </Carousel>
        <div className="social-links">
          <SocialLink href="https://www.linkedin.com/in/christopher-bellanger-074817117/">
            LinkedIn
          </SocialLink>
          <SocialLink href="https://github.com/cricrio">Github</SocialLink>
          <SocialLink href="https://twitter.com/_cricrio_">Twitter</SocialLink>
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage
