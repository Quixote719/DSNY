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
      const Service = [{name:'Collection',link:'Cpage'},{name:'Cleaning',link:'CL'},{name:'Snow',link:'Spage'}];
      const App = [{name:'DSNY Info',link:'https://www.google.com/',AppStore:'https://itunes.apple.com/us/app/dsny-info/id1139303678?mt=8',GooglePlay:'https://play.google.com/store/apps/details?id=gov.nyc.dsny.dsny&hl=en'},
      {name:'donateNYC',link:'https://www.google.com/',AppStore:'https://itunes.apple.com/us/app/donatenyc/id1112567037?mt=8',GooglePlay:'https://play.google.com/store/apps/details?id=gov.nyc.dsny.donate&hl=en'},
      {name:'Zero Waste School',link:'https://medium.com/',AppStore:'',GooglePlay:''}];
      const Archive = [{name:'Newsletters',link:'l1'},
                       {name:'Memoranda of Understanding',link:'l2'},
                       {name:'Language Access Plan',link:'l3'},
                       {name:'Recycling Diversion Goals',link:'l4'},
                       {name:'Waste Characterization',link:'l5'},
                       {name:'Processing + Statistics',link:'l6'},
                       {name:'Private Carting Study',link:'l7'}]
        if(window.location.pathname === "/assets/donate/development/react/home" || window.location.pathname.indexOf("collectionSchedule") > -1){
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
                        <div className="FooterBtn">SUBSCRIBE</div>
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
                            <div className="FooterBtn">SUBSCRIBE</div>
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
