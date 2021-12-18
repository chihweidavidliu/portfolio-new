import S from "@sanity/desk-tool/structure-builder";
import { MdHome } from "react-icons/md";

export default S.listItem()
  .title("Homepage")
  .icon(MdHome)
  .child(S.document().schemaType("homepage").documentId("homepage"));
