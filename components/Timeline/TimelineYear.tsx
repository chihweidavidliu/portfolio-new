import { Box, Flex, Text } from '@chakra-ui/layout';
import { getMonth } from 'date-fns';
import TimelinePoint from './TimelinePoint';

export const MONTH_LABEL_HEIGHT = 21;
export const MONTH_HEIGHT = 30;
export const LABEL_FONT_SIZE = 14;

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
];

interface TimelineYearProps {
  yearIndex: number;
  months: Date[];
  year: string;
  showGuideLines?: boolean;
  scaleBy?: number;
}

const TimelineYear = ({ yearIndex, months, year, showGuideLines = true, scaleBy = 1 }: TimelineYearProps) => {
  const SCALED_MONTH_HEIGHT = MONTH_HEIGHT * scaleBy;
  const BAR_HEIGHT = months.length * SCALED_MONTH_HEIGHT;

  console.log({ BAR_HEIGHT, year, scaleBy });

  return (
    <Flex flexDir="column" alignItems="center">
      {yearIndex === 0 && <TimelinePoint label="Present" />}
      <Box
        bgColor="teal.500"
        height={BAR_HEIGHT + 'px'}
        width="3px"
        borderRadius="5px"
        position="relative"
        display="flex"
      >
        {months.map((month, index) => {
          const monthIndex = getMonth(month);
          const monthName = monthNames[monthIndex];

          const TOP_OFFSET = index * MONTH_HEIGHT * scaleBy;

          if (index === 2) {
            console.log({ monthName, TOP_OFFSET });
          }
          return (
            <Text
              key={monthIndex}
              height={SCALED_MONTH_HEIGHT}
              padding="0px"
              position="absolute"
              top={TOP_OFFSET + 'px'}
              left="10px"
              fontSize={LABEL_FONT_SIZE * scaleBy + 'px'}
              color="gray.500"
              display="flex"
              alignItems="center"
              _after={
                showGuideLines
                  ? {
                      content: `""`,
                      display: 'block',
                      width: '100vw',
                      height: '1px',
                      backgroundColor: 'gray.300',
                      position: 'relative',
                      right: '50vw',
                    }
                  : {}
              }
            >
              {monthName}
            </Text>
          );
        })}
      </Box>

      <TimelinePoint label={year} />
    </Flex>
  );
};

export default TimelineYear;
