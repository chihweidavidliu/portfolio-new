import { Box } from '@chakra-ui/layout';
import { TimelinePosition } from '@interfaces/TimelinePosition';

const getVerticalBranchStyles = (cardPosition: TimelinePosition) => {
  if (cardPosition === 'right') {
    return {
      left: '-70px',
      borderRightWidth: '2px',
      borderTopRightRadius: '5px',
      borderBottomRightRadius: '5px',
    };
  }

  return {
    right: '-70px',
    borderLeftWidth: '2px',
    borderTopLeftRadius: '5px',
    borderBottomLeftRadius: '5px',
  };
};

const getHorizontalBranchStyles = (cardPosition: TimelinePosition) => {
  if (cardPosition === 'right') {
    return {
      right: '-35px',
    };
  }

  return {
    left: '-35px',
  };
};
interface TimelineBranchProps {
  cardPosition: TimelinePosition;
}

const TimelineBranch = ({ cardPosition }: TimelineBranchProps) => {
  return (
    <Box
      className="bar"
      transition="all 0.5s"
      width="30px"
      borderTopWidth="2px"
      borderBottomWidth="2px"
      borderColor="gray.300"
      borderStyle="dashed"
      height="100%"
      position="absolute"
      {...getVerticalBranchStyles(cardPosition)}
      display="flex"
      alignItems="center"
    >
      <Box
        className="horizontal-bar"
        height="1px"
        width="90px"
        position="relative"
        borderColor="gray.300"
        borderStyle="dashed"
        borderTopWidth="2px"
        transition="all 0.5s"
        {...getHorizontalBranchStyles(cardPosition)}
      />
    </Box>
  );
};

export default TimelineBranch;
