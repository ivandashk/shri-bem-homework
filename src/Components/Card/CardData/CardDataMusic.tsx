import { cn } from '@bem-react/classname';
import { ModBody, withBemMod } from '@bem-react/core';
import * as React from 'react';
import Player from '../../Player/Player'
import '../Card.scss'
import { ICardData } from '../CardInterfaces';

const cnCard = cn('Card');

const CardDataTypeMusic:  ModBody<ICardData> = (Base, { albumcover, artist, track, volume }) => (
    <Player className={ cnCard("LastElement") } albumcover={ albumcover } artist={ artist } track={ track } volume={ volume } />
);

export const CardDataMusic = withBemMod<ICardData>("Card", { type: "music" }, CardDataTypeMusic)