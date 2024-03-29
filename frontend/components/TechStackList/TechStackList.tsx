import { Badge, Box, Flex, Text } from '@chakra-ui/layout';
import { primaryColor } from '@theme';

interface TechStackListProps {
  title: string;
  items: string[];
}
const TechStackList = ({ title, items }: TechStackListProps) => {
  return (
    <Box>
      <Text color={primaryColor(500)} mb="2">
        {title}
      </Text>
      <Flex gridGap="2" flexWrap="wrap">
        {items?.map((item) => {
          return (
            <Badge
              key={item}
              padding="2px"
              size="sm"
              borderRadius="md"
              fontWeight="semibold"
              fontSize="sm"
              bgColor="gray.200"
              color="gray.600"
            >
              {item}
            </Badge>
          );
        })}
      </Flex>
    </Box>
  );
};

export default TechStackList;
