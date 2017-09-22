import React, { Component } from 'react';
import styles from '../../content/styles/header.css';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem, Modal, Button } from 'react-bootstrap';
import * as actions from '../../actions/actions_homePageCarousel';
import { connect } from 'react-redux';
import $ from 'jquery';

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { showModal: false };
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
    // componentWillMount() {
    //     this.props.carouselData();
    // }
    render() {
        var url = window.location.pathname;
        return (
            <div className="HeaderParent">
                <div className="upperHeader">
                    <div className="container upperHeaderContainer">
                        <img src={require('../../content/images/nyc_white.png')} className="NYCUpperHeaderLogo" />
                        <img src={require('../../content/images/upper-header-divider.gif')} className="NYCUpperHeaderDivider" />
                        <span className="upperHeaderTitle">Keeping NYC healthy, safe and clean since 1881</span>
                        <span className="upperHeaderTitle2">Search all NYC.gov websites</span>
                        <img src={require('../../content/images/upper-header-divider.gif')} className="NYCUpperHeaderDivider2" />
                        <span className="upperHeaderTitle1">311</span>
                    </div>
                </div>
                <div className="middleHeaderContainerParent">
                    <div className="container middleHeader">
                        <img src={require('../../content/images/Web_logo.svg')} className="middleHeaderLogo" />
                    </div>
                </div>
                <Navbar collapseOnSelect id="slideNav">
                    <Navbar.Brand className="mobileSanitationLogo" >
                        <img src={require('../../content/images/DSNY-Web_logo.png')} className="middleHeaderLogoMobile" />
                        <span className="mobileSanitationHeaderText">Sanitation</span>
                    </Navbar.Brand>
                    <Navbar.Toggle className="navbarToggle" onClick={this.showNavModal} />
                    <Navbar.Collapse id="navBar">
                        <Nav className="mainLinks">
                            <LinkContainer to="/home" className={url === '/' || url === '/home' ? 'homeLogoHeader selectedParent' : 'homeLogoHeader'} onClick={() => this.handleClickHeader()} >
                                <NavItem eventKey={1} className="homeLogoHeader">Home</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/about" className={url === '/about' ? 'aboutHeaderTitle bottomHeaderTitles aboutBottomHeaderTitle selectedParent' : 'aboutHeaderTitle bottomHeaderTitles aboutBottomHeaderTitle'} onClick={() => this.handleClickHeader()}>
                                <NavItem eventKey={2} className="bottomHeaderTitles ">About</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/services" className={url === '/services' ? 'servicesHeaderTitle bottomHeaderTitles selectedParent' : 'servicesHeaderTitle bottomHeaderTitles'} onClick={() => this.handleClickHeader()}>
                                <NavItem eventKey={3} className="bottomHeaderTitles servicesHeaderTitle">Services</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/resources" className={url === '/resources' ? 'resourcesHeaderTitle bottomHeaderTitles selectedParent' : 'resourcesHeaderTitle bottomHeaderTitles'} onClick={() => this.handleClickHeader()}>
                                <NavItem eventKey={4} className="bottomHeaderTitles resourcesHeaderTitle">Resources</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/ourWork" className={url === '/ourWork' ? 'ourWorkHeaderTitle bottomHeaderTitles selectedParent' : 'ourWorkHeaderTitle bottomHeaderTitles'} onClick={() => this.handleClickHeader()}>
                                <NavItem eventKey={5} className="bottomHeaderTitles workHeaderTitle">Our Work</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/contact" className={url === '/contact' ? 'contactHeaderTitle bottomHeaderTitles selectedParent' : 'contactHeaderTitle bottomHeaderTitles'} onClick={() => this.handleClickHeader()}>
                                <NavItem eventKey={6} className="bottomHeaderTitles contactHeaderTitle">Contact</NavItem>
                            </LinkContainer>
                            <input className="searchMessagesInput" type="text" placeholder="Search" >
                            </input>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Modal show={this.state.showModal} onHide={this.close} id="menu">
                    <Modal.Header closeButton>
                        
                        <img src={require('../../content/images/DSNY-Web_logo.png')} className="middleHeaderLogoMobile" />
                        <span className="mobileSanitationHeaderText">Sanitation</span>                    </Modal.Header>
                    <Modal.Body>
                        <Nav className="mainLinks" onClick={this.close}>
                            <input className="searchMessagesInput" type="text" placeholder="Search" >
                            </input>
                            <NavItem eventKey={2} className="bottomHeaderTitles homeHeaderTitles ">Home</NavItem>
                            <LinkContainer to="/about" className="aboutHeaderTitle bottomHeaderTitles aboutBottomHeaderTitle">
                                <NavItem eventKey={2} className="bottomHeaderTitles ">About</NavItem>
                            </LinkContainer>
                            {/*<LinkContainer to = "/about" className = "servicesHeaderTitle">*/}
                            <NavItem eventKey={3} className="bottomHeaderTitles servicesHeaderTitle">Services</NavItem>
                            {/*</LinkContainer>*/}
                            {/*<LinkContainer className = "resourcesHeaderTitle" >*/}
                            <NavItem eventKey={4} className="bottomHeaderTitles resourcesHeaderTitle">Resources</NavItem>
                            {/*</LinkContainer>*/}
                            {/*<LinkContainer className = "ourWorkHeaderTitle">*/}
                            <NavItem eventKey={5} className="bottomHeaderTitles workHeaderTitle">Our Work</NavItem>
                            {/*</LinkContainer>*/}
                            {/*<LinkContainer className = "contactHeaderTitle">*/}
                            <NavItem eventKey={6} className="bottomHeaderTitles contactHeaderTitle">Contact</NavItem>
                            {/*</LinkContainer>*/}
                        </Nav>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        // carouselTitle: state.carouselDataReducer.carouselTitle,
    }
}

let actionList = {
    carouselData: actions.carouselData,
};

Header = connect(mapStateToProps, actionList)(Header);

export default Header;