import { Box } from '@chakra-ui/layout'
import { ISkillCard } from '../../types/SkillCard'

interface SkillCardProps {
  skillCard: ISkillCard
}

const SkillCard = ({ skillCard }: SkillCardProps) => {
  return <Box borderWidth="1px">{skillCard.title}</Box>
}

export default SkillCard
