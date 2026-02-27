import { Header, StateFilter } from "./components";

const App = () => {
  return (
    <>
      <Header />

      <main className="w-full">
        <div className="text-white flex items-center justify-between">
          <h2 className="text-4xl font-noto font-semibold">Extensions List</h2>

          <StateFilter />
        </div>
      </main>
    </>
  );
};

export default App;
