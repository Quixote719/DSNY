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
import Services from './components/services'
import Contact from './components/ContactPage';
import Complaints from './components/ContactPage/Complaints';
import Location from './components/about/Location';
import Leadership from './components/about/Leadership';
import Bureaus from './components/about/Bureaus';
import StrategicPlan from './components/about/StrategicPlan';
import Biography from './components/about/Leadership/biography';
import FullStrategicPlan from './components/about/StrategicPlan/FullStrategicPlan';
import ResourcesContainer from './components/Resources/Resources_container';
import PressReleaseDetail from './components/PressReleases/PressReleasedetail';
import PressReleaseList from './components/PressReleases/PressReleaseList'
import StandardPage from './components/shared/CardDetails/card_details_container';
import WebformPage from './components/shared/form_details_container';

import DSNYEvents from './components/home/events/event_list_by_borough'
import EventDetail from './components/home/events/event_detail'
import DSNYNews from './components/home/news/news_list_by_month'
import NewsDetails from './components/home/news/news_details_page'
import Header from './components/shared/header';
import Footer from './components/shared/footer/footer';
import NYCFooter from './components/shared/footer/NYCfooter';
import Howtogetridof from './components/home/howtogetridof';

import SiteSearch from './components/home/Site_Search';

import HowtogetridofDetailsItem from './components/home/howtogetridof/howToGetRidOf_detailsItem';
// import BureausDetails from './components/about/Bureaus/BureausDetails';
import LocationDetails from './components/about/Location/LocationDetails';
import CollectionSchedule from './components/home/CollectionSchedule';
import ViewOurFleet from './components/about/Operations/ViewOurFleet'
import fullImageContainer from './components/shared/PageSection/full_img_container';

import TestForm from './components/contact/index';
import CompostRequest from './components/contact/compostRequest';
import SiteVisitRequestForm from './components/contact/siteVisitRequest'
import eventParticipationRequestForm from './components/contact/eventParticipationRequest';
import MasterComposerCertificateCourseForm from './components/contact/masterComposterCertificateCourse';
import adoptABasketForm from './components/contact/adoptABasket';


// import OrganicsForm from './components/contact/organicsIndex';

import OrganicsForm from './components/contact/commercialOrganics';
import RecyclableMaterialTheft from './components/contact/recyclableMaterialTheft';
import FailureStoreReceptacles from './components/contact/failureStoreReceptacles';
import CollectionBinReport from './components/contact/collectionBinReport';
import eeoComplaintForm from './components/contact/employmentOpportunityComplaint';
import EwasteRequestForm from './components/contact/eWastePickupRequest'
import CFCRequestForm from './components/contact/CFCrecoveryAppointmentRequest'
import CRFLRequestForm from './components/contact/CRforLargeItems'
import OrganicsCollectionApplication from './components/contact/organicsCollectionApplication'


/* import PostsIndex from './components/posts_index';
/*import reducers from './reducers';
import PostsIndex from './components/posts_index';

import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show'; */

const middleware = applyMiddleware(promise, thunk);

