import { IonContent, IonPage, IonTitle,IonInput,IonButton,IonText } from '@ionic/react';
import './Signuppage.css';


const Loginpage: React.FC = () =>{
    
    return (
        <IonPage>
           <IonContent className='main-page-content'>
                
                <IonTitle className='signup'>SignUp</IonTitle>
                <IonInput  type='text' placeholder='User Name' className='signup-uname-input'></IonInput>
                <IonInput  type='number' placeholder='Mobile Number' className='signup-number-input'></IonInput>
                <IonInput  type='email' placeholder='Email' className='signup-email-input'></IonInput>
                <IonInput  type='password' placeholder='Password' className='signup-password-input'></IonInput>
                <IonButton type='submit' className='signup-submit-button' color='black' href='/Landingpage'> SignUp </IonButton>
                <IonText className='signup-text'> Have an account <a href='SignUp'>Login</a> here </IonText>
            </IonContent> 
        </IonPage>
    )
};

export default Loginpage;