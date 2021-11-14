import React from 'react'
import { Box, Text, Heading } from '@chakra-ui/layout'
import { differenceInMonths, getYear, isAfter, subMonths } from 'date-fns'
import PageSection from '../../components/PageSection'
import { timelineContents } from '../../data/timeline/timelineContents'
import { primaryColor } from '../../theme'
import { DEFAULT_LABEL_HEIGHT } from '../../components/Timeline/TimelinePoint'
import TimelineYear, { MONTH_HEIGHT } from '../../components/Timeline/TimelineYear'
import styled, { css } from 'styled-components'
import TimelineCard from '../../components/Timeline/TimelineCard'
;`}
`
function monthDiff(dateFrom: Date, dateTo: Date) {
  return dateTo.getMonth() - dateFrom.getMonth() + 12 * (dateTo.getFullYear() - dateFrom.getFullYear())
}

const TimelineSection = () => {
  const timelineItems = Object.values(timelineContents).sort((a, b) => {
    if (isAfter(a.startDate, b.startDate)) {
      return -1
    }
    return 1
  })

  const earliestDate = timelineItems[timelineItems.length - 1].startDate

  const months = differenceInMonths(new Date(), earliestDate)
  const years = Math.ceil(months / 12)

  const timelinePoints: Date[] = [new Date()]

  for (let i = 0; i < months; i++) {
    timelinePoints.push(subMonths(timelinePoints[i], 1))
  }

  const timelinePointsByYear = timelinePoints.reduce((acc, point) => {
    const year = getYear(point)

    if (!acc[year]) {
      acc[year] = []
    }

    acc[year].push(point)
    return acc
  }, {} as { [index: number]: Date[] })

  const keys = Object.keys(timelinePointsByYear).sort((a, b) => Number(b) - Number(a))

  console.log({ timelinePoints, timelinePointsByYear, keys })

  return (
    <PageSection title="Work Experience and Education">
      {/* width of 0 so that the cards can be absolutely positioned against the vertical center of the screen */}
      <Box position="relative" width="0px" margin="0 auto">
        {keys.map((year, yearIndex) => {
          const months = timelinePointsByYear[parseInt(year)]

          return (
            <TimelineYear year={year} yearIndex={yearIndex} months={months} key={yearIndex} showGuideLines={false} />
          )
        })}

        {timelineItems.map((item, index) => {
          const isEven = index % 2 === 0
          return <TimelineCard key={index} item={item} isEven={isEven} />
        })}
      </Box>
    </PageSection>
  )
}

export default TimelineSection
