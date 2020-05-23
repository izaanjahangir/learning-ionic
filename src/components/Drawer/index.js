import React from "react";
import { useHistory } from "react-router-dom";
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
} from "@ionic/react";

function Drawer(props, ref) {
  const history = useHistory();

  return (
    <IonMenu
      ref={ref}
      swipeGesture={true}
      side="start"
      type="overlay"
      contentId="main-content"
    >
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Start Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem onClick={() => history.push("/register")}>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
}

export default React.forwardRef(Drawer);
