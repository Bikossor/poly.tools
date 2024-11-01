import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";

const Home = lazy(() => import("./pages/Home"));
const CircularArea = lazy(() => import("./pages/tools/CircularArea"));
const DateTools = lazy(() => import("./pages/tools/Date"));
const DisplayCalculator = lazy(() => import("./pages/tools/DisplayCalculator"));
const SortLines = lazy(() => import("./pages/tools/SortLines"));
const RAIDCalculator = lazy(() => import("./pages/tools/RAIDCalculator"));
const OpticalMediaSpeedCalculator = lazy(
  () => import("./pages/tools/OpticalMediaSpeedCalculator"),
);
const RAMBandwidth = lazy(() => import("./pages/tools/RAMBandwidth"));

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
          {
            path: "raid-calculator",
            element: <RAIDCalculator />,
          },
          {
            path: "optical-media-speed-calculator",
            element: <OpticalMediaSpeedCalculator />,
          },
          {
            path: "ram-bandwidth",
            element: <RAMBandwidth />,
          },
        ],
      },
    ],
  },
]);
