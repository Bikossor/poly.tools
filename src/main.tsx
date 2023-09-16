import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ReloadPrompt } from "./components/ReloadPrompt";
import { Router } from "./Router";
import { CustomTheme } from "./CustomTheme";
import "@fontsource/inter/latin.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={CustomTheme}>
      <ColorModeScript type={"localStorage"} />
      <RouterProvider router={Router} />
      <ReloadPrompt />
    </ChakraProvider>
  </React.StrictMode>,
);
