import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react";

import {home, peopleOutline, personOutline} from "ionicons/icons"
import { Route } from "react-router-dom";
import Home from "./home/Home";
import ContactsPage from "./contacts/Contacts";
import Profile from "./profiles/profiles";

export default function Tabs() {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/tabs/home" component={Home}></Route>
        <Route path="/tabs/contacts" component={ContactsPage}></Route>
        <Route path="/tabs/profile" component={Profile}></Route>
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/tabs/home">
            <IonIcon icon={home}/>
            <IonLabel>
                Inicio
            </IonLabel>
        </IonTabButton>
        <IonTabButton tab="contacts" href="/tabs/contacts">
            <IonIcon icon={peopleOutline}/>
            <IonLabel>
                Contactos
            </IonLabel>
        </IonTabButton>
        <IonTabButton tab="profile" href="/tabs/profile">
            <IonIcon icon={personOutline}/>
            <IonLabel>
                Perfil
            </IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
}
