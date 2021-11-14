import { Box, Heading, Text } from '@chakra-ui/layout'
import getYear from 'date-fns/getYear'
import { primaryColor } from '../../theme'
import { TimelineItem } from '../../types/TimelineItem'
import { monthDiff } from '../../util/monthDiff'
import { DEFAULT_LABEL_HEIGHT } from './TimelinePoint'
import { MONTH_HEIGHT } from './TimelineYear'
import TimelineBranch from './TimelineBranch'

interface TimelineCardProps {
  item: TimelineItem
  isEven: boolean
}

const TimelineCard = ({ item, isEven }: TimelineCardProps) => {
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
    <Box
      className="timeline-card"
      position="absolute"
      top={top + 'px'}
      left={isEven ? '180px' : undefined}
      right={!isEven ? '130px' : undefined}
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
            zIndex: 100,
            '.horizontal-bar': {
              borderColor: primaryColor(500),
              zIndex: 100,
            },
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
      <TimelineBranch isEven={isEven} />
    </Box>
  )
}

export default TimelineCard
