import { Box } from '@chakra-ui/layout';
import { Position } from '../../types/Position';

const getVerticalBranchStyles = (branchPosition: Position) => {
  // Even elements go on left
  if (branchPosition === 'right') {
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

const getHorizontalBranchStyles = (branchPosition: Position) => {
  return branchPosition === 'right' ? { right: '-35px' } : { left: '-35px' };
};

interface TimelineBranchProps {
  branchPosition: Position;
}

const TimelineBranch = ({ branchPosition }: TimelineBranchProps) => {
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
      {...getVerticalBranchStyles(branchPosition)}
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
        {...getHorizontalBranchStyles(branchPosition)}
      />
    </Box>
  );
};

export default TimelineBranch;
