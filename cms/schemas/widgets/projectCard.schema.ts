import { MdWork } from "react-icons/md";

export default {
  title: "Project Cards",
  name: "projectCard",
  type: "document",
  icon: MdWork,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Description",
      name: "description",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Tech Stack",
      name: "techStack",
      type: "array",
      of: [{ type: "skillsList" }],
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Primary CTA",
      name: "primaryCTA",
      type: "cta",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Secondary CTAs",
      name: "secondaryCTAs",
      type: "array",
      of: [{ type: "cta" }],
    },
    {
      title: "Images",
      name: "images",
      type: "array",
      of: [{ type: "imageWithCaption" }],
      validation: (Rule) => Rule.min(1),
    },
  ],
};
