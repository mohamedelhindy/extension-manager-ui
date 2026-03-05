import { useState } from "react";
import type { ExtensionListProps } from "../type";

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

        <ButtonToggle />
      </div>
    </div>
  );
};

const ButtonToggle = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      onClick={() => setIsActive(!isActive)}
      className={`w-9 h-5 rounded-full flex items-center cursor-pointer transition-colors duration-700 ${isActive ? "bg-neutral-300" : "bg-red-700"}`}
    >
      <div
        className={`w-4 h-4 rounded-full m-0.5 bg-neutral-50 transition-transform duration-300 ${isActive ? "translate-x-0" : "translate-x-4"}`}
      ></div>
    </button>
  );
};
