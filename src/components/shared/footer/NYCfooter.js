import React, { Component } from 'react';
import { Router, Route, browserHistory, Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import '../../../content/styles/footer.css';

// Test
class NYCFooter extends Component{

    render (){
        return (
            <div id="NYCFooter">
              <div className="FooterBox">
                  <div className="NYCfooter-links">
                    <a href="http://www1.nyc.gov/nyc-resources/agencies.page">Directory of City Agencies </a>
                    <a href="http://www1.nyc.gov/home/contact-us.page">Contact NYC Government </a>
                    <a href="https://a127-ess.nyc.gov/psp/prdess/?cmd=login">City Employees </a>
                    <a href="https://a858-nycnotify.nyc.gov/notifynyc/">Notify NYC </a>
                    <a href="http://a856-citystore.nyc.gov/">CityStore </a>
                    <a href="http://www1.nyc.gov/connect/social-media.page">Stay Connected </a>
                    <a href="http://www1.nyc.gov/connect/mobile-applications.page">NYC Mobile Apps </a>
                    <a href="http://www1.nyc.gov/nyc-resources/nyc-maps.page">Maps </a>
                    <a href="http://www1.nyc.gov/nyc-resources/resident-toolkit.page">Resident Toolkit </a>
                  </div>
                    <div className="SearchBlock">
                      <img src={require('../../../content/images/nyc_white.png')} id="NYCFooterLogo" alt="NYC Footer Logo"/>
                      <div className="copyright">
                        <p>City of New York. 2016 All Rights Reserved,</p>
                        <p>NYC is a trademark and service mark of the City of New York</p>
                        <p><a target="_blank" href="/home/privacy-policy.page" title="Privicy">Privacy Policy</a>. <a target="_blank" href="/home/terms-of-use.page" title="TOU">Terms of Use</a>.</p>
                      </div>
                    </div>
              </div>
            </div>
        );
    }
};


export default NYCFooter;
