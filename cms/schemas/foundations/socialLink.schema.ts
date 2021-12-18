import { MdFacebook } from "react-icons/md";

export default {
  title: "Social Link",
  name: "socialLink",
  type: "document",
  icon: MdFacebook,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Url",
      name: "url",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Icon",
      name: "icon",
      type: "imageWithCaption",
      validation: (Rule) => Rule.required(),
    },
  ],
};
