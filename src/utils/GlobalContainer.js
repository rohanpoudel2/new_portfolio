"use client"

import { Container } from "@mui/material"

const GlobalContainer = ({ children }) => {
  return (
    <Container maxWidth="lg">
      {children}
    </Container>
  )
}

export default GlobalContainer