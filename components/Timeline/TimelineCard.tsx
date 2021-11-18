import { useEffect } from 'react';
import { Heading, Box, Text } from '@chakra-ui/layout';
import { differenceInCalendarDays, getYear } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';
import gfm from 'remark-gfm';
import { primaryColor } from '../../theme';
import { TimelineItem } from '../../types/TimelineItem';
import { monthDiff } from '../../util/monthDiff';
import { DEFAULT_LABEL_HEIGHT } from './TimelinePoint';
import { MONTH_HEIGHT } from './TimelineYear';
import TimelineBranch from './TimelineBranch';
import { Image } from '@chakra-ui/image';
import format from 'date-fns/format';
import TechStackList from '../TechStackList';

interface TimelineCardProps {
  item: TimelineItem;
  isEven: boolean;
  reducedScale?: number;
  collapseBeforeYear?: number;
}

const TimelineCard = ({ item, isEven, reducedScale = 1, collapseBeforeYear }: TimelineCardProps) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.7,
    rootMargin: `0px 0px 100px 0px`,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const { startDate, endDate, description, title, organisation } = item;
  const startYear = getYear(startDate);
  const endYear = getYear(endDate);

  const durationMonths = monthDiff(item.startDate, item.endDate);
  const numYearsSpanned = endYear - startYear;
  const yearsSinceEnd = getYear(new Date()) - endYear;
  const monthsSinceEnd = monthDiff(item.endDate, new Date());

  // the number of months above the end date that have been scaled down
  const monthsSinceCompactedFromEndDate = collapseBeforeYear
    ? monthDiff(item.endDate, new Date(collapseBeforeYear, 0, 1))
    : 0;
  const numCompactedMonthsAfter = monthsSinceCompactedFromEndDate > 0 ? monthsSinceCompactedFromEndDate : 0;
  const numFullSizeMonthsAfter = monthsSinceEnd - numCompactedMonthsAfter;

  const monthsSinceCompactedFromStartDate = collapseBeforeYear
    ? monthDiff(item.startDate, new Date(collapseBeforeYear, 0, 1))
    : 0;

  const numCompactedMonthsDuring =
    monthsSinceCompactedFromStartDate > 0 ? monthsSinceCompactedFromStartDate - numCompactedMonthsAfter : 0;
  const numFullSizeMonthsDuring = durationMonths - numCompactedMonthsDuring;

  //   console.log({
  //     organisation,
  //     title,
  //     monthsSinceCompactedFromEndDate,
  //     monthsSinceCompactedFromStartDate,
  //     numCompactedMonthsDuring,
  //     numFullSizeMonthsDuring,
  //     durationMonths,
  //     reducedScale,
  //   });

  const baseOffset = DEFAULT_LABEL_HEIGHT + MONTH_HEIGHT / 2; // the base offset needed to get a card aligned to the last mongth of the most recent year

  // distance from top = the space a number of months takes up + the space taken up by the number of year labels above the card
  const top =
    baseOffset +
    MONTH_HEIGHT * numFullSizeMonthsAfter +
    MONTH_HEIGHT * reducedScale * numCompactedMonthsAfter +
    DEFAULT_LABEL_HEIGHT * yearsSinceEnd;

  const span =
    MONTH_HEIGHT * numFullSizeMonthsDuring +
    MONTH_HEIGHT * reducedScale * numCompactedMonthsDuring +
    numYearsSpanned * DEFAULT_LABEL_HEIGHT;

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

  const getAnimationVariants = (isEven: boolean) => {
    return {
      visible: { opacity: 1, x: '0%', transition: { duration: 0.7 } },
      hidden: { opacity: 0, x: isEven ? '50%' : '-50%' },
    };
  };

  return (
    <motion.div
      //   animate={controls}
      //   variants={getAnimationVariants(isEven)}
      //   initial="hidden"
      className="timeline-card"
      style={{
        position: 'absolute',
        top: top + 'px',
        left: isEven ? '180px' : undefined,
        right: !isEven ? '130px' : undefined,
        height: span + 'px',
        display: 'flex',
        alignItems: 'center',
        pointerEvents: 'none',
      }}
    >
      <Box
        ref={ref}
        bg="white"
        boxShadow="md"
        minW="400px"
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
            <Image src={item.logoUrl} height="40px" width="40px" alt={item.organisation + ' logo'} marginLeft="10px" />
          )}
        </Box>
        <Text color="gray.600" fontSize="sm" fontWeight="semibold">
          {format(startDate, 'MMMM yyyy')} - {isPresentJob ? 'Present' : format(endDate, 'MMMM yyyy')}
          {renderDuration()}
        </Text>

        <Box
          marginTop="30px"
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
      </Box>
      <TimelineBranch isEven={isEven} />
    </motion.div>
  );
};

export default TimelineCard;
