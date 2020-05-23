import React from "react";
import { IonReactRouter } from "@ionic/react-router";
import { IonRouterOutlet } from "@ionic/react";
import { Route, Redirect } from "react-router-dom";

import Login from "../screens/Login";
import Register from "../screens/Register";

function Navigation() {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/login" component={Login} exact={true} />
        <Route path="/register" component={Register} exact={true} />
        <Route
          path="/"
          exact={true}
          render={() => <Redirect to="/login" exact={true} />}
        />
      </IonRouterOutlet>
    </IonReactRouter>
  );
}

export default Navigation;
