import React, { useRef } from "react";
import { IonPage, IonButton } from "@ionic/react";

import Drawer from "../../components/Drawer";

function Login() {
  const loginEl = useRef(null);

  function handleClick() {
    loginEl.current.open();
  }

  return (
    <>
      <Drawer ref={loginEl}></Drawer>
      <IonPage id="main-content">
        <h1>Login</h1>
        <IonButton onClick={handleClick}>Open Menu</IonButton>
        <IonButton routerLink="/register">Go to register</IonButton>
      </IonPage>
    </>
  );
}

export default Login;
