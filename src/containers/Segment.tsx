import React from 'react'
import styled from 'styled-components'

interface Props {
  raised: boolean
  children: React.ReactNode
}

export const Segment: React.FC<Props> = ({ raised, children }) => {
  const StyledSegment = styled.div`
    padding: 1em;
    box-shadow: ${raised ? `5px 5px 10px #888888` : `0`};
    border-radius: 4px;
  `

  return <StyledSegment>{children}</StyledSegment>
}
