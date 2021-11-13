import React from 'react'
import styled, { css } from 'styled-components'
import Proptypes, { number } from 'prop-types'

type HorizontalAlignment = 'left' | 'right'

const TimelineBranchWrapper = styled.div<{ horizontalAlignment: HorizontalAlignment }>`
  position: absolute;
  width: 160px;
  height: 100%;
  overflow: visible;
  ${(props) => {
    switch (props.horizontalAlignment) {
      case 'left':
        return css`
          right: -160px;
        `
      case 'right':
        return css`
          left: -160px;
        `
      default:
        break
    }
  }};
`

const SVG = styled.svg`
  height: 100%;
  width: 100%;
  overflow: visible;
`

const Path = styled.path.attrs<{ isHovered: boolean }>(() => ({
  strokeDasharray: '3, 3',
}))<{ isHovered: boolean }>`
  stroke: grey;
  fill: none;
  width: 1px;
  height: 100%;
  opacity: 0.2;
  transition: all 400ms ease-in;

  ${(props) =>
    props.isHovered &&
    css`
      opacity: 1;
      stroke: darkgrey;
    `}
`

// the offset at which the path will start curving inwards
const HEIGHT_OFFSET = 15

interface TimelineBranchProps {
  horizontalAlignment: HorizontalAlignment
  heights: { top: number; bottom: number }
  isHovered: boolean
}

const TimelineBranch = ({ horizontalAlignment, heights = { top: 50, bottom: 50 }, isHovered }: TimelineBranchProps) => {
  const renderPaths = (horizontalAlignment: HorizontalAlignment) => {
    if (horizontalAlignment === 'left') {
      return (
        <g fill="none" height="100%" width="100%">
          <Path
            isHovered={isHovered}
            d={`
        M 0,50
        Q 65,50, 65,35
        T 65, ${50 - heights.top + HEIGHT_OFFSET}
        Q 65,${50 - heights.top}, 80,${50 - heights.top}
      `}
          />

          <Path
            isHovered={isHovered}
            d={`
        M 0,50
        Q 65,50, 65,65
        T 65, ${50 + heights.bottom - HEIGHT_OFFSET}
        Q 65,${50 + heights.bottom}, 80,${50 + heights.bottom}
      `}
          />
        </g>
      )
    }

    // Right aligned
    return (
      <g fill="none" height="100%" width="100%">
        <Path
          isHovered={isHovered}
          d={`
      M 100,50
      Q 35,50, 35,35
      T 35, ${50 - heights.top + HEIGHT_OFFSET}
      Q 35,${50 - heights.top}, 20,${50 - heights.top}
    `}
        />

        <Path
          isHovered={isHovered}
          d={`
      M 100,50
      Q 35,50, 35,65
      T 35, ${50 + heights.bottom - HEIGHT_OFFSET}
      Q 35,${50 + heights.bottom}, 20,${50 + heights.bottom}
    `}
        />
      </g>
    )
  }

  return (
    <TimelineBranchWrapper horizontalAlignment={horizontalAlignment}>
      <SVG viewBox="0 0 100 100">{renderPaths(horizontalAlignment)}</SVG>
    </TimelineBranchWrapper>
  )
}

export const HEIGHTS = Proptypes.shape({
  top: number,
  bottom: number,
})

export default TimelineBranch
