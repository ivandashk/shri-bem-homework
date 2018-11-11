import { cn } from '@bem-react/classname';
import * as React from 'react';
import { Nav } from '../Nav/Nav';
import { ILink } from '../Nav/NavInterfaces';
import './Footer.scss';
import Items from './FooterItems';

const cnFooter = cn('Footer');
const items: ILink[] = Items;

export const Footer: React.SFC = () => (
    <div className={ cnFooter() }>

        <Nav 
            items={ items }
            size="small"
            orientation="horizontal"
        />

        <div className={ cnFooter("Copyright") }>
            © 2001–2017  ООО «Яндекс»
        </div>
    </div>
)