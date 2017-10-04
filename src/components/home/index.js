import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Carousel} from 'react-bootstrap';
import * as actions from '../../actions/actions_home';
import {connect} from 'react-redux';
import month from 'month';
import styles from '../../content/styles/home.css';
import {Grid, Row, Col} from 'react-bootstrap';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import SubSectionButton from '../shared/sub_section_button';
import EventList from './Events/event_list';

class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.componentWillMount = this.componentWillMount.bind(this);
    this.successCallback = this.successCallback.bind(this);
    var date = new Date();
    var dateCarouselPanel = ("0" + date.getDate()).slice(-2);
    var monthCarouselPanel = month('MMM').toUpperCase();
    this.state = {
      dateCarouselPanel: dateCarouselPanel,
      monthCarouselPanel: monthCarouselPanel
    };
  }
  componentWillMount() {
    this.props.carouselPanelDataTemporary(this.successCallback);
    this.props.carouselData(this.successCallback);
    this.props.programData(this.successCallback);
  }
  successCallback() {
    this.forceUpdate();
  }
  render() {
    console.log("Panel Values: ")
    console.log(this.props.carouselPanelItems)

    var carouselDataItemList = this.props.carouselItemsBigData.map(function(item, index) {
      return (
        <Carousel.Item key={index}>
          <img src={item.heroImage}/>
          <Carousel.Caption>
            {item.heroTitle}
          </Carousel.Caption>
        </Carousel.Item>
      );
    }, this)

    var carouselPanelDataItemList = this.props.carouselPanelItems.map(function(items) {
      return items.map(function(item) {
        return (
          <div className="panelData">
            <div className="border-top"></div>
            <div className="programImage"><img src={item.panelItemIcon}/></div>
            <div className="detailsProgram">{item.panelItemType}</div>
            <div className="statusProgram">{item.panelItemStatus}</div>
          </div>
        );
      })
    }, this)

    var mobileProgramList = this.props.programListData.map(function(item, index) {
      return (
        <div className="programMobileData" key={index}>
          <div className="programMobileOuter">
            <span className="programMobileTitle">
              {item.programTitle}
            </span>
            <span className="programMobileImageSpan">
              <img src={item.programImage} className="programMobileImage"/>
            </span>
          </div>
        </div>
      );
    }, this)

    var programsList = this.props.programListData.map(function(item, index) {
      if (index == 0) {
        return (
          <div key={index}>
            <Col className="programData serviceRequestCol">
              <Col xs={12} lg={2} id="programCol">
                <div className="serviceRequestParent">
                  <div className="serviceRequestTitle">
                    Check Service Request Number
                  </div>
                  <div className="serviceRequestInput">
                    <input className="serviceRequestSearch" type="text" placeholder="Service Request Number"></input>
                  </div>
                  <div className="searchProgramBtnDiv">
                    <SubSectionButton title='SEARCH'/>
                  </div>
                </div>
              </Col>
            </Col>
            <Col className="programData">
              <Col xs={12} lg={2} id="programCol">
                <div>
                  <div className="programImageDiv">
                    <img src={item.programImage}/>
                  </div>
                  <div className="programTitleDiv">
                    {item.programTitle}
                  </div>
                </div>
              </Col>
            </Col>
          </div>
        );
      }
      return (
        <Col className="programData" key={index}>
          <Col xs={12} lg={2} id="programCol">
            <div>
              <div className="programImageDiv">
                <img src={item.programImage}/>
              </div>
              <div className="programTitleDiv">
                {item.programTitle}
              </div>
            </div>
          </Col>
        </Col>
      );
    }, this)

    return (
      <div>
        <div className="GBanner">
          <div className="carouselContainerParent ">
            <div className="container carouselContainer">
              <ul className="carouselLeftPanel">
                <li className="statusTitle">
                  TODAY
                </li>
                <li className="dateMonthCarousel">
                  <div className="dateMonthCarousel">
                    <div className="dateCarouselPanel">
                      {this.state.monthCarouselPanel}
                    </div>
                    <div className="monthCarouselPanel">
                      {this.state.dateCarouselPanel}
                    </div>
                  </div>
                </li>
                <li className="programsList">
                  {carouselPanelDataItemList}
                </li>
                <li>
                  <button className="panelButton">More</button>
                </li>
              </ul>
              <Carousel className="newsEventsCarousel" prevIcon={< span className = "newsEventsCarouselIcon" > <img src='http://www1.nyc.gov/assets/home/images/global/heroleft5.svg' alt="carouselleftArrow"/> </span>} nextIcon={< span className = "newsEventsCarouselIcon" > <img src='http://www1.nyc.gov/assets/home/images/global/heroright5.svg' alt="carouselRightArrow"/> </span>}>
                {carouselDataItemList}
              </Carousel>
            </div>
          </div>
        </div>
        <div className="container searchContainerRidCollection">

          <Row className="searchRow">
            <Col xs={12} md={6} className="searchRidParent">
              <div id="TextureSquare">
                <div id="innersquare">
                  <input className="ridOfSearch" type="text" placeholder="How to get rid of ..."></input>
                  <i className="fa fa-search ridSearch" id="ridSearch"></i>
                  <div className="exampleRidSearch">
                    Example: battery, mattress, TVs
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} className="searchCollectionParent">
              <div id="TextureSquare">
                <div id="innersquare">
                  <input className="ridOfSearch" type="text" placeholder="When is Collection at ..."></input>
                  <i className="fa fa-search collectionSearch" id="collectionSearch"></i>
                  <div className="exampleRidSearch">
                    Example: 454 W 12th Ave, New York
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className="programContainerParent programContainerParentTablet">
          <div className="programContainer">
            <div className="serviceRequestParentTablet">
              <div className="serviceRequestTitleTablet">
                Check Service Request Number
              </div>
              <div className="serviceRequestInputTablet">
                <input className="serviceRequestSearchTablet" type="text" placeholder="Service Request Number"></input>
                <SubSectionButton title='SEARCH'/>
              </div>
            </div>
            {mobileProgramList}
            <Row>
              {programsList}
            </Row>
          </div>
        </div>

        <div className="container eventSection">
          <EventList/>
        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {carouselItemsBigData: state.carouselDataReducer.carouselItems, carouselPanelItems: state.carouselDataReducer.carouselPanelItemsTemporary, programListData: state.carouselDataReducer.programListData}
}

let actionList = {
  carouselData: actions.carouselData,
  carouselPanelDataTemporary: actions.carouselPanelDataTemporary,
  programData: actions.programData
};

Home = connect(mapStateToProps, actionList)(Home);

export default Home;
