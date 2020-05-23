import React from "react";
import { IonPage, IonButton } from "@ionic/react";

function Register() {
  return (
    <IonPage>
      <h1>Register</h1>
      <IonButton routerLink="/login">Go to login</IonButton>
    </IonPage>
  );
}

export default Register;
