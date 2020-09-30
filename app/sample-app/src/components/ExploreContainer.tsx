import { IonButton, IonCol, IonGrid, IonRow } from '@ionic/react';
import React from 'react';
import { BasicButton } from './atom/BasicButton';
import { Content } from './atom/Content';
import './ExploreContainer.css';

interface ContainerProps { }

const consolelog = () => (
  console.log("test")
)
const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <Content>
      <IonGrid>
        <IonRow className="ion-align-self-center">
          <IonCol>
            <IonButton onClick={consolelog}>test</IonButton>
          </IonCol>
          <IonCol>
            ion-col
          </IonCol>
          <IonCol>
            ion-col
          </IonCol>
          <IonCol>
            ion-col
          </IonCol>
          <IonCol>
            ion-col
          </IonCol>
        </IonRow>
      </IonGrid>
      <IonRow className="ion-align-items-center">
        <IonCol>
          <BasicButton children="buttton"></BasicButton>
        </IonCol>
      </IonRow>
    </Content>
  );
};

export default ExploreContainer;
