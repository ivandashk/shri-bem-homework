import * as React from 'react';
import '../Nav/Nav.scss'
import './Header.scss'
import logo from './Logo@1x.png'

class Header extends React.Component {
  public render() {
    return (
        <div className="header">
            <div className="header__logo">
                <img src={ logo } />
            </div>

            <ul className="nav header__nav">
                <li className="nav__item nav__item_horizontal nav__item_big">События</li>
                <li className="nav__item nav__item_horizontal nav__item_big">Видеонаблюдение</li>
                <li className="nav__item nav__item_horizontal nav__item_big">Сводка</li>
                <li className="nav__item nav__item_horizontal nav__item_big">Устройства</li>
                <li className="nav__item nav__item_horizontal nav__item_big">Сценарии</li>
            </ul>

            <button className="header__expander" />
        </div>
    );
  }
}

export default Header;
