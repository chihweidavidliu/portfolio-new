import { MdStar } from "react-icons/md";
export default {
  name: "heroSection",
  title: "Hero",
  type: "object",
  icon: MdStar,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "leftImage",
      title: "Left Image",
      type: "heroImage",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "centerImage",
      title: "Center Image",
      type: "heroImage",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "rightImage",
      title: "Right Image",
      type: "heroImage",
      validation: (Rule) => Rule.required(),
    },
  ],
};
