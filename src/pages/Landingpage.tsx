import { IonCard, IonContent, IonImg, IonPage, IonSearchbar } from '@ionic/react';
import './Landingpage.css';
import React, { useState } from 'react';
import shoe from '../assets/shoe gallery.jpg'


const Landingpage: React.FC = () =>{
    const [searchText, setSearchText] = useState('');

    return (
        <IonPage>
            <IonContent>
            <IonImg src={shoe} className='gallery-img' />
           <IonCard className='landpage-main-card'>
           <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
            </IonCard> 
            </IonContent>
        </IonPage>
    )
};

export default Landingpage;