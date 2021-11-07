import { FC } from 'react'
import { Box, Center, Heading } from '@chakra-ui/layout'

interface PageSectionProps {
  title?: string
}

export const PageSection: FC<PageSectionProps> = ({ children, title }) => {
  return (
    <Center padding="clamp(10px, 5vw, 40px)">
      <Box maxWidth="container.xl" width="100%">
        {title && (
          <Heading as="h2" mb="10" textAlign="center" fontWeight="semibold" color="gray.600">
            {title}
          </Heading>
        )}
        {children}
      </Box>
    </Center>
  )
}

export default PageSection
