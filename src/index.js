import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';
import promise from 'redux-promise';
import Header from './components/shared/header';
import routes from './routes';
import reducers from './reducers';
import thunk from "redux-thunk";
import logger from "redux-logger";
import appstyles from './content/styles/application.css';

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
        {routes}
    </BrowserRouter>
  </Provider>
  , document.getElementById('content'));
