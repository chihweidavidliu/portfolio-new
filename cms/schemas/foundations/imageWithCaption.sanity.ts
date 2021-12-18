export default {
  title: "Image with caption",
  name: "imageWithCaption",
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
        // TODO: add link to portfolio project card
      ],

      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
