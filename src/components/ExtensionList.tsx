interface ExtensionListProps {
  image: string;
  header: string;
  details: string;
}

export const ExtensionList = ({
  image,
  header,
  details,
}: ExtensionListProps) => {
  return (
    <div className="">
      <img src={image} alt="logo" />
      <div className="">{header}</div>
      <div className="">{details}</div>
    </div>
  );
};