ReactDOM.render(<Provider store={createStore(reducers, middleware)}>
  <BrowserRouter>
    <ScrollToTop>
      <div>

        <div id="headerContent" className="headerContent">
        <Header />
          <div>
            <Switch>
              <Route exact path={process.env.REACT_APP_SITE_RELATIVE_URL + "/"} component={Home} />
              <Route path={process.env.REACT_APP_SITE_RELATIVE_URL + "/home"} component={Home}/>

              <Route path={process.env.REACT_APP_SITE_RELATIVE_URL + "/dsnynews"} component={DSNYNews}/>
              {<Route path={process.env.REACT_APP_SITE_RELATIVE_URL + "/news/:slug"} component={NewsDetails}/>}
              <Route exact path={process.env.REACT_APP_SITE_RELATIVE_URL + "/about"} component={About}/>
              <Route exact path={process.env.REACT_APP_SITE_RELATIVE_URL + "/about/Location"} component={Location}/>
              <Route exact path={process.env.REACT_APP_SITE_RELATIVE_URL + "/about/Leadership"} component={Leadership}/>
              <Route exact path={process.env.REACT_APP_SITE_RELATIVE_URL + "/about/Bureaus"} component={Bureaus}/>
              <Route exac path={process.env.REACT_APP_SITE_RELATIVE_URL + "/about/strategic-plan"} component={StrategicPlan}/>
              <Route exact path={process.env.REACT_APP_SITE_RELATIVE_URL + "/about/Locations"} component={LocationDetails}/>
              <Route exact path={process.env.REACT_APP_SITE_RELATIVE_URL + "/about/fleet"} component={ViewOurFleet}/>

              <Route exact path={process.env.REACT_APP_SITE_RELATIVE_URL + "/about"} component={About}/>
              <Route exact path={process.env.REACT_APP_SITE_RELATIVE_URL + "/about/Location"} component={Location}/>
              <Route exact path={process.env.REACT_APP_SITE_RELATIVE_URL + "/about/Leadership"} component={Leadership}/>
              <Route exact path={process.env.REACT_APP_SITE_RELATIVE_URL + "/about/Bureaus"} component={Bureaus}/>
              <Route exact path={process.env.REACT_APP_SITE_RELATIVE_URL + "/about/strategic-plan"} component={StrategicPlan}/>
              <Route exact path={process.env.REACT_APP_SITE_RELATIVE_URL + "/about/Locations"} component={LocationDetails}/>
              <Route exact path={process.env.REACT_APP_SITE_RELATIVE_URL + "/about/fleet"} component={ViewOurFleet}/>

              <Route path={process.env.REACT_APP_SITE_RELATIVE_URL + "/about/about-commissioner"} component={Biography}/>
              <Route path={process.env.REACT_APP_SITE_RELATIVE_URL + "/about/bureaus/:slug"} component={StandardPage}/>
              <Route path={process.env.REACT_APP_SITE_RELATIVE_URL + "/about/strategic-plan/:slug"} component={StandardPage}/>
              <Route path={process.env.REACT_APP_SITE_RELATIVE_URL + "/about/:slug"} component={StandardPage}/>
              <Route exact path={process.env.REACT_APP_SITE_RELATIVE_URL + "/services"} component={Services}/>
              <Route path={process.env.REACT_APP_SITE_RELATIVE_URL + "/services/cleaning/:slug"} component={StandardPage}/>
              <Route path={process.env.REACT_APP_SITE_RELATIVE_URL + "/services/:slug"} component={StandardPage}/>

              <Route exact path={process.env.REACT_APP_SITE_RELATIVE_URL + "/contact"} component={Contact}/>
              <Route exact path={process.env.REACT_APP_SITE_RELATIVE_URL + "/resources/press-releases"} component={PressReleaseList}/>
              <Route path={process.env.REACT_APP_SITE_RELATIVE_URL + "/resources/press-releases/:slug"} component={PressReleaseDetail}/>
              <Route path={process.env.REACT_APP_SITE_RELATIVE_URL + "/resources/reports/:slug"} component={StandardPage}/>
              <Route path={process.env.REACT_APP_SITE_RELATIVE_URL + "/resources/statistics/:slug"} component={StandardPage}/>
              <Route path={process.env.REACT_APP_SITE_RELATIVE_URL + "/resources/laws/recycling-and-garbage-laws/:slug"} component={StandardPage}/>
              <Route path={process.env.REACT_APP_SITE_RELATIVE_URL + "/resources/laws/streets-and-sidewalks-laws/:slug"} component={StandardPage}/>
              <Route path={process.env.REACT_APP_SITE_RELATIVE_URL + "/resources/laws/proposed-rules/:slug"} component={StandardPage}/>
              <Route path={process.env.REACT_APP_SITE_RELATIVE_URL + "/resources/laws/:slug"} component={StandardPage}/>
              <Route path={process.env.REACT_APP_SITE_RELATIVE_URL + "/resources/educational-materials/:slug"} component={StandardPage}/>
              <Route path={process.env.REACT_APP_SITE_RELATIVE_URL + "/resources/:slug"} component={StandardPage}/>
              <Route path={process.env.REACT_APP_SITE_RELATIVE_URL + "/resources"} component={ResourcesContainer}/>
              <Route exact path={process.env.REACT_APP_SITE_RELATIVE_URL + "/howtogetridof"} component={Howtogetridof}/>
              <Route path={process.env.REACT_APP_SITE_RELATIVE_URL + "/howtogetridof/:keyword"} component={Howtogetridof}/>
              <Route path={process.env.REACT_APP_SITE_RELATIVE_URL + "/how-to-get-rid-of/:itemName"} component={HowtogetridofDetailsItem}/>
              <Route exact path={process.env.REACT_APP_SITE_RELATIVE_URL + "/collectionSchedule"} component={CollectionSchedule}/>
              <Route path={process.env.REACT_APP_SITE_RELATIVE_URL + "/collectionSchedule/:address"} component={CollectionSchedule}/>
              <Route path={process.env.REACT_APP_SITE_RELATIVE_URL + "/site-search/:keyword"} component={SiteSearch}/>
              <Route path={process.env.REACT_APP_SITE_RELATIVE_URL + "/site-search"} component={SiteSearch}/>
              <Route path={process.env.REACT_APP_SITE_RELATIVE_URL + "/dsnyEvents"} component={DSNYEvents}/>
              <Route path={process.env.REACT_APP_SITE_RELATIVE_URL + "/eventDetail/:slug"} component={EventDetail}/>
              <Route exact path={process.env.REACT_APP_SITE_RELATIVE_URL + "/contact/complaints"} component={Complaints}/>
              <Route exact path={process.env.REACT_APP_SITE_RELATIVE_URL + "/contact/collectionBinReport"} component={CollectionBinReport}/>
              <Route exact path={process.env.REACT_APP_SITE_RELATIVE_URL + "/contact/eeocomplaints"} component={eeoComplaintForm} />
              <Route exact path={process.env.REACT_APP_SITE_RELATIVE_URL + "/contact/organicsCollectionApplication"} component={OrganicsCollectionApplication} />

              {/*<Route exact path={process.env.REACT_APP_SITE_RELATIVE_URL + "/contact/testform"} component={TestForm}/>*/}
              {/* <Route exact path={process.env.REACT_APP_SITE_RELATIVE_URL + "/contact/adoptedbaskets"} component={adoptABasketForm} /> */}
              {/* <Route exact path={process.env.REACT_APP_SITE_RELATIVE_URL + "/contact/compostRequest"} component={CompostRequest}/> */}
              {/* <Route exact path={process.env.REACT_APP_SITE_RELATIVE_URL + "/contact/site-visit-request"} component={SiteVisitRequestForm}/> */}
              {/* <Route exact path={process.env.REACT_APP_SITE_RELATIVE_URL + "/contact/eventParticipationRequests"} component={eventParticipationRequestForm} /> */}
              {/* <Route exact path={process.env.REACT_APP_SITE_RELATIVE_URL + "/contact/mastercompostercourse/"} component={MasterComposerCertificateCourseForm} /> */}
              {/* <Route exact path={process.env.REACT_APP_SITE_RELATIVE_URL + "/contact/commercialOrganics"} component={OrganicsForm}/> */}
              {/* <Route exact path={process.env.REACT_APP_SITE_RELATIVE_URL + "/contact/recyclableMaterialTheft"} component={RecyclableMaterialTheft}/> */}
              {/* <Route exact path={process.env.REACT_APP_SITE_RELATIVE_URL + "/contact/failureStoreReceptacles"} component={FailureStoreReceptacles}/> */}

              <Route path={process.env.REACT_APP_SITE_RELATIVE_URL + "/contact/complaints/:slug"} component={WebformPage}/>
              <Route path={process.env.REACT_APP_SITE_RELATIVE_URL + "/contact/get-involved/:slug"} component={WebformPage}/>
              <Route path={process.env.REACT_APP_SITE_RELATIVE_URL + "/contact/:slug"} component={WebformPage}/>
              <Route exact path={process.env.REACT_APP_SITE_RELATIVE_URL + "/:slug" } component = {fullImageContainer} />
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
