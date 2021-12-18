export default {
  title: "Skills List",
  name: "skillsList",
  type: "object",
  fields: [
    {
      title: "Section Title",
      name: "title",
      type: "string",
    },
    {
      title: "Skills",
      name: "skills",
      type: "array",
      of: [{ type: "reference", to: [{ type: "skill" }] }],
    },
  ],
};
