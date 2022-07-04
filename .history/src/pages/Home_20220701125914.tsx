import { IonButton, IonCard, IonCardContent, IonContent, IonPage, } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Loginpage from './Loginpage';
import './Home.css';
// import '../theme/variable.css';
import image from '../assets/fac.png';
import insta from '../assets/insta.png';
import shoe from '../assets/shoe.png';
import TaxiVIP from '../assets/TaxiVIP.png'
const Home: React.FC = () => {
  return (
    <IonPage>

      <IonContent>
        <img className='taxivip' src={TaxiVIP} alt='' />
        <img className='shoe-img' src={shoe} alt='' />
        <IonCard className='main-card'>
            <IonButton className='mob-num-email-btn' color="black" href='/Loginpage'> Mobile Number or Email</IonButton>
            <IonButton className='facebook-btn' color="light"><img className='face-img' src={image} alt='' />Facebook</IonButton>
            <IonButton className='insta-btn' color="light"><img className='insta-img' src={insta} alt='' />Instagram</IonButton>
            <IonCardContent className='copyrights'> Copyright @ TaxiVIP cabs 21 </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;