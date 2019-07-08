import React, { useState } from "react"

export const Carousel = ({ children }) => {
  const [index, setIndex] = useState(0)
  const rendreredChild = React.Children.toArray(children)[index]

  return React.cloneElement(rendreredChild, {
    next: () => setIndex(index => (index + 1) % React.Children.count(children)),
  })
}
