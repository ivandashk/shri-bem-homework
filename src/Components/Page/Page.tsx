import { cn } from '@bem-react/classname';
import * as React from 'react';
import Events from '../Events/Events';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Page.scss'

const cnPage = cn('Page');

const Page: React.SFC = () => (
    <div className={ cnPage() }>
        <Header />
        <Events />
        <Footer />
    </div>
);

export default Page;