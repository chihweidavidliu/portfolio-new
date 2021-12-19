import { MdWork } from "react-icons/md";

export default {
  title: "Timeline Cards",
  name: "timelineCard",
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
      title: "Organisation",
      name: "organisation",
      type: "string",
    },
    {
      title: "Location",
      name: "location",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Start Date",
      name: "startDate",
      type: "date",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "End Date",
      name: "endDate",
      type: "date",
    },
    {
      title: "Description",
      name: "description",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Logo",
      name: "logo",
      type: "imageWithCaption",
    },
    {
      title: "Key Technologies",
      name: "keyTechnologies",
      type: "array",
      of: [{ type: "reference", to: [{ type: "skill" }] }],
    },
  ],
  preview: {
    select: {
      title: "title",
      organisation: "organisation",
      media: "logo",
    },
    prepare({ title, organisation, media }) {
      return {
        title: `${title} (${organisation})`,
        media,
      };
    },
  },
};
