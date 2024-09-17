import Header from "@/components/header";
import { Contacts } from "@/components/Contacts";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const ContactsPage: React.FC = () => {
  return (
    <IonPage>
     <Header/>
      <IonContent>
        <Contacts/>
      </IonContent>
    </IonPage>
  );
};

export default ContactsPage;
