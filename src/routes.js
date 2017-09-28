import React from 'react';
import {Route} from 'react-router-dom';
// import GiveFind from './components/giveFind';
import Home from './components/home';
import About from './components/about';
import ResourcesContainer from './components/Resources/Resources_container';
import Header from './components/shared/header';
import Footer from './components/shared/footer/footer';
import NYCFooter from './components/shared/footer/NYCfooter';

const routes = (
  <div>
    <div id="headerContent" className="headerContent">
      <Header/>
      <Route exact path="/" component={Home}/>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/resources" component={ResourcesContainer}/> {/*<Route exact path={"/" + window.staticUrl} component={Home} />
            <Route exact path={"/" + window.staticUrl + "/home"} component={Home} />*/}
    </div>
    <div id="footer">
      <Footer/>
      <NYCFooter/>
    </div>

  </div>
)
export default routes;
