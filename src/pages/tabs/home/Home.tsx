import Header from "@/components/header";
import { Main } from "@/components/Main";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const Home: React.FC = () => {
  return (
    <IonPage>
     <Header/>
      <IonContent>
        <Main/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
