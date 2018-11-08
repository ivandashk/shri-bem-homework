import { cn } from '@bem-react/classname';
import * as React from 'react';
import '../Nav/Nav.scss';
import { ILink, INavPropsBase } from './NavInterfaces';

const cnNav = cn('Nav');

interface INavItemProps extends INavPropsBase {
    item: ILink;
}

export const NavItem: React.SFC<INavItemProps> = ({ item, size, orientation }) => (
    <a className={ cnNav('Item', { size, orientation }) } href={ item.href }>{ item.name }</a>
);

export default NavItem;