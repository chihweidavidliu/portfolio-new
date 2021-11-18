import React from 'react';
import { Box } from '@chakra-ui/layout';
import { differenceInMonths, getYear, isAfter, subMonths } from 'date-fns';
import PageSection from '../../components/PageSection';
import { timelineContents } from '../../data/timeline/timelineContents';
import TimelineYear from '../../components/Timeline/TimelineYear';
import TimelineCard from '../../components/Timeline/TimelineCard';

const REDUCED_SCALE = 0.4; // the factor by which condensed years should shrink

interface TimelineSectionProps {
  collapseBeforeYear?: number;
}

const TimelineSection = ({ collapseBeforeYear }: TimelineSectionProps) => {
  const timelineItems = Object.values(timelineContents).sort((a, b) => {
    if (isAfter(a.startDate, b.startDate)) {
      return -1;
    }
    return 1;
  });

  const earliestDate = timelineItems[timelineItems.length - 1].startDate;

  const months = differenceInMonths(new Date(), earliestDate);

  const timelinePoints: Date[] = [new Date()];

  for (let i = 0; i < months; i++) {
    timelinePoints.push(subMonths(timelinePoints[i], 1));
  }

  const timelinePointsByYear = timelinePoints.reduce((acc, point) => {
    const year = getYear(point);

    if (!acc[year]) {
      acc[year] = [];
    }

    acc[year].push(point);
    return acc;
  }, {} as { [index: number]: Date[] });

  const keys = Object.keys(timelinePointsByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <PageSection title="Work Experience and Education">
      {/* width of 0 so that the cards can be absolutely positioned against the vertical center of the screen */}
      <Box position="relative" width="0px" margin="0 auto">
        {keys.map((year, yearIndex) => {
          const months = timelinePointsByYear[parseInt(year)];

          const scaleBy = collapseBeforeYear && Number(year) < collapseBeforeYear ? REDUCED_SCALE : 1;

          return (
            <TimelineYear
              year={year}
              yearIndex={yearIndex}
              months={months}
              key={yearIndex}
              showGuideLines={true}
              scaleBy={scaleBy}
            />
          );
        })}

        {timelineItems.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <TimelineCard
              key={index}
              item={item}
              isEven={isEven}
              collapseBeforeYear={collapseBeforeYear}
              reducedScale={REDUCED_SCALE}
            />
          );
        })}
      </Box>
    </PageSection>
  );
};

export default TimelineSection;
