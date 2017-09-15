import React from 'react';
import { Route } from 'react-router-dom';
// import GiveFind from './components/giveFind';
import Home from './components/home';
import Header from './components/shared/header';
import Footer from './components/shared/footer';

const routes = (
    <div>
        <div id="headerContent" className="headerContent">
            <Header />
            <Route exact path={"/" + window.staticUrl} component={Home} />
            <Route exact path={"/" + window.staticUrl + "/home"} component={Home} />
        </div>
        <div id="footer">
            <Footer />
        </div>

    </div>
)
export default routes;
