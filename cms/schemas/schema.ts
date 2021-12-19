// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// ---- FOUNDATIONS ----
import skill from "./foundations/skill.schema";
import imageWithCaption from "./foundations/imageWithCaption.schema";
import blockContent from "./foundations/blockContent.schema";
import ctaSchema from "./foundations/cta.schema";

// ---- WIDGETS ----
import heroImage from "./widgets/heroImage.schema";
import skillsCard from "./widgets/skillsCard.schema";
import projectCardSchema from "./widgets/projectCard.schema";
import skillsListSchema from "./widgets/skillsList.schema";
import timelineCardSchema from "./widgets/timelineCard.schema";

// ---- SECTIONS ----
import Hero from "./sections/Hero.schema";
import skillsSection from "./sections/skillsSection.schema";
import aboutSectionSchema from "./sections/aboutSection.schema";
import projectsSectionSchema from "./sections/projectsSection.schema";

// ---- PAGES ----
import homepage from "./pages/homepage.schema";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    heroImage,
    Hero,
    homepage,
    skillsCard,
    skill,
    imageWithCaption,
    skillsSection,
    aboutSectionSchema,
    blockContent,
    projectCardSchema,
    skillsListSchema,
    ctaSchema,
    projectsSectionSchema,
    timelineCardSchema,
  ]),
});
