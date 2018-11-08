import { cn } from '@bem-react/classname';
import * as React from 'react';
import '../Nav/Nav.scss'
import { ILink, INavPropsBase } from './NavInterfaces';
import NavItem from './NavItem';

const cnNav = cn('Nav');

interface INavProps extends INavPropsBase {
    items: ILink[];
    className?: string;
}

export const Nav: React.SFC<INavProps> = ({ items, className, size, orientation }) => (
    <ul className={ cnNav(null, [className]) }>
        {
            items.map((item) => { return(
                <NavItem 
                    key={ item.name }
                    item={ item }
                    size={ size }
                    orientation={ orientation }
                />)
            })
        }
    </ul>
);