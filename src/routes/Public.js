import React from "react";
import { Route } from "react-router-dom";

const Public = ({ component: Component, layout: Layout, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        // authorised so return component
        return (
          <Layout>
            {console.log(Component, Layout, "layout")}
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
};

export default Public;
