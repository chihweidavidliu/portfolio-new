import { Flex, Link, Text } from '@chakra-ui/react';

const PreviewBanner = () => {
  return (
    <Flex
      position="fixed"
      top="0px"
      left="0px"
      bgColor="green.400"
      zIndex={3000}
      width="100vw"
      padding="5px 20px"
      color="white"
      justifyContent="space-between"
    >
      <div />
      <Text fontWeight="semibold">Preview Mode</Text>
      <Link href="/api/exit-preview">Exit</Link>
    </Flex>
  );
};

export default PreviewBanner;
