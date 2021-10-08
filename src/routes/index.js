import React from "react";
import { withRouter, Switch } from "react-router";
import loadable from "@loadable/component";

// import Private from "./Private";
import Public from "./Public";

// import AdminLayout from "../layout/AdminLayout";
import PublicLayout from "../layout/Public";

const AsyncHome = loadable(() => import("../pages/Home"));
const AsyncAbout = loadable(() => import("../pages/About"));
const AsyncComponents = loadable(() => import("../pages/Components"));

const App = () => {
  return (
    <Switch>
      <Public path="/" exact component={AsyncHome} layout={PublicLayout} />
      <Public path="/about" exact component={AsyncAbout} layout={PublicLayout} />
      <Public path="/components" exact component={AsyncComponents} layout={PublicLayout} />
    </Switch>
  );
};

export default withRouter(App);
