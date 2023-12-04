import "./App.css";
import Snake from "./components/Snake.js";
import MainPage from "./components/MainPage.js"
import TextEditor from "./components/TextEditor.js"

function App() {
  return (
    <div className="App">
      <TextEditor />
      <Snake />
      <MainPage />
    </div>
  );
}

export default App;
