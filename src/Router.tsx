import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { DisplayCalculator } from "./pages/tools/DisplayCalculator";
import { SortLines } from "./pages/tools/SortLines";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "tools",
        children: [
          {
            path: "display-calculator",
            element: <DisplayCalculator />,
          },
          {
            path: "sort-lines",
            element: <SortLines />,
          },
        ],
      },
    ],
  },
]);
