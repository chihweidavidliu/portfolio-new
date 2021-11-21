import { FC, ReactNode } from 'react';
import { Box, Center, Heading } from '@chakra-ui/layout';
import useResizeObserver from 'use-resize-observer';
import { ReactElement } from 'react-markdown/lib/react-markdown';

interface PageSectionProps {
  title?: string;
  children: (props: { width: number; height: number }) => ReactNode;
}

export const PageSection: FC<PageSectionProps> = ({ children, title }) => {
  const { ref, width, height } = useResizeObserver<HTMLDivElement>({
    round: Math.floor,
  });

  return (
    <Center padding="clamp(10px, 5vw, 40px)" ref={ref}>
      <Box maxWidth="container.xl" width="100%">
        {title && (
          <Heading as="h2" mb="10" textAlign="center" fontWeight="semibold" color="gray.600">
            {title}
          </Heading>
        )}
        {width && height && children({ width, height })}
      </Box>
    </Center>
  );
};

export default PageSection;
