import React from "react"
import styled from "styled-components"

const Link = styled.a`
  text-decoration: none;
  color: white;
  position: relative;
  fill: currentColor;

  &:before {
    content: " ";
    background-color: white;
    height: 2px;
    width: 100%;
    position: absolute;
    bottom: -2px;
    left: 0;
    visibility: hidden; /*fallback hidden for browser not supporting css animation*/
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }

  &:hover:before {
    visibility: visible; /*fallback*/
    transform: scaleX(1);
  }
`

export const SocialLink = ({ children, href }) => (
  <Link href={href} rel="noopener noreferrer" target="_blank">
    {children}
  </Link>
)
