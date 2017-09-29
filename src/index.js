import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route, Switch, HashRouter} from 'react-router-dom';
import promise from 'redux-promise';
import routes from './routes';
import reducers from './reducers';
import thunk from "redux-thunk";
import logger from "redux-logger";
import appstyles from './content/styles/application.css';

import Home from './components/home';
import About from './components/about';
import ResourcesContainer from './components/Resources/Resources_container';
import PressReleaseDetail from './components/PressReleases/PressReleasedetail';
import Header from './components/shared/header';
import Footer from './components/shared/footer/footer';
import NYCFooter from './components/shared/footer/NYCfooter';

/*import PostsIndex from './components/posts_index';
/*import reducers from './reducers';
import PostsIndex from './components/posts_index';

import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';
*/

const middleware = applyMiddleware(promise, thunk, logger);

ReactDOM.render(
  <Provider store={createStore(reducers, middleware)}>
  <BrowserRouter>
    <div>
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
    </div>
  </BrowserRouter>
</Provider>, document.getElementById('content'));
