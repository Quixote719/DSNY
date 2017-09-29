import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import ResourcesContainer from './components/Resources/Resources_container';
import PressReleaseDetail from './components/PressReleases/PressReleasedetail';
import Header from './components/shared/header';
import Footer from './components/shared/footer/footer';
import NYCFooter from './components/shared/footer/NYCfooter';

const routes = (
  <div>
    <Router>
      <div id="headerContent" className="headerContent">
        <Header/>

        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/home" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/pressRelease/:slug" component={PressReleaseDetail}/>
            <Route path="/resources" component={ResourcesContainer}/>
          </Switch>
        </div>

      </div>
      <div id="footer">
        <Footer/>
        <NYCFooter/>
      </div>
    </Router>
  </div>
)
export default routes;
