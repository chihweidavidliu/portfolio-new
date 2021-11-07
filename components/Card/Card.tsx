import { Box } from '@chakra-ui/layout'
import { FC } from 'react'

const Card: FC = ({ children }) => {
  return (
    <Box
      borderWidth="1px"
      padding="8"
      borderRadius="md"
      bgColor="white"
      boxShadow="lg"
      transition="all 0.4s"
      _hover={{ transform: 'scale(1.02)' }}
    >
      {children}
    </Box>
  )
}
export default Card
