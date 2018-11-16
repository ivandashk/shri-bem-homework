import { cn } from '@bem-react/classname';
import * as React from 'react';
import '../Nav/Nav.scss';
import { ILink, INavPropsBase } from './NavInterfaces';

const cnNav = cn('Nav');

interface INavItemProps extends INavPropsBase {
    item: ILink;
}

export const NavItem: React.SFC<INavItemProps> = ({ item, size, orientation }) => (
    <li className={ cnNav('Item', { size, orientation }) }>
        <a className={ cnNav('Link') } href={ item.href }>{ item.name }</a>
    </li>
);

export default NavItem;