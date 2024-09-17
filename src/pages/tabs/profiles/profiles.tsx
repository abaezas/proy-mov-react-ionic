import Header from "@/components/header";
import { Profile } from "@/components/Profile";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const ProfilePage: React.FC = () => {
  return (
    <IonPage>
     <Header/>
      <IonContent>
        <Profile/>
      </IonContent>
    </IonPage>
  );
};

export default ProfilePage;
