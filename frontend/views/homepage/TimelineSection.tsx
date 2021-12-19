import React from 'react';
import { Box } from '@chakra-ui/layout';
import { differenceInMonths, getYear, isAfter, subMonths } from 'date-fns';
import PageSection from '@components/PageSection';
import { timelineContents } from '../../data/timeline/timelineContents';
import TimelineYear from '@components/Timeline/TimelineYear';
import TimelineCard from '@components/Timeline/TimelineCard';
import { SanityTimelineSection } from '@groq/fragments/TimelineSection.fragment';

const REDUCED_SCALE = 0.2; // the factor by which condensed years should shrink
const CONTAINER_BREAKPOINT = 920;

interface TimelineSectionProps {
  section: SanityTimelineSection;
}

const TimelineSection = ({ section }: TimelineSectionProps) => {
  const { title, collapseBeforeYear, timelineCards } = section;

  const timelineItems = Object.values(timelineCards).sort((a, b) => {
    if (isAfter(new Date(a.startDate), new Date(b.startDate))) {
      return -1;
    }
    return 1;
  });

  const earliestDate = new Date(timelineItems[timelineItems.length - 1].startDate);

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
    <PageSection title={title || 'Work Experience and Education'}>
      {({ width }) => {
        const hasAdequateSpace = width && width > CONTAINER_BREAKPOINT;
        console.log({ width, hasAdequateSpace });

        if (!hasAdequateSpace) {
          return (
            <Box
              display="grid"
              gridTemplateColumns="1fr"
              maxWidth="700px"
              width="100%"
              margin="0 auto"
              position="relative"
              gridGap="5"
              justifyItems="center"
            >
              {timelineItems.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <TimelineCard
                    key={index}
                    item={item}
                    position={isEven ? 'right' : 'left'}
                    collapseBeforeYear={collapseBeforeYear}
                    reducedScale={REDUCED_SCALE}
                    defaultScale={1}
                    hasAdequateSpace={false}
                  />
                );
              })}
            </Box>
          );
        }
        return (
          <Box position="relative" width="0px" margin="0 auto" marginTop="100px">
            {keys.map((year, yearIndex) => {
              const months = timelinePointsByYear[parseInt(year)];

              let scaleBy = collapseBeforeYear && Number(year) < collapseBeforeYear ? REDUCED_SCALE : 1;

              return (
                <TimelineYear
                  year={year}
                  yearIndex={yearIndex}
                  months={months}
                  key={yearIndex}
                  showGuideLines={false}
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
                  position={isEven ? 'right' : 'left'}
                  collapseBeforeYear={collapseBeforeYear}
                  reducedScale={REDUCED_SCALE}
                  defaultScale={1}
                />
              );
            })}
          </Box>
        );
      }}
    </PageSection>
  );
};

export default TimelineSection;
