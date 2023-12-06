import MainPage from './components/MainPage';
import Snake from './components/Snake'
import App from './App';
import TextEditorContainer from './components/TextEditorContainer';

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {path: "/", element: <MainPage />},
            {path: "/snake", element: <Snake />},
            {path: "/texteditor", element: <TextEditorContainer/>}
        ]
    }
];

export default routes