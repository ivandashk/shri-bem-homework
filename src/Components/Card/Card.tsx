import { cn } from '@bem-react/classname';
import * as React from 'react';
import './Card.scss'
import { CardDetails } from './CardDetails/CardDetails';
import { ICardProps } from './CardInterfaces';

import crossWhite from './images/cross-white.svg'
import cross from './images/cross.svg'

const cnCard = cn('Card');

const Card: React.SFC<ICardProps> = ({ type, icon, title, source, time, size, description, data, hasImage }) => (
    <article className={ cnCard({ size, type, hasImage }) }>
        <div className={ cnCard("Row") }>
            <div className={ cnCard("Image", { type: "icon", picture: icon })} />
            <h2 className={ cnCard("Title") }>{ title }</h2>
            <img className={ cnCard("Close") } src={ type === "critical" ? crossWhite : cross }/>
        </div>

        <div className={ type === "critical" ? cnCard("BasicInfo", { mb: 20 }) : cnCard("BasicInfo", { size }) }>
            <div>{ source }</div>
            <time>{ time }</time>
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
    </article>
);

export default Card;