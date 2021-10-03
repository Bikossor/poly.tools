import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import * as serviceWorkerRegistration from "serviceWorkerRegistration";
import reportWebVitals from "reportWebVitals";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import ResponsiveDrawer from "components/ResponsiveDrawer";
import { PixelDensityCalc } from "pages/tools/PixelDensityCalc";
import "index.css";

const Home = React.lazy(() => import("pages/Home"));
const About = React.lazy(() => import("pages/About"));
const HttpStatus404 = React.lazy(() => import("pages/HttpStatus404"));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CssBaseline />
      <ResponsiveDrawer>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route
              path="/pixel-density-calculator"
              component={PixelDensityCalc}
            />
            <Route path="*" component={HttpStatus404} />
          </Switch>
        </Suspense>
      </ResponsiveDrawer>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
