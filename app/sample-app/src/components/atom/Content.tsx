import { IonContent } from "@ionic/react";
import React from "react";

type Props = {
    children: React.ReactNode,
    scrollEvents?: boolean,
    onIonScrollStart?: any,
    onIonScroll?: any,
    onIonScrollEnd?: any

}
export const Content: React.FC<Props> = ({
    children,
    scrollEvents,
    onIonScrollStart,
    onIonScroll,
    onIonScrollEnd
} )=> (
    <IonContent
    scrollEvents={scrollEvents}
    onIonScrollStart={onIonScrollStart}
    onIonScroll={onIonScroll}
    onIonScrollEnd={onIonScrollEnd}
    >{children}</IonContent>
)