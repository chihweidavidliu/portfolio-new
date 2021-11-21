import { Box, Flex, Text } from '@chakra-ui/layout';
import { getMonth } from 'date-fns';
import TimelinePoint from './TimelinePoint';

export const MONTH_LABEL_HEIGHT = 21;
export const MONTH_HEIGHT = 40;
export const LABEL_FONT_SIZE = 14;

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

interface TimelineYearProps {
  yearIndex: number;
  months: Date[];
  year: string;
  showGuideLines?: boolean;
  scaleBy?: number;
  hasAdequateSpace?: boolean;
}

const TimelineYear = ({
  yearIndex,
  months,
  year,
  showGuideLines = true,
  scaleBy = 1,
  hasAdequateSpace = true,
}: TimelineYearProps) => {
  const SCALED_MONTH_HEIGHT = MONTH_HEIGHT * scaleBy;
  const BAR_HEIGHT = months.length * SCALED_MONTH_HEIGHT;

  // console.log({ BAR_HEIGHT, year, scaleBy, SCALED_MONTH_HEIGHT, numMonths: months.length });

  return (
    <Flex flexDir="column" alignItems="center">
      {yearIndex === 0 && <TimelinePoint label="Present" />}
      <Box bgColor="teal.500" height={BAR_HEIGHT + 'px'} width="3px" borderRadius="5px" position="relative">
        {scaleBy >= 1 &&
          months.map((month, index) => {
            const monthIndex = getMonth(month);
            const monthName = monthNames[monthIndex];

            const TOP_OFFSET = index * MONTH_HEIGHT * scaleBy;

            return (
              <Text
                key={monthIndex}
                height={SCALED_MONTH_HEIGHT + 'px'}
                padding="0px"
                position="absolute"
                top={TOP_OFFSET + 'px'}
                left="10px"
                fontSize={LABEL_FONT_SIZE + 'px'}
                color="gray.500"
                display={{ base: 'none', lg: 'flex' }}
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
