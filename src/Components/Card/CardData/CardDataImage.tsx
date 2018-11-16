import { cn } from '@bem-react/classname';
import { ModBody, withBemMod } from '@bem-react/core';
import * as React from 'react';
import '../Card.scss'
import { ICardData } from '../CardInterfaces';

const cnCard = cn('Card');

const CardDataTypeImage:  ModBody<ICardData> = (Base, { image, alt }) => (
    <div className={ cnCard("ImageContainer", [cnCard("LastElement")]) }>
        <img className={ cnCard("Image", { type: "attachement"}) } src={ image } alt={ alt }/>
    </div>
);

export const CardDataImage = withBemMod<ICardData>("Card", { type: "image" }, CardDataTypeImage)