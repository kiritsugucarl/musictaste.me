import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./layout/Root/index.jsx";
import Home from "./pages/Home/Home.jsx";

import Main from "./pages/Main/Main.jsx";
import { TokenProvider } from "./config/TokenContext.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import ErrTimeout from "./pages/ErrTimeout/ErrTimeout.jsx";
import ErrNotFound from "./pages/ErrNotFound/ErrNotFound.jsx";

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
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
        ],
    },
    {
        path: "/timeout",
        element: <ErrTimeout />,
    },
    {
        path: "*",
        element: <ErrNotFound />,
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
