import { MdHandyman } from "react-icons/md";

export default {
  name: "skillsSection",
  title: "Skills",
  type: "object",
  icon: MdHandyman,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "skillCards",
      title: "Skill Cards",
      type: "array",
      of: [{ type: "reference", to: { type: "skillsCard" } }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
