import * as React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Page.scss'

class Page extends React.Component {
  public render() {
    return (
        <div className="main-page">
            <Header />
            <div />
            <Footer />
        </div>
    );
  }
}

export default Page;