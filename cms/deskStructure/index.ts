import S from "@sanity/desk-tool/structure-builder";
import homepage from "./pages/homepage.desk";
import { MdPages } from "react-icons/md";

const exclusions = ["homepage"];

export default () =>
  S.list()
    .title("Base")

    .items([
      S.listItem()
        .title("Pages")
        .icon(MdPages)
        .child(S.list().title("Pages").items([homepage])),

      // remaining default docs
      ...S.documentTypeListItems().filter((listItem) => {
        const schemaType = listItem.getSchemaType();
        return !exclusions.includes(
          typeof schemaType === "string" ? schemaType : schemaType.name
        );
      }),
    ]);
