import * as React from 'react';
import '../Nav/Nav.scss'
import './Footer.scss'

class Footer extends React.Component {
  public render() {
    return (
        <div className="footer">
            <ul className="nav">
                <li className="nav__item_horizontal nav__item_small">Помощь</li>
                <li className="nav__item_horizontal nav__item_small">Обратная связь</li>
                <li className="nav__item_horizontal nav__item_small">Разработчикам</li>
                <li className="nav__item_horizontal nav__item_small">Условия</li>
                <a className="nav__item_horizontal nav__item_small" target="_blank" href="https://docviewer.yandex.ru/view/1130000031416146/?*=juU4ZSEq86M2avwXpXjv3%2BTk2NR7InVybCI6InlhLXdpa2k6Ly93aWtpLWFwaS55YW5kZXgucnUvc2hyaS0yMDE4LWlpL2hvbWV3b3JrL2FkYXB0aXZuYWphLXZqb3JzdGthL2xpY2Vuc2UucGRmIiwidGl0bGUiOiJsaWNlbnNlLnBkZiIsInVpZCI6IjExMzAwMDAwMzE0MTYxNDYiLCJ5dSI6Ijg2MTgyNTkxOTE1MTMxNjA2OTEiLCJub2lmcmFtZSI6ZmFsc2UsInRzIjoxNTM4ODU3ODg2MjI2fQ%3D%3D">Авторские права (Лицензия)</a>
            </ul>

            <div className="footer__copyright">
                © 2001–2017  ООО «Яндекс»
            </div>
        </div>
    );
  }
}

export default Footer;