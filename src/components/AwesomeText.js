import React, { useState, useEffect } from "react"
import styled from "styled-components"

const Text = styled.h2`
  margin: 2rem 0;
  font-size: 2.5rem;

  &:first-letter {
    background-color: white;
    color: rgba(0, 0, 0, 0.6);
    padding: 0.8rem 0.2rem;
    margin-right: 0.02rem;
  }
`
/**
 *
 * Display the text letter by letter
 */
export const AwesomeText = ({ text, next, className }) => {
  const [indexLetter, setIndexLetter] = useState(1)
  /*
   * Maybe unsafe: this only work  because  next() is called when the text is fully displayed
   */
  /*
   *Accebility problem, should be done with css aniamation
   */

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
  return <Text className={className}>I am {renderedText || <br />}</Text>
}
