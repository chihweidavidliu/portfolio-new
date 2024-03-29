export default {
  name: "homepage",
  type: "document",
  title: "Homepage",
  // https://www.sanity.io/docs/experimental/ui-affordances-for-actions
  __experimental_actions: ["create", "update", /*'delete',*/ "publish"],
  fields: [
    {
      name: "sections",
      type: "array",
      of: [
        { type: "heroSection" },
        { type: "skillsSection" },
        { type: "aboutSection" },
        { type: "projectsSection" },
        { type: "timelineSection" },
      ],
    },
  ],
  preview: {
    select: {
      title: "Homepage",
    },
  },
};
