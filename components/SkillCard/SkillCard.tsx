import { Box, Heading } from '@chakra-ui/layout'
import { ISkillCard } from '../../types/SkillCard'

interface SkillCardProps {
  skillCard: ISkillCard
}

const SkillCard = ({ skillCard }: SkillCardProps) => {
  return (
    <Box
      borderWidth="1px"
      padding="8"
      borderRadius="md"
      bgColor="white"
      boxShadow="lg"
      _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}
    >
      <Heading as="h3" size="md">
        {skillCard.title}
      </Heading>

      {skillCard.categories.map((category) => {
        return (
          <Box key={category.categoryName}>
            <Heading as="h4" size="sm">
              {category.categoryName}
            </Heading>
          </Box>
        )
      })}
    </Box>
  )
}

export default SkillCard
