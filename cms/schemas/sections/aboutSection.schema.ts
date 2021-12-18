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
      validation: (Rule) => Rule.required(),
    },
    {
      name: "socialLinksDescription",
      title: "Social Links Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [{ type: "string", options: { list: ["github", "linkedin"] } }],
    },
    {
      name: "profileImage",
      title: "Profile Image",
      type: "imageWithCaption",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "profileImage",
    },
  },
};
