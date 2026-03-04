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
    <div className="bg-neutral-900 border-neutral-700 border-2 rounded-3xl p-6 flex flex-col gap-7">
      <div className="flex gap-5 items-start">
        <img className="h-fit" src={image} alt="logo" />

        <div className="flex flex-col gap-2">
          <div className="text-neutral-50 text-[21px] font-noto font-semibold">
            {header}
          </div>

          <div className="text-neutral-300 font-noto">{details}</div>
        </div>
      </div>

      <div className="flex justify-between mt-auto items-center">
        <button className="py-2 px-4 bg-neutral-900 border-neutral-700 border-2 rounded-full text-neutral-50 font-noto font-semibold">
          Remove
        </button>

        <div className="bg-red-700 w-10 h-5 rounded-full flex items-center">
          <div className="w-5 h-full bg-olive-50 rounded-full m-0.5"></div>
        </div>
      </div>
    </div>
  );
};
