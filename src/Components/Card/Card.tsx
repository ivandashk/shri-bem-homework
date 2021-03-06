import { cn } from '@bem-react/classname';
import * as React from 'react';
import './Card.scss'
import { CardDetails } from './CardDetails/CardDetails';
import { ICardProps } from './CardInterfaces';

import crossWhite from './images/cross-white.svg'
import cross from './images/cross.svg'

const cnCard = cn('Card');

const Card: React.SFC<ICardProps> = ({ type, icon, title, source, time, size, description, data, hasImage }) => (
    <div className={ cnCard({ size, type, hasImage }) }>
        <div className={ cnCard("Row") }>
            <div className={ cnCard("Image", { type: "icon", picture: icon })} />
            <div className={ cnCard("Title") }>{ title }</div>
            <img className={ cnCard("Close") } src={ type === "critical" ? crossWhite : cross }/>
        </div>

        <div className={ type === "critical" ? cnCard("BasicInfo", { withBottomMargin: true }) : cnCard("BasicInfo", { size }) }>
            <div>{ source }</div>
            <div>{ time }</div>
        </div>

        {
            !!description || !!data 
            ? <CardDetails
                type={ type }
                size={ size }
                description={ description }
                data={ data }
            /> 
            : undefined
        }
    </div>
);

export default Card;