import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
// import '../theme/variable.css';
import image from '../assets/fac.png';
import insta from '../assets/insta.png';
import shoe from '../assets/shoe.png';
const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <img src={shoe} alt='' />
        <IonCard className='main-card'>
            <IonButton className='mob-num-email-btn' color="black"> Mobile Number or Email</IonButton>
            <IonButton className='facebook-btn' color="light"><img src={image} alt='' />Facebook</IonButton>
            <IonButton className='insta-btn' color="light"><img src={insta} alt='' />Instagram</IonButton>
            <IonItem> Copyrights@</IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;