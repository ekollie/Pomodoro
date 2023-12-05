import "./App.css";
import Snake from "./components/Snake.js";
import MainPage from "./components/MainPage.js"
import TextEditor from "./components/TextEditor.js"
import Timer from "./components/Timer.js"

function App() {
  return (
    <div className="App">
      <Timer />
      <TextEditor />
      <Snake />
      <MainPage />
    </div>
  );
}

export default App;
