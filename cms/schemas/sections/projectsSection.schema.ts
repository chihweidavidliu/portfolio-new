import { MdHandyman } from "react-icons/md";

export default {
  name: "projectsSection",
  title: "Projects",
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
      name: "projectCards",
      title: "Project Cards",
      type: "array",
      of: [{ type: "reference", to: { type: "projectCard" } }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
