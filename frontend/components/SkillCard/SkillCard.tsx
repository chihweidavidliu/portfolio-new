import { Box, Divider, Grid, Heading, Stack, Text } from '@chakra-ui/layout';
import { primaryColor } from '../../../theme';
import { ISkillCard } from '../../../types/SkillCard';
import Card from '../Card';

interface SkillCardProps {
  skillCard: ISkillCard;
}

const SkillCard = ({ skillCard }: SkillCardProps) => {
  return (
    <Card animate>
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
                  <Text key={skill + index}>{skill}</Text>
                ))}
              </Grid>
            </Box>
          );
        })}
      </Stack>
    </Card>
  );
};

export default SkillCard;
