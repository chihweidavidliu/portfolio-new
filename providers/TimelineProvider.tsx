import { useMediaQuery } from '@chakra-ui/media-query';
import { createContext, FC, useContext, useState } from 'react';

export const MONTH_HEIGHT = 40;
export const LABEL_FONT_SIZE = 14;
export const REDUCED_SCALE = 0.2;
export const YEAR_LABEL_HEIGHT = 80;

interface TimelineContextInjectedProps {
  reducedScale: number;
  monthHeight: number;
  labelFontSize: number;
  yearLabelHeight: number;
  cardLayout: 'auto-place' | 'place-right';
}

export const TimelineContext = createContext<TimelineContextInjectedProps>({
  reducedScale: REDUCED_SCALE,
  monthHeight: MONTH_HEIGHT,
  labelFontSize: LABEL_FONT_SIZE,
  yearLabelHeight: YEAR_LABEL_HEIGHT,
  cardLayout: 'auto-place',
});

export const useTimelineContext = () => useContext(TimelineContext);

interface TimelineProviderProps {
  defaults?: Partial<TimelineContextInjectedProps>;
}

export const TimelineProvider: FC<TimelineProviderProps> = ({ children, defaults = {} }) => {
  const [isLgBreakpoint] = useMediaQuery('(min-width: 1200px');

  const cardLayout = isLgBreakpoint ? 'auto-place' : 'place-right';
  const [reducedScale, setReducedScale] = useState(defaults.reducedScale || REDUCED_SCALE);
  const [monthHeight, setMonthHeight] = useState(defaults.monthHeight || MONTH_HEIGHT);
  const [labelFontSize, setLabelFontSize] = useState(defaults.labelFontSize || LABEL_FONT_SIZE);

  console.log({ isLgBreakpoint, cardLayout });
  return (
    <TimelineContext.Provider
      value={{ reducedScale, monthHeight, labelFontSize, cardLayout, yearLabelHeight: YEAR_LABEL_HEIGHT }}
    >
      {children}
    </TimelineContext.Provider>
  );
};
