import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./layout/Root/index.jsx";
import Home from "./pages/Home/Home.jsx";
import Main from "./pages/Main/Main.jsx";
import { TokenProvider } from "./config/TokenContext.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/main",
                element: <Main />,
            },
            {
                path: "/result",
                element: <Result />,
            },
        ],
    },
]);

const App = () => {
    return (
        <TokenProvider>
            <RouterProvider router={router} />
        </TokenProvider>
    );
};

export default App;
