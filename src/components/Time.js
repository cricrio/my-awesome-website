import React from "react"
import styled from "styled-components"
import { format } from "date-fns"

const T = styled.time`
  font-weight: bold;
`

export const Time = ({ date }) => (
  <T datetime={date}>{format(new Date(date), "MMMM do yyyy")}</T>
)
