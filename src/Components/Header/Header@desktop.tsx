import { cn } from '@bem-react/classname';
import * as React from 'react';
import { Nav } from '../Nav/Nav';
import { ILink } from '../Nav/NavInterfaces';
import './Header.scss';
import Items from './HeaderItems';
import logo from './Logo@1x.png';

const cnHeader = cn('Header');
const items: ILink[] = Items;

export const Header: React.SFC = () => (
    <header className={ cnHeader() }>
        <div className={ cnHeader("Logo") }>
            <img src={ logo } />
        </div>

        <Nav 
            items={ items }
            size="big"
            orientation="horizontal"
            className={ cnHeader("Nav") } 
        />
    </header>
);
