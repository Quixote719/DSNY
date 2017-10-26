import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';
// import routes from './routes';
import reducers from './reducers';
import thunk from "redux-thunk";
//import logger from "redux-logger";
import appstyles from './content/styles/application.css';
import ScrollToTop from './scrollToTop';

import Home from './components/home';
import About from './components/about';
import Location from './components/about/Location';
import Leadership from './components/about/Leadership';
import Bureaus from './components/about/Bureaus';
import StrategicPlan from './components/about/StrategicPlan';
import FullStrategicPlan from './components/about/StrategicPlan/FullStrategicPlan';
import ResourcesContainer from './components/Resources/Resources_container';
import PressReleaseDetail from './components/PressReleases/PressReleasedetail';
import PressReleaseList from './components/PressReleases/PressReleaseList'
import CardDetailContainer from './components/shared/CardDetails/card_details_container';
import DSNYEvents from './components/home/events/event_list_by_borough'
import EventDetail from './components/home/events/event_detail'
import DSNYNews from './components/home/news/news_list_by_month'
import NewsDetail from './components/home/news/news_detail'
import Header from './components/shared/header';
import Footer from './components/shared/footer/footer';
import NYCFooter from './components/shared/footer/NYCfooter';
import Howtogetridof from './components/home/howtogetridof';
import HowtogetridofDetailsItem from './components/home/howtogetridof/howToGetRidOf_detailsItem';
// import BureausDetails from './components/about/Bureaus/BureausDetails';
import LocationDetails from './components/about/Location/LocationDetails';
import CollectionSchedule from './components/home/CollectionSchedule';
import ViewOurFleet from './components/about/Operations/ViewOurFleet'

/*import PostsIndex from './components/posts_index';
/*import reducers from './reducers';
import PostsIndex from './components/posts_index';

import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';
*/

const middleware = applyMiddleware(promise, thunk);

ReactDOM.render(
  <Provider store={createStore(reducers, middleware)}>
  <BrowserRouter>
    <ScrollToTop>
      <div>
        <div id="headerContent" className="headerContent">
          <Header/>
          <div>
            <Switch>
              <Route exact path={process.env.REACT_APP_SITE_RELATIVE_URL + "/"} component={Home}/>
              <Route path={process.env.REACT_APP_SITE_RELATIVE_URL + "/home"} component={Home}/>
              <Route exact path={process.env.REACT_APP_SITE_RELATIVE_URL + "/about"} component={About}/>
              <Route exact path={process.env.REACT_APP_SITE_RELATIVE_URL + "/about/Location"} component={Location}/>
              <Route exact path={process.env.REACT_APP_SITE_RELATIVE_URL + "/about/Leadership"} component={Leadership}/>
              <Route exact path={process.env.REACT_APP_SITE_RELATIVE_URL + "/about/Bureaus"} component={Bureaus}/>
              <Route exact path={process.env.REACT_APP_SITE_RELATIVE_URL + "/about/StrategicPlan"} component={StrategicPlan}/>
              <Route exact path={process.env.REACT_APP_SITE_RELATIVE_URL + "/about/StrategicPlan/FullStrategicPlan"} component={FullStrategicPlan}/>
              <Route exact path={process.env.REACT_APP_SITE_RELATIVE_URL + "/about/bureaus/:slug"} component={CardDetailContainer}/>

              <Route path={process.env.REACT_APP_SITE_RELATIVE_URL + "/resources/press-releases"} component={PressReleaseList}/>
              <Route path={process.env.REACT_APP_SITE_RELATIVE_URL + "/pressRelease/:slug"} component={PressReleaseDetail}/>
              <Route path={process.env.REACT_APP_SITE_RELATIVE_URL + "/resources/reports/:slug"} component={CardDetailContainer}/>
              <Route path={process.env.REACT_APP_SITE_RELATIVE_URL + "/resources/laws/:slug"} component={CardDetailContainer}/>
              <Route path={process.env.REACT_APP_SITE_RELATIVE_URL + "/resources/proposed-rules/:slug"} component={CardDetailContainer}/>
              <Route path={process.env.REACT_APP_SITE_RELATIVE_URL + "/resources/:slug"} component={CardDetailContainer}/>
              <Route path={process.env.REACT_APP_SITE_RELATIVE_URL + "/resources"} component={ResourcesContainer}/>
              <Route path={process.env.REACT_APP_SITE_RELATIVE_URL + "/howtogetridof/:keyword"} component={Howtogetridof}/>
              <Route path={process.env.REACT_APP_SITE_RELATIVE_URL + "/how-to-get-rid-of/:itemName"} component={HowtogetridofDetailsItem}/>
              <Route path={process.env.REACT_APP_SITE_RELATIVE_URL + "/dsnyEvents"} component={DSNYEvents}/>
              <Route path={process.env.REACT_APP_SITE_RELATIVE_URL + "/howtogetridof"} component={Howtogetridof}/>
              <Route path={process.env.REACT_APP_SITE_RELATIVE_URL + "/eventDetail/:slug"} component={EventDetail}/>
              <Route exact path={process.env.REACT_APP_SITE_RELATIVE_URL + "/collectionSchedule"} component={CollectionSchedule}/>
              <Route path={process.env.REACT_APP_SITE_RELATIVE_URL + "/collectionSchedule/:address"} component={CollectionSchedule}/>
              <Route exact path={process.env.REACT_APP_SITE_RELATIVE_URL + "/about/Locations"} component={LocationDetails}/>
              <Route exact path={process.env.REACT_APP_SITE_RELATIVE_URL + "/about/fleet"} component={ViewOurFleet}/>
            </Switch>
          </div>
        </div>
        <div id="footer">
          <Footer/>
          <NYCFooter/>
        </div>
      </div>
    </ScrollToTop>
  </BrowserRouter>
</Provider>, document.getElementById('content'));
