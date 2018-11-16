import { cn } from '@bem-react/classname';
import * as React from 'react';
import { ICardData } from '../Card/CardInterfaces';
import './Player.scss';

const cnPlayer = cn("Player");

const Player: React.SFC<ICardData> = ({ className, albumcover, artist, track, volume }) => (
    <div className={ cnPlayer(null, [className]) }>
        <img className={ cnPlayer("Logo") } src={ albumcover }/>
        <div className={ cnPlayer("Name") }>{ !!track ? `${artist} - ${track.name}` : "" }</div>
        <input className={ cnPlayer("Time") } type="range" aria-label="time" id="time" name="time" min="0" max="100" step="1" />
        <div className={ cnPlayer("Value", {type: "time"}) }>{ !!track ? track.length : "" }</div>
        <div className={ cnPlayer("Button", {type: "prev"}) } />
        <div className={ cnPlayer("Button", {type: "next"}) } />
        <input className={ cnPlayer("Volume") } type="range" aria-label="volume" id="volume" name="time" min="0" max="100" step="1" />
        <div className={ cnPlayer("Value", {type: "volume"}) }>{ volume }%</div>
    </div>
);

export default Player;
