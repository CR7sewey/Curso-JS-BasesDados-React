import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Landing, { loader as landingLoader } from "./pages/Landing";
import HomeLayout from "./pages/HomeLayout";
import Cocktail from "./pages/Cocktail";
import Newsletter from "./pages/Newsletter";
import Error from "./pages/Error";
import SinglePageError from "./pages/SinglePageError";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader,
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
