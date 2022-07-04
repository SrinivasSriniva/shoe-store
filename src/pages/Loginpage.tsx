import { IonContent, IonTitle, IonPage, IonButton,IonInput,IonText } from '@ionic/react';
import './Loginpage.css';
import shoemart from '../assets/shoemart.png';


const Loginpage: React.FC = () =>{
    
    return (
        <IonPage>
           <IonContent className='main-page-content'>
    <img className='shoemart' src={shoemart} alt='' />
    <IonTitle className='Login'>Login</IonTitle>
    <IonInput  type='text' placeholder='User Name' className='login-uname-input'></IonInput>
    <IonInput  type='password' placeholder='Password' className='login-password-input'></IonInput>
    <IonButton type='submit' className='login-submit-button'  href='/Landingpage'> Login </IonButton>
    <IonText className='login-text'> If you don't have account <a href='Signuppage'>Sign-Up</a> here </IonText>
  </IonContent>
        </IonPage>
    )
};

export default Loginpage;