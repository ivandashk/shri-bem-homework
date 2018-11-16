import { cn } from '@bem-react/classname';
import { ModBody, withBemMod } from '@bem-react/core';
import * as React from 'react';
import '../Card.scss'
import { CardData } from '../CardData/CardData'
import { ICardDetailsProps } from '../CardInterfaces';

const cnCard = cn('Card');
const cnDescription = cn('Description');

const CardDetailsTypeCritical:  ModBody<ICardDetailsProps> = (Base, { description, size, data }) => (
    <div className={ cnCard("Details") }>
        <p className={ cnDescription({ size }) }>
            { description }
        </p>

        {
            !!data 
            ? <CardData 
                type={ data.type }
                values={ data.values }
                temperature={ data.temperature }
                humidity={ data.humidity }
                albumcover={ data.albumcover }
                artist={ data.artist }
                track={ data.track }
                volume={ data.volume }
                buttons={ data.buttons }
                image={ data.image }
                alt={ data.alt }
            />
            : undefined
        }
    </div>
);

export const CardDetailsCritical = withBemMod<ICardDetailsProps>("Card", { type: "critical"}, CardDetailsTypeCritical)