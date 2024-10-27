import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Landing, { loader as landingLoader } from "./pages/Landing";
import HomeLayout from "./pages/HomeLayout";
import Cocktail, { loader as singleCocktailLoader } from "./pages/Cocktail";
import Newsletter, { action as newsletterAction } from "./pages/Newsletter";
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
        path: "cocktail/:id",
        element: <Cocktail />,
        errorElement: <SinglePageError />,
        loader: singleCocktailLoader,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
        action: newsletterAction,
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
