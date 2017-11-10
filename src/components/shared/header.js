import React, { Component } from 'react';
import styles from '../../content/styles/header.css';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem, Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import $ from 'jquery';
import TextSizeModal from './TextSizeModal';
import SearchBoxHome from "../home/Site_Search/siteSearchBoxHome";
import * as actions from '../../actions/actions_home';

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        window.staticForceUpdate= this.handleClickHeader;        
        this.state = { showModal: false,  textSizePopUp: false };
        this.close = this.close.bind(this);
        this.ReverseAnimate = this.ReverseAnimate.bind(this);
        this.showNavModal = this.showNavModal.bind(this);
        this.handleClickHeader = this.handleClickHeader.bind(this);
    }
    showNavModal() {
        setTimeout(() => { this.setState({ showModal: true }) }, 100);
    }
    close() {
        { this.ReverseAnimate() };
    }
    ReverseAnimate() {
        if (window.innerWidth >= 500 && window.innerWidth <= 959)
            $(".modal-dialog").animate({ "right": "-720px" }, 700);

        else
            $(".modal-dialog").animate({ "right": "-420px" }, 500);

        setTimeout(() => { this.setState({ showModal: false }) }, 400);
    }
    handleClickHeader() {
        this.forceUpdate();
    }
    textSizeModal() {
        this.setState({textSizePopUp: !this.state.textSizePopUp});
    }
    componentWillMount() {
        this.props.getSiteSearchKeywords();
        this.props.setActiveNavTab("home");        
    }
    onNavChange=(key, event)=> {
        this.props.setActiveNavTab(key);
        console.log(this.props.activeNavTab);
    }
    render() {
        
        console.log(this.props.activeNavTab)
        window.showModalStatic = this.state.showModal;
        var url = window.location.pathname;
        return (
            <div className="HeaderParent">
                <Modal show={this.state.textSizePopUp} onHide={()=>{this.textSizeModal()}} className="textSizeModalNew" animation = {false}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body closeButton>
                    <p className = "modalTextSizePara">To change the text size on NYC.gov you can use your web browser's settings. Most browsers include functionality to let you increase or decrease the text on a web page. For example, to increase text size using:</p>
                    <h4 className="modalTextSizeTitle">Chrome</h4>
                    <p className = "modalTextSizePara">In the menu to the right of the address bar, select and set Zoom level. Menu &gt; Zoom &gt; +</p>
                    <h4 className="modalTextSizeTitle">Firefox</h4>
                    <p className = "modalTextSizePara">In the View menu, select Zoom. View &gt; Zoom &gt; Zoom In</p>
                    <h4 className="modalTextSizeTitle">Internet Explorer</h4>
                    <p className = "modalTextSizePara">In the View menu, select Text Size. View &gt; Text Size &gt; Largest</p>
                    <h4 className="modalTextSizeTitle">Safari</h4>
                    <p className = "modalTextSizePara">In the View menu, select Zoom In. View &gt; Zoom In<br />Macintosh Shortcut: Command+</p>
                    <h4 className="modalTextSizeTitle">No Web Browser Endorsement</h4>
                    <p className = "modalTextSizePara">Common browsers are included in this page; mention of a specific browser does not imply endorsement or recommendation.</p>
                    </Modal.Body>
                </Modal>
                <div className="upperHeader">
                    <div className="container upperHeaderContainer">
                        <img src={require('../../content/images/nyc_white.png')} className="NYCUpperHeaderLogo" alt="NYC Logo"/>
                        <img src={require('../../content/images/upper-header-divider.gif')} className="NYCUpperHeaderDivider" 
                        alt="Page Upper Header Divider"/>
                        <span className="upperHeaderTitle">Keeping NYC healthy, safe and clean since 1881</span>
                        <span className="upperHeaderTitle2">Search all NYC.gov websites</span>
                        <img src={require('../../content/images/upper-header-divider.gif')} className="NYCUpperHeaderDivider2" 
                        alt="Page Second Upper Header Divider"/>
                        <span className="upperHeaderTitle1">311</span>
                    </div>
                </div>
                <div className="middleHeaderContainerParent">
                    <div className="container middleHeader">
                        <img src={require('../../content/images/sanitation_logo.svg')} className="middleHeaderLogo" alt="Sanitation Logo"/>
                        <a className="textSizeHeader" onClick = {()=>{this.textSizeModal()}}>Text Size</a>

                        <span className="textSizeTranslate">&#8203;</span>
                        {/*<span aria-hidden="true" className="translateIcon">▼</span>*/}
                        <span id="google_translate_element" className="translateHeader"></span>
                        <img src='http://www1.nyc.gov/assets/home/images/global/language.gif' className="gifHeader" alt="Language"/>
                    </div>
                </div>
                <Navbar collapseOnSelect id="slideNav">
                    <Navbar.Brand className="mobileSanitationLogo" >
                    <img src={require('../../content/images/sanitation_logo.svg')} id="sanitationMobileLogo" alt="Sanitation Logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle className="navbarToggle" onClick={this.showNavModal} />
                    <Navbar.Collapse id="navBar">
                        <Nav className="mainLinks" onSelect={this.onNavChange} activeKey={this.props.activeNavTab}>
                            <LinkContainer to= {process.env.REACT_APP_SITE_RELATIVE_URL + "/home"} className={( url == process.env.REACT_APP_SITE_RELATIVE_URL + '/' || url == process.env.REACT_APP_SITE_RELATIVE_URL + '/home') ? 'homeLogoHeader selectedParent' : 'homeLogoHeader'} onClick={() => this.handleClickHeader()} >
                                <NavItem eventKey={"home"}>Home</NavItem>
                            </LinkContainer>
                            <LinkContainer to= {process.env.REACT_APP_SITE_RELATIVE_URL + "/about"} className={url.includes(process.env.REACT_APP_SITE_RELATIVE_URL + '/about') ? 'bottomHeaderTitles selectedParent' : 'bottomHeaderTitles'} onClick={() => this.handleClickHeader()}>
                                <NavItem eventKey={"about"}>About</NavItem>
                            </LinkContainer>
                            <LinkContainer to= {process.env.REACT_APP_SITE_RELATIVE_URL + "/services"} className={url.includes(process.env.REACT_APP_SITE_RELATIVE_URL + '/services') ? 'bottomHeaderTitles selectedParent' : 'bottomHeaderTitles'} onClick={() => this.handleClickHeader()}>
                                <NavItem eventKey={"services"}>Services</NavItem>
                            </LinkContainer>
                            <LinkContainer to= {process.env.REACT_APP_SITE_RELATIVE_URL + "/resources"} className={url.includes(process.env.REACT_APP_SITE_RELATIVE_URL + '/resources') ? 'bottomHeaderTitles selectedParent' : 'bottomHeaderTitles'} onClick={() => this.handleClickHeader()}>
                                <NavItem eventKey={"resources"}>Resources</NavItem>
                            </LinkContainer>
                            <LinkContainer to= {process.env.REACT_APP_SITE_RELATIVE_URL + "/our-work"} className={url.includes(process.env.REACT_APP_SITE_RELATIVE_URL + '/our-work') ? 'bottomHeaderTitles selectedParent' : 'bottomHeaderTitles'} onClick={() => this.handleClickHeader()}>
                                <NavItem eventKey={"our-work"}>Our Work</NavItem>
                            </LinkContainer>
                            <LinkContainer to= {process.env.REACT_APP_SITE_RELATIVE_URL + "/contact"} className={url.includes(process.env.REACT_APP_SITE_RELATIVE_URL + '/contact') ? 'bottomHeaderTitles selectedParent' : 'bottomHeaderTitles'} onClick={() => this.handleClickHeader()}>
                                <NavItem eventKey={"contact"}>Contact</NavItem>
                            </LinkContainer>
                            <NavItem eventKey = {7} className="search-box-header">
                            </NavItem>
                            <SearchBoxHome getRidOfSearchResults={this.props.getSiteSearchResults?this.props.getSiteSearchResults:""} ridOffKeywords = {this.props.siteSearchKeywords} test ={this.props}/>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Modal show={this.state.showModal} onHide={this.close} id="menu" backdrop={false}>
                <div className="upperHeader">
                    <div className="container upperHeaderContainer">
                        <img src={require('../../content/images/nyc_white.png')} className="NYCUpperHeaderLogo" alt="NYC Logo"/>
                        <img src={require('../../content/images/upper-header-divider.gif')} className="NYCUpperHeaderDivider" 
                         alt="Page Upper Header Divider"/>
                        <span className="upperHeaderTitle">Keeping NYC healthy, safe and clean since 1881</span>
                        <span className="upperHeaderTitle2">Search all NYC.gov websites</span>
                        <img src={require('../../content/images/upper-header-divider.gif')} className="NYCUpperHeaderDivider2" 
                        alt="Page Second Upper Header Divider"/>
                        <span className="upperHeaderTitle1">311</span>
                    </div>
                </div>

                    <Modal.Header closeButton onClick={this.close}>

                    <img src={require('../../content/images/sanitation_logo.svg')} className="sanitationMobileLogo" alt="Sanitation Logo"/>
                    </Modal.Header>
                    <Modal.Body>
                        <div className = "searchMessagesMobileDiv">
                        <SearchBoxHome noOfSearchResults ={this.props.noOfSearchResults?this.props.noOfSearchResults:0} getRidOfSearchResultsData={this.props.siteSearchResultsData?this.props.siteSearchResultsData:""} ridOffKeywords={this.props.siteSearchKeywords?this.props.siteSearchKeywords:""} showModal = {this.ReverseAnimate} ridOffKeywords = {this.props.siteSearchKeywords} test ={this.props} />
                        {/* <i className="fa fa-search searchMessagesInputIcon"></i> */}
                        </div>
                        <Nav className="mainLinks" onClick={this.close}>
                            <LinkContainer to={process.env.REACT_APP_SITE_RELATIVE_URL + "/home"}>
                            <NavItem eventKey={2} className="bottomHeaderTitles homeHeaderTitles ">Home</NavItem>
                            </LinkContainer>
                            <LinkContainer to={process.env.REACT_APP_SITE_RELATIVE_URL + "/about"} className="aboutHeaderTitle bottomHeaderTitles aboutBottomHeaderTitle">
                                <NavItem eventKey={2} className="bottomHeaderTitles ">About</NavItem>
                            </LinkContainer>
                            <LinkContainer to = {process.env.REACT_APP_SITE_RELATIVE_URL + "/services"} className = "servicesHeaderTitle">
                            <NavItem eventKey={3} className="bottomHeaderTitles servicesHeaderTitle">Services</NavItem>
                            </LinkContainer>
                            <LinkContainer to = {process.env.REACT_APP_SITE_RELATIVE_URL + "/resources"} className = "resourcesHeaderTitle" >
                            <NavItem eventKey={4} className="bottomHeaderTitles resourcesHeaderTitle">Resources</NavItem>
                            </LinkContainer>
                            {/*<LinkContainer className = "ourWorkHeaderTitle">*/}
                            <NavItem eventKey={5} className="bottomHeaderTitles workHeaderTitle">Our Work</NavItem>
                            {/*</LinkContainer>*/}
                            <LinkContainer to = {process.env.REACT_APP_SITE_RELATIVE_URL + "/contact"} className = "contactHeaderTitle">
                            <NavItem eventKey={6} className="bottomHeaderTitles contactHeaderTitle">Contact</NavItem>
                            </LinkContainer>
                        </Nav>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        siteSearchKeywords: state.carouselDataReducer.siteSearchKeywords,
        activeNavTab: state.carouselDataReducer.activeNavTab        
    }
  }
  let actionList = {
    getSiteSearchResults: actions.getSiteSearchResults,    
    getSiteSearchKeywords: actions.getSiteSearchKeywords,
    setActiveNavTab: actions.setActiveNavTab    
  };
Header = connect(mapStateToProps,actionList)(Header);
export default Header;

