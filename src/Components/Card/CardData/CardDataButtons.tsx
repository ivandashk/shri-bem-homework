import { cn } from '@bem-react/classname';
import { ModBody, withBemMod } from '@bem-react/core';
import * as React from 'react';
import Button from '../../Button/Button'
import '../Card.scss'
import { ICardData } from '../CardInterfaces';

const cnCard = cn('Card');

const CardDataTypeButtons:  ModBody<ICardData> = (Base, { buttons }) => (
    <div className={ cnCard("Row") }>
        {
            !!buttons 
            ? <React.Fragment>
                <Button key={ buttons[0] } text={ buttons[0] } accent={ true }/>
                <Button key={ buttons[1] } text={ buttons[1] } accent={ false }/>
            </React.Fragment>
            : undefined
        }
    </div>
);

export const CardDataButtons = withBemMod<ICardData>("Card", { type: "buttons" }, CardDataTypeButtons)