import { cn } from '@bem-react/classname';
import * as React from 'react';
import '../Card.scss'
import { ICardDetailsProps } from '../CardInterfaces';

const cnCard = cn('Card');

export const CardDetailsBase: React.SFC<ICardDetailsProps> = ({ description, size }) => (
    <div className={ cnCard("Description", { size }) }>
        { description }
    </div>
);