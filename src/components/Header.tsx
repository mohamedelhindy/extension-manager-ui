import { useState } from "react";

export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  return (
    <header className="bg-neutral-900 text-white flex justify-between p-5 rounded-2xl w-[85%]">
      <div className="flex items-center gap-2">
        <img src="/assets/images/logo.svg" alt="logo" />

        <h1 className="font-bold text-2xl">Extension</h1>
      </div>

      <button
        className="bg-neutral-700 p-3.5 flex items-center justify-center rounded-xl"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        <img
          src={
            isDarkMode
              ? "/assets/images/icon-sun.svg"
              : "/assets/images/icon-moon.svg"
          }
          alt=""
        />
      </button>
    </header>
  );
};
