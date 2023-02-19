import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { CircularArea } from "./pages/tools/CircularArea";
import { DateTools } from "./pages/tools/Date";
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
          {
            path: "date",
            element: <DateTools />,
          },
          {
            path: "circular-area",
            element: <CircularArea />,
          },
        ],
      },
    ],
  },
]);
