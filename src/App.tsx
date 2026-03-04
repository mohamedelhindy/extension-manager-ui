import { ExtensionListContainer, Header, StateFilter } from "./components";

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
          <ExtensionListContainer />
        </div>
      </main>
    </>
  );
};

export default App;
