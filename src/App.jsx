import Add from "./components/Add";
import Completed from "./components/Completed";
import Incomplete from "./components/Incomplete";

function App() {
  return (
    <div className="space-y-9">
      <h1 className="text-3xl mt-4 font-bold text-yellow-400 text-center">ToDo App</h1>

      <div>
        <Add />
      </div>

      <div className=" overflow-hidden w-full h-96 grid grid-cols-2 shadow-2xl" style={{height:"27rem"}}>
        <div className="overflow-auto scroll-m-1 border-r-4 border-yellow-400">
          <Incomplete />
        </div>
        <div>
          <Completed />
        </div>
      </div>
    </div>
  );
}

export default App;
