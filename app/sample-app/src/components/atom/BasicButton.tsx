import React  from 'react';

import {IonButton} from '@ionic/react';

type Props = {
    children: React.ReactNode,
    className?: string,
    color?: string,
    href?: string,
    expand?: any,
    shape?: any,
    fill?: any,
    size?: any
}
export const BasicButton: React.FC<Props> = ({
    children,
    className,
    color,
    href,
    expand,
    shape,
    fill,
    size
}) => (
    <IonButton
    className={className}
    color={color}
    href={href}
    expand={expand}
    shape={shape}
    fill={fill}
    size={size}>{children}</IonButton>
)