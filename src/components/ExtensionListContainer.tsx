import { extensionsData } from "../constants";
import { ExtensionList } from "./ExtensionList";

interface extensionListData {
  image: string;
  header: string;
  details: string;
}

export const ExtensionListContainer = () => {
  return (
    <>
      {extensionsData.map(({ image, header, details }: extensionListData) => {
        return <ExtensionList image={image} header={header} details={details} />;
      })}
    </>
  );
};
