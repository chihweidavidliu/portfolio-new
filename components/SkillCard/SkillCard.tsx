import { Box, Divider, Grid, Heading, Stack, Text } from '@chakra-ui/layout'
import { primaryColor } from '../../theme'
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
      transition="all 0.4s"
      _hover={{ transform: 'scale(1.05)' }}
    >
      <Heading as="h3" size="md" fontWeight="semibold" color={primaryColor(500)} textAlign="center" mb="5">
        {skillCard.title}
      </Heading>

      <Stack spacing="5" divider={<Divider />}>
        {skillCard.categories.map((category) => {
          return (
            <Box key={category.categoryName}>
              <Heading as="h4" size="sm" fontWeight="semibold" color={primaryColor(500)}>
                {category.categoryName}
              </Heading>

              <Grid templateColumns="repeat(2, 1fr)" gridGap="2" marginTop="3">
                {category.skills.map((skill, index) => (
                  <Text key={skill + '-index'}>{skill}</Text>
                ))}
              </Grid>
            </Box>
          )
        })}
      </Stack>
    </Box>
  )
}

export default SkillCard
