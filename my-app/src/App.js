import "./App.css";

import MainPage from "./components/MainPage.js";
import TextEditor from "./components/TextEditor.js";
import Timer from "./components/Timer.js";
import Snake from "./components/Snake.js";

function App() {
  return (
    <div className="App">
      <Timer />
      <TextEditor />
      <MainPage />
    </div>
  );
}

export default App;
