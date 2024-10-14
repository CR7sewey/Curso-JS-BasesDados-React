import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Landing from "./pages/Landing";
import HomeLayout from "./pages/HomeLayout";
import Cocktail from "./pages/Cocktail";
import Newsletter from "./pages/Newsletter";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "cocktail",
        element: <Cocktail />,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
