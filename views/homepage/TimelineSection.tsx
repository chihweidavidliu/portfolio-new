import { Box, Flex, Text } from '@chakra-ui/layout'
import { differenceInYears, getYear, isAfter } from 'date-fns'
import PageSection from '../../components/PageSection'
import { timelineContents } from '../../data/timeline/timelineContents'

const YEAR_HEIGHT = 500
const TimelineSection = () => {
  const timelineItems = Object.values(timelineContents).sort((a, b) => {
    if (isAfter(a.startDate, b.startDate)) {
      return -1
    }
    return 1
  })

  const ealiestDate = timelineItems[timelineItems.length - 1].startDate

  const years = differenceInYears(new Date(), ealiestDate)

  const timelinePoints: number[] = []

  for (let i = 0; i < years; i++) {
    if (i === 0) {
      timelinePoints.unshift(getYear(ealiestDate))
    } else {
      timelinePoints.unshift(timelinePoints[0] + 1)
    }
  }

  return (
    <PageSection title="Work Experience and Education">
      {timelinePoints.map((year, index) => {
        return (
          <Flex key={year} flexDir="column" alignItems="center">
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

            {index < years - 1 && (
              <Box bgColor="teal.500" height={YEAR_HEIGHT + 'px'} width="3px" mt="10px" mb="10px" borderRadius="5px" />
            )}
          </Flex>
        )
      })}
      {/* {timelineItems.map((item, index) => {
        return <Box key={item.organisation + index}>{item.organisation}</Box>
      })} */}
    </PageSection>
  )
}

export default TimelineSection
