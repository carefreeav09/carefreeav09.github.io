import React from "react";
import { withRouter, Switch, Route } from "react-router";
import loadable from "@loadable/component";

// import Private from "./Private";
import Public from "./Public";

// import AdminLayout from "../layout/AdminLayout";
import PublicLayout from "../layout/Public";

const AsyncHome = loadable(() => import("../pages/Home"));
const AsyncAbout = loadable(() => import("../pages/About"));
const AsyncComponents = loadable(() => import("../pages/Components"));
const AsyncBlogs = loadable(() => import("../pages/Blogs"));
const AsyncBlogIndividual = loadable(() => import("../pages/Blogs/Individual"));
const NotFound = loadable(() => import("../pages/NotFound"));

const AsyncContact = loadable(() => import("../pages/Contact"));

const App = () => {
  return (
    <Switch>
      <Public path="/" exact component={AsyncHome} layout={PublicLayout} />
      <Public
        path="/about"
        exact
        component={AsyncAbout}
        layout={PublicLayout}
      />
      <Public
        path="/components"
        exact
        component={AsyncComponents}
        layout={PublicLayout}
      />
      <Public
        path="/blogs"
        exact
        component={AsyncBlogs}
        layout={PublicLayout}
      />

      <Public
        path={`/blog/:id/:slug`}
        exact
        component={AsyncBlogIndividual}
        layout={PublicLayout}
      />

      <Public
        path={`/contact`}
        exact
        component={AsyncContact}
        layout={PublicLayout}
      />

      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default withRouter(App);
