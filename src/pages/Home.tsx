import { IonButton, IonCard, IonCardContent, IonContent, IonPage, } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
// import Loginpage from './Loginpage';
import './Home.css';
// import '../theme/variable.css';
import image from '../assets/fac.png';
import insta from '../assets/insta.png';
import shoe from '../assets/shoe.png';
import Shoemart from '../assets/shoemart.png'
const Home: React.FC = () => {
  return (
    <IonPage>

      <IonContent>
        <img className='Shoemart' src={Shoemart} alt='' />
        <img className='shoe-img' src={shoe} alt='' />
        <IonCard className='main-card'>
            <IonButton className='mob-num-email-btn' href="/Loginpage"> Mobile Number or Email</IonButton>
            <IonButton className='facebook-btn' ><img className='face-img' src={image} alt='' />Facebook</IonButton>
            <IonButton className='insta-btn' ><img className='insta-img' src={insta} alt='' />Instagram</IonButton>
            <IonCardContent className='copyrights'> Copyright @ Shoemart 2021 </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;