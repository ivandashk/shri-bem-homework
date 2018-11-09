import { cn } from '@bem-react/classname';
import { ModBody, withBemMod } from '@bem-react/core';
import * as React from 'react';
import '../Card.scss'
import { ICardData } from '../CardInterfaces';
import Measurement from './Measurement/Measurement';

const cnCard = cn('Card');

const CardDataTypeMeasurements:  ModBody<ICardData> = (Base, { temperature, humidity }) => (
    <div className={ cnCard("Measurements") }>
        <Measurement
            text="Температура:&nbsp;"
            value={ temperature + " C" }
        />
        <Measurement
            text="Влажность:&nbsp;"
            value={ humidity + "%" }
        />
    </div>
);

export const CardDataMeasurements = withBemMod<ICardData>("Card", { type: "measurements" }, CardDataTypeMeasurements)