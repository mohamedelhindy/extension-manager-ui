import { extensions } from "../const";
import type { ExtensionListProps } from "../type";
import { ExtensionList } from "./ExtensionList";

export const ExtensionListContainer = () => {
  return (
    <>
      {extensions.map((props: ExtensionListProps, index) => {
        return <ExtensionList key={index} {...props} />;
      })}
    </>
  );
};
