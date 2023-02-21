import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ReloadPrompt } from "./components/ReloadPrompt";
import { Router } from "./Router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript type={"localStorage"} />
      <RouterProvider router={Router} />
      <ReloadPrompt />
    </ChakraProvider>
  </React.StrictMode>,
);
