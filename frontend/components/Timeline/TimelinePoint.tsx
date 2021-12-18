import { Flex, Text, Box } from '@chakra-ui/layout'

interface TimelinePointProps {
  label: string | number
  height?: number
}

export const DEFAULT_LABEL_HEIGHT = 80

const TimelinePoint = ({ label, height = DEFAULT_LABEL_HEIGHT }: TimelinePointProps) => {
  return (
    <Flex flexDir="column" alignItems="center" height={height + 'px'} padding="10px">
      <Text fontWeight="semibold" fontSize="xl" mb="3px">
        {label}
      </Text>

      <Flex
        borderRadius="100%"
        borderColor="teal.500"
        borderWidth="2px"
        width="20px"
        height="20px"
        justifyContent="center"
        alignItems="center"
      >
        <Box bgColor="teal.500" width="10px" height="10px" borderRadius="100%" />
      </Flex>
    </Flex>
  )
}

export default TimelinePoint
