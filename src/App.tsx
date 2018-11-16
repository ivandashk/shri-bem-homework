import { cn } from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';
import * as React from 'react';
import './App.scss';
import Events from './Components/Events/Events';

const cnApp = cn('App');
const cnPage = cn('Page');
const cnHeader = cn('Header');
const cnFooter = cn('Footer');

export const App: React.SFC = () => (
  <RegistryConsumer>
        {registries => {
            const registry = registries[cnApp()];
            
            const Header = registry.get(cnHeader());
            const Footer = registry.get(cnFooter());

            return(
            <div className={ cnPage() }>
                <Header />
                <Events />
                <Footer />
            </div>
            );
        }}
    </RegistryConsumer>
);

export default App;