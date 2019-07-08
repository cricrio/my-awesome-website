import React, { useState, useEffect } from "react"
import styled from "styled-components"

const Text = styled.h2`
  margin: 2rem 0;
  font-size: 2.5rem;

  &:first-letter {
    background-color: white;
    color: black;
    padding: 0.8rem 0.2rem;
    margin-right: 0.02rem;
  }
`
/**
 *
 * Display the text letter by letter
 */
export const AwesomeText = ({ text, next }) => {
  const [indexLetter, setIndexLetter] = useState(1)

  useEffect(() => {
    const id = setInterval(() => {
      setIndexLetter(indexLetter => indexLetter + 1)
    }, 550)
    return () => id && clearInterval(id)
  }, [text])

  if (indexLetter > text.length) {
    next()
  }
  const renderedText = text.substring(0, indexLetter)
  return <Text>{renderedText || <br />}</Text>
}