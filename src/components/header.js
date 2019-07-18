import { Link } from "gatsby"
import styled from "styled-components"
import React from "react"

const Header = ({ siteTitle }) => (
  <Heady>
    <Name>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        Christopher Bellanger
      </Link>
    </Name>
  </Heady>
)

const Heady = styled.header`
  display: flex;
  background-color: black;
  color: white;
  justify-content: space-between;
`

const Name = styled.h2`
  margin: 1rem;
`

export default Header
