import { MdCardTravel } from "react-icons/md";

export default {
  title: "Skills Cards",
  name: "skillsCard",
  type: "document",
  icon: MdCardTravel,
  fields: [
    {
      title: "Title", // using localeString at top level does not work for some reason
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Sections",
      name: "sections",
      type: "array",
      of: [
        {
          type: "skillsList",
        },
      ],
    },
  ],
};
