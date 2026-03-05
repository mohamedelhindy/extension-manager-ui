import { Header, StateFilter } from "./components";
import { ExtensionList } from "./components/ExtensionList";
import { extensions } from "./const";
import type { ExtensionListProps } from "./type";

const App = () => {
  return (
    <>
      <Header />

      <main className="w-full flex flex-col gap-10">
        <div className="text-white flex items-center justify-between">
          <h2 className="text-4xl font-noto font-semibold">Extensions List</h2>

          <StateFilter />
        </div>
        <div className="grid gap-3 grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
          {extensions.map((props: ExtensionListProps, index) => {
            return <ExtensionList key={index} {...props} />;
          })}
        </div>
      </main>
    </>
  );
};

export default App;
