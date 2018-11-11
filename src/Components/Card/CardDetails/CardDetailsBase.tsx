import { cn } from '@bem-react/classname';
import * as React from 'react';
import '../Card.scss'
import { CardData } from '../CardData/CardData'
import { ICardDetailsProps } from '../CardInterfaces';

const cnCard = cn('Card');

export const CardDetailsBase: React.SFC<ICardDetailsProps> = ({ description, size, data }) => (
    <React.Fragment>
        <div className={ cnCard("Description", { size }) }>
            { description }
        </div>

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
            />
            : undefined
        }
    </React.Fragment>
);