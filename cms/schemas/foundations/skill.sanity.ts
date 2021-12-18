import { MdStar } from "react-icons/md";

export default {
  title: "Skill",
  name: "skill",
  type: "document",
  icon: MdStar,
  fields: [
    {
      title: "Title", // using localeString at top level does not work for some reason
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Icon",
      name: "icon",
      type: "imageWithCaption",
    },
  ],
};
