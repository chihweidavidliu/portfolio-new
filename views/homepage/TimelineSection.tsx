import { Box, Flex, Text } from '@chakra-ui/layout'
import { differenceInMonths, differenceInYears, getYear, isAfter } from 'date-fns'
import PageSection from '../../components/PageSection'
import { timelineContents } from '../../data/timeline/timelineContents'

const YEAR_HEIGHT = 500
const LABEL_HEIGHT = 60

const TimelineSection = () => {
  const timelineItems = Object.values(timelineContents).sort((a, b) => {
    if (isAfter(a.startDate, b.startDate)) {
      return -1
    }
    return 1
  })

  const ealiestDate = timelineItems[timelineItems.length - 1].startDate

  const years = differenceInYears(new Date(), ealiestDate)

  const timelinePoints: number[] = [getYear(new Date())]

  for (let i = 0; i < years; i++) {
    timelinePoints.push(timelinePoints[i] - 1)
  }

  return (
    <PageSection title="Work Experience and Education">
      <Box position="relative">
        {timelinePoints.map((year, index) => {
          return (
            <Flex key={year} flexDir="column" alignItems="center" height={YEAR_HEIGHT + 'px'}>
              <Flex flexDir="column" alignItems="center" height={LABEL_HEIGHT + 'px'}>
                <Text fontWeight="semibold" fontSize="xl" mb="3px">
                  {year}
                </Text>

                <Flex
                  borderRadius="100%"
                  borderColor="teal.500"
                  borderWidth="2px"
                  width="20px"
                  height="20px"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Box bgColor="teal.500" width="10px" height="10px" borderRadius="100%" />
                </Flex>
              </Flex>

              {index < years && (
                <Box
                  bgColor="teal.500"
                  height={YEAR_HEIGHT - LABEL_HEIGHT + 'px'}
                  width="3px"
                  mt="10px"
                  mb="10px"
                  borderRadius="5px"
                />
              )}
            </Flex>
          )
        })}
        {timelineItems.map((item, index) => {
          const isEven = index % 2 === 0

          const startYear = getYear(item.startDate)
          const endYear = getYear(item.endDate)

          const numMonths = differenceInMonths(item.endDate, item.startDate)
          const span = (numMonths / 12) * YEAR_HEIGHT

          // TODO: change this to center based on span and container height
          const top = (getYear(new Date()) - endYear) * YEAR_HEIGHT + LABEL_HEIGHT / 2

          const bottom = top - span

          console.log({ numMonths, span, top, item })

          return (
            <Box
              key={item.organisation + index}
              position="absolute"
              top={top + 'px'}
              left={isEven ? '40px' : undefined}
              right={!isEven ? '40px' : undefined}
              height={span + 'px'}
              bg="white"
              boxShadow="md"
            >
              {item.organisation}
            </Box>
          )
        })}
      </Box>
    </PageSection>
  )
}

export default TimelineSection
