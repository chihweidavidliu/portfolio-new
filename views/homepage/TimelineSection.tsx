import React from 'react'
import { Box, Flex, Text, Heading } from '@chakra-ui/layout'
import { differenceInMonths, differenceInYears, getMonth, getYear, isAfter, subMonths } from 'date-fns'
import PageSection from '../../components/PageSection'
import TimelineBranch from '../../components/Timeline/TimelineBranch'
import { timelineContents } from '../../data/timeline/timelineContents'
import { primaryColor } from '../../theme'
import TimelinePoint, { DEFAULT_LABEL_HEIGHT } from '../../components/Timeline/TimelinePoint'
import TimelineYear, { MONTH_HEIGHT } from '../../components/Timeline/TimelineYear'

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

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
      <Box position="relative">
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
                left={isEven ? '40px' : undefined}
                right={!isEven ? '40px' : undefined}
                height={span + 'px'}
                bg="white"
                boxShadow="md"
                minW="300px"
                maxW="400px"
                padding="7"
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
            </>
          )
        })}
      </Box>
    </PageSection>
  )
}

export default TimelineSection
