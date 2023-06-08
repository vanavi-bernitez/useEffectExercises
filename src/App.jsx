import "./App.css";
import { UserInput } from "./components/UserInput";
import { WindowSizer } from "./components/WindowSizer";
import { SevenReader } from "./components/SevenReader";

const App = () => {
  return (
    <div className="App">
      <UserInput />
      <WindowSizer />
      <SevenReader />
    </div>
  );
};

export default App;
