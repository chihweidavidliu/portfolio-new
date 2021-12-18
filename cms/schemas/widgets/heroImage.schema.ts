export default {
  title: "Hero Image",
  name: "heroImage",
  type: "image",
  options: {
    hotspot: true,
  },
  fields: [
    {
      title: "Metadata", // using localeString at top level does not work for some reason
      name: "metadata",
      type: "object",
      fields: [
        {
          title: "Caption",
          name: "caption",
          type: "string",
        },
        {
          title: "Associated Project",
          name: "associatedProject",
          type: "reference",
          to: [{ type: "projectCard" }],
        },
      ],

      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
