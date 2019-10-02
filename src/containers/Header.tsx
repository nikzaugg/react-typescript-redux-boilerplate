import React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
}

export const Header: React.FC<Props> = ({ children }) => {
  const Title = styled.h1`
    font-size: 2em;
    text-align: center;
    color: white;
  `

  const Wrapper = styled.section`
    padding: 2em;
    background: black;
  `

  return (
    <Wrapper>
      <Title>{children}</Title>
    </Wrapper>
  )
}
