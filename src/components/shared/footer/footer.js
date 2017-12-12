import React, { Component } from 'react';
import { Router, Route, browserHistory, Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import FooterService from './FooterService.js';
import FooterApp from './FooterApp.js';
import FooterArchive from './FooterArchive.js';
import '../../../content/styles/footer.css';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';
import DownloadApp from '../../home/download_dsny_app/index';

class Footer extends Component{

    render() {
      const Service = [{name:'Collection',link: process.env.REACT_APP_SITE_RELATIVE_URL +'/services'},{name:'Cleaning',link:process.env.REACT_APP_SITE_RELATIVE_URL + '/services/cleaning'},{name:'Snow',link:process.env.REACT_APP_SITE_RELATIVE_URL +'/services/snow-response'}];
      const App = [{name:'DSNY Info',AppStore:'https://itunes.apple.com/us/app/dsny-info/id1139303678?mt=8',GooglePlay:'https://play.google.com/store/apps/details?id=gov.nyc.dsny.dsny&hl=en'},
      {name:'donateNYC',AppStore:'https://itunes.apple.com/us/app/donatenyc/id1112567037?mt=8',GooglePlay:'https://play.google.com/store/apps/details?id=gov.nyc.dsny.donate&hl=en'}];
      const Archive = [{name:'Press Releases',link: process.env.REACT_APP_SITE_RELATIVE_URL + '/resources/press-releases'},
                       {name:'Newsletters',link: process.env.REACT_APP_SITE_RELATIVE_URL + '/dsnynews'},
                       {name:'Employment Opportunities',link: process.env.REACT_APP_SITE_RELATIVE_URL + '/employment-opportunities'},
                       {name:'Waste Characterization',link: process.env.REACT_APP_SITE_RELATIVE_URL + '/resources/reports/waste-characterization'},
                       {name:'Recycling Diversion Goals',link: process.env.REACT_APP_SITE_RELATIVE_URL + '/recycling-diversion-goals'}, 
                       {name:'Memoranda of Understanding',link: process.env.REACT_APP_SITE_RELATIVE_URL + '/memoranda-of-understanding'},                                              
                       {name:'Language Access Plan',link: process.env.REACT_APP_SITE_RELATIVE_URL + '/language-access-plan'}]
        if(window.location.pathname === process.env.REACT_APP_SITE_RELATIVE_URL || window.location.pathname.indexOf("collectionSchedule") > -1){
            return (
                <div>
                <DownloadApp />
                <div id="Footer">
                  <div className="FooterBox">
                    <div id="ServiceCol" className="FooterCol">
                        <FooterService rows= {Service}/>
                        <FooterApp rows={App}/>
                    </div>
                    <div id="ArchiveCol" className="FooterCol">
                        <FooterArchive rows={Archive}/>
                    </div>
                    <div id="SignupCol" className="FooterCol">
                        <div className="FooterSubt">Sign up for Zero Waste Newsletter to learn about upcoming DSNY events.</div>
                        <div className="FooterBtn" onClick={()=>{window.location.href="https://www.nyc.gov/portal/site/nycgov/menuitem.4f0ec5b97cc1a980e1aee9ed76a09da0/"}}>SUBSCRIBE</div>
                        <div className="FooterSubt">Follow Us</div>
                          <i className="fa fa-facebook" onClick={()=>{window.location.href="https://www.facebook.com/nycsanitation"}}></i>
                          <i className="fa fa-twitter" onClick={()=>{window.location.href="https://twitter.com/nycsanitation"}}></i>
                          <i className="fa fa-instagram" onClick={()=>{window.location.href="http://instagram.com/nycsanitation"}}></i>
                          <i className="fa fa-youtube" onClick={()=>{window.location.href="https://www.youtube.com/user/NYCSanitation/feed"}}></i>
                          <i className="fa fa-flickr" onClick={()=>{window.location.href="https://www.flickr.com/photos/nycsanitation/sets/"}}></i>
                    </div>
                 </div>
              </div>
              </div>
              );
        }
        else{
            return(
                    <div id="Footer">
                      <div className="FooterBox">
                        <div id="ServiceCol" className="FooterCol">
                            <FooterService rows= {Service}/>
                            <FooterApp rows={App}/>
                        </div>
                        <div id="ArchiveCol" className="FooterCol">
                            <FooterArchive rows={Archive}/>
                        </div>
                        <div id="SignupCol" className="FooterCol">
                            <div className="FooterSubt">Sign up for Zero Waste Newsletter to learn about upcoming DSNY events.</div>
                            <div className="FooterBtn" onClick={()=>{window.location.href="https://www.nyc.gov/portal/site/nycgov/menuitem.4f0ec5b97cc1a980e1aee9ed76a09da0/"}}>SUBSCRIBE</div>
                            <div className="FooterSubt">Follow Us</div>
                              <i className="fa fa-facebook" onClick={()=>{window.location.href="https://www.facebook.com/nycsanitation"}}></i>
                              <i className="fa fa-twitter" onClick={()=>{window.location.href="https://twitter.com/nycsanitation"}}></i>
                              <i className="fa fa-instagram" onClick={()=>{window.location.href="http://instagram.com/nycsanitation"}}></i>
                              <i className="fa fa-youtube" onClick={()=>{window.location.href="https://www.youtube.com/user/NYCSanitation/feed"}}></i>
                              <i className="fa fa-flickr" onClick={()=>{window.location.href="https://www.flickr.com/photos/nycsanitation/sets/"}}></i>
                        </div>
                     </div>
                  </div>
            );
        }

    }
};


export default Footer;
