import { Box, Divider, Grid, Heading, Stack, Text } from '@chakra-ui/layout';
import { primaryColor } from '@theme';
import Card from '../Card';
import { SanitySkillCard } from '@groq/fragments/SkillsSection.fragment';

interface SkillCardProps {
  skillCard: SanitySkillCard;
}

const SkillCard = ({ skillCard }: SkillCardProps) => {
  return (
    <Card animate>
      <Heading as="h3" size="md" fontWeight="semibold" color={primaryColor(500)} textAlign="center" mb="5">
        {skillCard.title}
      </Heading>

      <Stack spacing="5" divider={<Divider />}>
        {skillCard.sections?.map((section) => {
          return (
            <Box key={section.title}>
              <Heading as="h4" size="sm" fontWeight="semibold" color={primaryColor(500)}>
                {section.title}
              </Heading>

              <Grid templateColumns="repeat(2, 1fr)" gridGap="2" marginTop="3">
                {section.skills.map((skill) => (
                  <Text key={skill._id}>{skill.title}</Text>
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
