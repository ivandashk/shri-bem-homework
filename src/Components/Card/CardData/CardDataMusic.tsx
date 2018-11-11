import { ModBody, withBemMod } from '@bem-react/core';
import * as React from 'react';
import Player from '../../Player/Player'
import '../Card.scss'
import { ICardData } from '../CardInterfaces';

const CardDataTypeMusic:  ModBody<ICardData> = (Base, { albumcover, artist, track, volume }) => (
    <Player albumcover={ albumcover } artist={ artist } track={ track } volume={ volume } />
);

export const CardDataMusic = withBemMod<ICardData>("Card", { type: "music" }, CardDataTypeMusic)