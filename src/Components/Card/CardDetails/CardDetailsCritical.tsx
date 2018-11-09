import { cn } from '@bem-react/classname';
import { ModBody, withBemMod } from '@bem-react/core';
import * as React from 'react';
import '../Card.scss'
import { ICardDetailsProps } from '../CardInterfaces';

const cnCard = cn('Card');
const cnDescription = cn('Description');

const CardDetailsTypeCritical:  ModBody<ICardDetailsProps> = (Base, { description, size }) => (
    <div className={ cnCard("Details") }>
        <div className={ cnDescription({ size }) }>
            { description }
        </div>
    </div>
);

export const CardDetailsCritical = withBemMod<ICardDetailsProps>("Card", { type: "critical"}, CardDetailsTypeCritical)