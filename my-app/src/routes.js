import MainPage from "./components/MainPage";
import Snake from "./components/Snake";
import App from "./App";
import TextEditor from "./components/TextEditor";
const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/snake", element: <Snake /> },
      {
        path: "/projects/:projectId/texteditor",
        element: <TextEditor />,
      },
    ],
  },
];

export default routes;
