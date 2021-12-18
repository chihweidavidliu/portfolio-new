// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// ---- FOUNDATIONS ----
import skill from "./foundations/skill.sanity";
import imageWithCaption from "./foundations/imageWithCaption.sanity";

// ---- WIDGETS ----
import heroImage from "./widgets/heroImage.sanity";
import skillsCard from "./widgets/skillsCard.sanity";

// ---- SECTIONS ----
import Hero from "./sections/Hero.sanity";
import skillsSection from "./sections/skillsSection.sanity";

// ---- PAGES ----
import homepage from "./pages/homepage.sanity";

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
  ]),
});
