import { Box, BoxProps } from '@chakra-ui/layout'
import { FC } from 'react'

interface CardProps {
  chakraProps?: BoxProps
}

const Card: FC<CardProps> = ({ children, chakraProps }) => {
  return (
    <Box
      borderWidth="1px"
      padding="8"
      borderRadius="md"
      bgColor="white"
      boxShadow="lg"
      transition="all 0.4s"
      _hover={{ transform: 'scale(1.02)' }}
      {...chakraProps}
    >
      {children}
    </Box>
  )
}
export default Card
