import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./layout/Root/index.jsx";
import Home from "./pages/Home/Home.jsx";
<<<<<<< HEAD
=======
import Main from "./pages/Main/Main.jsx";
import Result from "./pages/Result/Result.jsx";
import { TokenProvider } from "./config/TokenContext.jsx";
>>>>>>> b4d8cc4548f4af10424d692ea436d214575996e0

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
<<<<<<< HEAD
=======
            {
                path: "/main",
                element: <Main />,
            },
            {
                path: "/result",
                element: <Result />,
            }
>>>>>>> b4d8cc4548f4af10424d692ea436d214575996e0
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
