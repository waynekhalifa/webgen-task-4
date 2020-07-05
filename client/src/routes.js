import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "./hoc/Auth";

const Register = React.lazy(() => import("./containers/Register"));
const Login = React.lazy(() => import("./containers/Login"));
const Profile = React.lazy(() => import("./containers/Profile"));
const NotFound = React.lazy(() => import("./containers/NotFound"));

const routes = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Switch>
        <Route path="/profile" component={Auth(Profile, true)} />
        <Route path="/login" component={Auth(Login, false)} />
        <Route path="/" exact component={Auth(Register, false)} />
        <Route component={Auth(NotFound, null)} />
      </Switch>
    </Suspense>
  );
};

export default routes;
