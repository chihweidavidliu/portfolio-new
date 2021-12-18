import { MdFace } from "react-icons/md";

export default {
  name: "aboutSection",
  title: "About Section",
  type: "object",
  icon: MdFace,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
    {
      name: "socialLinksDescription",
      title: "Social Links Description",
      type: "string",
    },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [{ type: "reference", to: { type: "socialLink" } }],
    },
    {
      name: "profileImage",
      title: "Profile Image",
      type: "imageWithCaption",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "profileImage",
    },
  },
};
