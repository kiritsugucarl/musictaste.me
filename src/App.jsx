import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./layout/Root/index.jsx";
import Home from "./pages/Home/Home.jsx";

import Main from "./pages/Main/Main.jsx";
import Result from "./pages/Result/Result.jsx";
import { TokenProvider } from "./config/TokenContext.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";

// const [isLoading, setIsLoading] = useState(false);
// useEffect(() => {
//     setTimeout(() => {
//         setIsLoading(false);
//     }, 5000);
// }, []);

// const { isLoading, startLoading, stopLoading } = useLoading();
// const loadingData = async () => {
//     startLoading();
//     await new Promise((resolve) => setTimeout(resolve, 2000));
//     stopLoading();
// };

const router = createBrowserRouter([
    {
        path: "/",
        // element: isLoading ? <Splashscreen/> : <Root />, // ito yung line na nag wwhitescreen lang siya
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
    // {
    //     path: "/splashscreen",
    //     element: <Splashscreen />,
    // }
]);

const App = () => {
    return (
        <TokenProvider>
            <RouterProvider router={router} />
        </TokenProvider>
    );
};

export default App;
