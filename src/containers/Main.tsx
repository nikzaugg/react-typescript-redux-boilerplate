import React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
}

export const Main: React.FC<Props> = ({ children }) => {
  const Content = styled.div`
    margin: 0 5em;
  `

  return <Content>{children}</Content>
}
