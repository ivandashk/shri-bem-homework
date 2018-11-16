import { cn } from '@bem-react/classname';
import * as React from 'react';
import './Header.scss';
import logo from './Logo@1x.png';

const cnHeader = cn('Header');

export const Header: React.SFC = () => (
    <header className={ cnHeader() }>
        <div className={ cnHeader("Logo") }>
            <img src={ logo } />
        </div>

        <button className={ cnHeader("Expander") }/>
    </header>
);
