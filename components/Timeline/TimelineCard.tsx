import { Heading, Box, Text } from '@chakra-ui/layout';
import { differenceInCalendarDays, getYear } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { primaryColor } from '../../theme';
import { TimelineItem } from '../../types/TimelineItem';
import { monthDiff } from '../../util/monthDiff';
import { DEFAULT_LABEL_HEIGHT } from './TimelinePoint';
import { Image } from '@chakra-ui/image';
import format from 'date-fns/format';
import TechStackList from '../TechStackList';
import BaseTimelineCard from './BaseTimelineCard';
import { Position } from '../../types/Position';
import { useTimelineContext } from '../../providers/TimelineProvider';

interface TimelineCardProps {
  item: TimelineItem;
  cardPosition: Position;
  reducedScale?: number;
  collapseBeforeYear?: number;
}

const TimelineCard = ({ item, cardPosition, reducedScale = 1, collapseBeforeYear }: TimelineCardProps) => {
  const { monthHeight } = useTimelineContext();
  const { startDate, endDate, description, title, organisation } = item;
  const startYear = getYear(startDate);
  const endYear = getYear(endDate);

  const durationMonths = monthDiff(item.startDate, item.endDate);
  const numYearsSpanned = endYear - startYear;
  const yearsSinceEnd = getYear(new Date()) - endYear;
  const monthsSinceEnd = monthDiff(item.endDate, new Date());

  // the number of months above the end date that have been scaled down
  const monthsSinceCompactedFromEndDate = collapseBeforeYear
    ? monthDiff(item.endDate, new Date(collapseBeforeYear - 1, 11, 31)) // last day of year where compacting started
    : 0;

  const numCompactedMonthsAfter = monthsSinceCompactedFromEndDate > 0 ? monthsSinceCompactedFromEndDate : 0;
  const numFullSizeMonthsAfter = monthsSinceEnd - numCompactedMonthsAfter;

  const monthsSinceCompactedFromStartDate = collapseBeforeYear
    ? monthDiff(item.startDate, new Date(collapseBeforeYear - 1, 11, 31))
    : 0;

  const numCompactedMonthsDuring =
    monthsSinceCompactedFromStartDate > 0 ? monthsSinceCompactedFromStartDate - numCompactedMonthsAfter : 0;
  const numFullSizeMonthsDuring = durationMonths - numCompactedMonthsDuring;

  // console.log({
  //   organisation,
  //   title,
  //   durationMonths,
  //   monthsSinceEnd,
  //   monthsSinceCompactedFromEndDate,
  //   numFullSizeMonthsAfter,
  //   numCompactedMonthsAfter,
  // });

  const baseOffset =
    numCompactedMonthsAfter > 0
      ? DEFAULT_LABEL_HEIGHT + (monthHeight / 2) * reducedScale
      : DEFAULT_LABEL_HEIGHT + monthHeight / 2; // the base offset needed to get a card aligned to the last mongth of the most recent year

  // distance from top = the space a number of months takes up + the space taken up by the number of year labels above the card
  const top =
    baseOffset +
    monthHeight * numFullSizeMonthsAfter +
    monthHeight * numCompactedMonthsAfter * reducedScale +
    DEFAULT_LABEL_HEIGHT * yearsSinceEnd;

  let span =
    monthHeight * numFullSizeMonthsDuring +
    monthHeight * reducedScale * numCompactedMonthsDuring +
    numYearsSpanned * DEFAULT_LABEL_HEIGHT;

  // if a card spans different scales, need to adjust for that in the span
  // TODO: investigate this
  if (numCompactedMonthsAfter === 0 && numCompactedMonthsDuring > 0) {
    span = span - (monthHeight / 2) * reducedScale;
  }

  const isPresentJob = differenceInCalendarDays(endDate, startDate) === 0;

  const renderDuration = () => {
    const days = differenceInCalendarDays(endDate, startDate);
    const months = Math.round(days / 30.41);
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    let duration = '';
    if (years > 0) {
      duration += `${years} year${years === 1 ? '' : 's'}`;
    }

    if (remainingMonths) {
      duration += ` ${years > 0 ? remainingMonths : months} months`;
    }

    return duration ? ` (${duration.trim()})` : '';
  };

  return (
    <BaseTimelineCard topOffset={top} height={span} cardPosition={cardPosition}>
      <Box display="flex" width="100%" justifyContent="space-between">
        <Box>
          <Heading fontSize="lg" color={primaryColor(500)} fontWeight="semibold" mb="2px">
            {title}
          </Heading>
          <Text color="gray.700" fontWeight="semibold">
            {organisation}
          </Text>
        </Box>
        {item.logoUrl && (
          <Image
            src={item.logoUrl}
            height="40px"
            width="40px"
            alt={item.organisation + ' logo'}
            marginLeft="10px"
          />
        )}
      </Box>
      <Text color="gray.600" fontSize="sm" fontWeight="semibold">
        {format(startDate, 'MMMM yyyy')} - {isPresentJob ? 'Present' : format(endDate, 'MMMM yyyy')}
        {renderDuration()}
      </Text>

      <Box
        marginTop="15px"
        fontSize="sm"
        maxW="100%"
        css={{
          li: { marginLeft: '20px' },
          ul: {
            marginTop: '10px',
            marginBottom: '10px',
          },
        }}
      >
        <ReactMarkdown plugins={[gfm]}>{description}</ReactMarkdown>
      </Box>

      {item?.keyTechnologies && item.keyTechnologies.length > 0 && (
        <Box mt="15px">
          <TechStackList title="Key Technologies" items={item.keyTechnologies} />
        </Box>
      )}
    </BaseTimelineCard>
  );
};

export default TimelineCard;
