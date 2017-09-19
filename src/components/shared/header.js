import React, { Component } from 'react';
import styles from '../../content/styles/header.css';
import { Tab, Tabs } from 'react-bootstrap';

// Test
var imageTabs = <img src={require('../../content/images/nav-sprite.png')} />

var Header = React.createClass({

    render: function () {

        return (
            // style={window.location.href == "http://localhost:3000/#/SearchDirectory"? {display: 'none'}:{display: 'block'}}
            <div className="upperHeader">
                <div className="container upperHeaderContainer">
                    <img src={require('../../content/images/nyc_white.png')} className="NYCUpperHeaderLogo" />
                    <img src={require('../../content/images/upper-header-divider.gif')} className="NYCUpperHeaderDivider" />
                    <span className="upperHeaderTitle">New York City Police Department</span>
                    <span className="upperHeaderTitle2">Search all NYC.gov websites</span>
                    <img src={require('../../content/images/upper-header-divider.gif')} className="NYCUpperHeaderDivider2" />
                    <span className="upperHeaderTitle1">311</span>
                </div>
                <div className="middleHeaderContainerParent">
                    <div className="container middleHeader">
                        <span className="middleHeaderTextLeft"> Keeping NYC healthy, safe and clean since 1881 </span>
                        <img src={require('../../content/images/DSNY-Web_logo.png')} className="middleHeaderLogo" />
                    </div>
                </div>
                <Tabs className="headerTabs">
                    {/*<Tab eventKey = {8}title={<img src={require('../../content/images/upper-header-divider.gif')} className = "tabsLogo"/>}>Home content</Tab>*/}
                    <Tab eventKey={2} title="About">About content</Tab>
                    <Tab eventKey={3} title="Services">Services content</Tab>
                    <Tab eventKey={4} title="Resources">Resources content</Tab>
                    <Tab eventKey={5} title="Our Work">Our Work content</Tab>
                    <Tab eventKey={6} title="Contact">Contact content</Tab>
                </Tabs>
            </div>
        );
    }
});


export default Header;
