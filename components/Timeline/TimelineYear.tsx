import { Box, Flex, Text } from '@chakra-ui/layout'
import { getMonth } from 'date-fns'
import TimelinePoint from './TimelinePoint'

export const MONTH_LABEL_HEIGHT = 21
export const MONTH_HEIGHT = 30

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

interface TimelineYearProps {
  yearIndex: number
  months: Date[]
  year: string
  showGuideLines?: boolean
}

const TimelineYear = ({ yearIndex, months, year, showGuideLines = true }: TimelineYearProps) => {
  const BAR_HEIGHT = months.length * MONTH_HEIGHT

  return (
    <Flex flexDir="column" alignItems="center">
      {yearIndex === 0 && <TimelinePoint label="Present" />}
      <Box bgColor="teal.500" height={BAR_HEIGHT + 'px'} width="3px" borderRadius="5px" position="relative">
        {months.map((month, index) => {
          const monthIndex = getMonth(month)
          const monthName = monthNames[monthIndex]

          // top offset of a month label is a function of how recent the month is + half the height of a month section (to center the month)
          // minus half the label height itself to center the label
          // const TOP_OFFSET = index * MONTH_HEIGHT + MONTH_HEIGHT / 2 - MONTH_LABEL_HEIGHT / 2
          const TOP_OFFSET = index * MONTH_HEIGHT + MONTH_HEIGHT / 2 - MONTH_LABEL_HEIGHT / 2
          return (
            <Text
              key={monthIndex}
              position="absolute"
              top={TOP_OFFSET}
              left="10px"
              fontSize="sm"
              color="gray.500"
              _after={
                showGuideLines
                  ? {
                      content: `""`,
                      display: 'block',
                      width: '100vw',
                      height: '1px',
                      backgroundColor: 'gray.300',
                      position: 'relative',
                      bottom: MONTH_LABEL_HEIGHT / 2,
                      right: '50vw',
                    }
                  : {}
              }
            >
              {monthName}
            </Text>
          )
        })}
      </Box>

      <TimelinePoint label={year} />
    </Flex>
  )
}

export default TimelineYear
