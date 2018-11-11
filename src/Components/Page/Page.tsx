import { cn } from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';
import * as React from 'react';
import Events from '../Events/Events';
import './Page.scss'

const cnPage = cn('Page');
const cnHeader = cn('Header');
const cnFooter = cn('Footer');

const Page: React.SFC = () => (
    <RegistryConsumer>
        {registries => {
            const registry = registries[cn("App")()];
            
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

export default Page;