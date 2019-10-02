import React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
  onClick: () => void
  color: string
}

export const Button: React.FC<Props> = ({ children, onClick }) => {
  const StyledButton = styled.button`
    background: #f6f7f8
    border: 1px solid #cdced0;
    border-radius: 2px;
    padding: 6px 10px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.05);
    
    &:hover{
      background-color: #5890ff;
      cursor: pointer;
      color: white;
    }
  `

  return <StyledButton onClick={onClick}>{children}</StyledButton>
}
