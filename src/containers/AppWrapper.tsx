import React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
}

export const AppWrapper: React.FC<Props> = ({ children }) => {
  const Content = styled.div`
    padding: 1em;
    position: relative;
  `

  return <Content>{children}</Content>
}
