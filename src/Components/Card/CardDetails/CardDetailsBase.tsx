import { cn } from '@bem-react/classname';
import * as React from 'react';
import '../Card.scss'
import { CardData } from '../CardData/CardData'
import { ICardDetailsProps } from '../CardInterfaces';

const cnCard = cn('Card');

export const CardDetailsBase: React.SFC<ICardDetailsProps> = ({ description, size, data }) => (
    <React.Fragment>
        <p className={ cnCard("Description", { size }) }>
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
    </React.Fragment>
);