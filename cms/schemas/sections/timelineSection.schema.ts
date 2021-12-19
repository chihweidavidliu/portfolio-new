import { MdHandyman } from "react-icons/md";

export default {
  name: "timelineSection",
  title: "Timeline",
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
      name: "collapseBeforeYear",
      title: "Collapse Before Year",
      type: "number",
    },
    {
      name: "timelineCards",
      title: "Timeline Cards",
      type: "array",
      of: [{ type: "reference", to: { type: "timelineCard" } }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
