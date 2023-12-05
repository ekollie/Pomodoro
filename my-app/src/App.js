import "./App.css";

import MainPage from "./components/MainPage.js";
import TextEditor from "./components/TextEditor.js";
import Timer from "./components/Timer.js";
import Snake from "./components/Snake.js";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Timer />
      <TextEditor />
      <Snake />
      {/* <MainPage /> */}
      <Outlet />
    </div>
  );
}

export default App;
