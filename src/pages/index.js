import React from "react"
import "./index.css"

import { AwesomeText } from "../components/AwesomeText"
import { Carousel } from "../components/Carousel"

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
          <span>LinkedIn</span>
          <span>Github</span>
          <span>Twitter</span>
          <span>Codepen</span>
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage
