import React from 'react'
import { Box, Text, Heading } from '@chakra-ui/layout'
import { differenceInMonths, getYear, isAfter, subMonths } from 'date-fns'
import PageSection from '../../components/PageSection'
import { timelineContents } from '../../data/timeline/timelineContents'
import { primaryColor } from '../../theme'
import { DEFAULT_LABEL_HEIGHT } from '../../components/Timeline/TimelinePoint'
import TimelineYear, { MONTH_HEIGHT } from '../../components/Timeline/TimelineYear'
import styled, { css } from 'styled-components'
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

          return <TimelineYear year={year} yearIndex={yearIndex} months={months} key={yearIndex} />
        })}

        {timelineItems.map((item, index) => {
          const isEven = index % 2 === 0

          const startYear = getYear(item.startDate)
          const endYear = getYear(item.endDate)

          const durationMonths = monthDiff(item.startDate, item.endDate)
          const numYearsSpanned = endYear - startYear
          const yearsSinceEnd = getYear(new Date()) - endYear
          const monthsSinceEnd = monthDiff(item.endDate, new Date())
          const baseOffset = DEFAULT_LABEL_HEIGHT + MONTH_HEIGHT / 2 // the base offset needed to get a card aligned to the last mongth of the most recent year

          // distance from top = the space a number of months takes up + the space taken up by the number of year labels above the card
          const top = baseOffset + MONTH_HEIGHT * monthsSinceEnd + DEFAULT_LABEL_HEIGHT * yearsSinceEnd
          const span = MONTH_HEIGHT * durationMonths + numYearsSpanned * DEFAULT_LABEL_HEIGHT

          return (
            <>
              <Box
                key={item.organisation + index}
                position="absolute"
                top={top + 'px'}
                left={isEven ? '200px' : undefined}
                right={!isEven ? '150px' : undefined}
                height={span + 'px'}
                display="flex"
                alignItems="center"
                pointerEvents="none"
              >
                <Box
                  bg="white"
                  boxShadow="md"
                  minW="300px"
                  maxW="400px"
                  padding="7"
                  pointerEvents="initial"
                  _hover={{
                    '&& + .bar': {
                      borderColor: primaryColor(500),
                      borderStyle: 'solid',
                      zIndex: 100,
                      opacity: 1,
                    },
                  }}
                >
                  <Heading fontSize="lg" color={primaryColor(500)} fontWeight="semibold">
                    {item.title}
                  </Heading>
                  <Text color="gray.700">{item.organisation}</Text>
                  <Text color="gray.700">End: {item.endDate.toLocaleString()}</Text>
                  <Text color="gray.700">Start: {item.startDate.toLocaleString()}</Text>

                  {JSON.stringify(
                    {
                      monthsSinceEnd,
                      yearsSinceEnd,
                      baseOffset,
                      durationMonths,
                    },
                    null,
                    2
                  )}
                </Box>

                <Box
                  className="bar"
                  transition="all 2s"
                  width="30px"
                  borderRadius="3px"
                  borderRightWidth={isEven ? '2px' : undefined}
                  borderLeftWidth={!isEven ? '2px' : undefined}
                  borderTopWidth="2px"
                  borderBottomWidth="2px"
                  opacity={1}
                  borderColor="gray.500"
                  borderStyle="dotted"
                  height="100%"
                  position="absolute"
                  right={!isEven ? '-60px' : undefined}
                  left={isEven ? '-60px' : undefined}
                ></Box>
              </Box>
            </>
          )
        })}
      </Box>
    </PageSection>
  )
}

export default TimelineSection
