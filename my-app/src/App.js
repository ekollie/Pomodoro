import "./App.css";
import MainPage from "./components/MainPage.js"
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <MainPage /> */}
      <Outlet />
    </div>
  );
}

export default App;
