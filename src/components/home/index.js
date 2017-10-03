import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-bootstrap';
import * as actions from '../../actions/actions_homePageCarousel';
import { connect } from 'react-redux';
import month from 'month';
import styles from '../../content/styles/home.css';
import { Grid, Row, Col } from 'react-bootstrap';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
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
      monthCarouselPanel: monthCarouselPanel,
    };
  }
  componentWillMount() {
    this.props.carouselPanelDataTemporary(this.successCallback);
    this.props.carouselData(this.successCallback);
  }
  successCallback() {
    this.forceUpdate();
  }
  render() {
    console.log("Panel Values: ")
    console.log(this.props.carouselPanelItems)

    var carouselDataItemList = this.props.carouselItemsBigData.map(function (item) {
      return (
        <Carousel.Item>
          <img src={item.heroImage} />
          <Carousel.Caption>
            {item.heroTitle}
          </Carousel.Caption>
        </Carousel.Item>
      );
    }, this)

    var carouselPanelDataItemList = this.props.carouselPanelItems.map(function (items) {
      return items.map(function (item) {
        return (
          <div className="panelData">
            <div className="border-top"></div>
            <div className="programImage"><img src={item.panelItemIcon} /></div>
            <div className="detailsProgram">{item.panelItemType}</div>
            <div className="statusProgram">{item.panelItemStatus}</div>
          </div>
        );
      })
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
              <Carousel className="newsEventsCarousel" prevIcon={<span className="newsEventsCarouselIcon">
                <img src='http://www1.nyc.gov/assets/home/images/global/heroleft5.svg' alt="carouselleftArrow" />
              </span>} nextIcon={<span className="newsEventsCarouselIcon">
                <img src='http://www1.nyc.gov/assets/home/images/global/heroright5.svg' alt="carouselRightArrow" />
              </span>}>
                {carouselDataItemList}
              </Carousel>
            </div>
          </div>
        </div>
        <div className="container searchContainerRidCollection">

          <Row>

            <Col xs={12} md={6}>
              <div id="TextureSquare">
                <div id="innersquare">
                  <input className="ridOfSearch" type="text" placeholder="How to get rid of ..." >
                  </input>
                  <i className="fa fa-search ridSearch" id ="ridSearch"></i>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div id="TextureSquare">
                <div id="innersquare">
                  <input className="ridOfSearch" type="text" placeholder="When is Collection at ..." >
                  </input>
                  <i className="fa fa-search collectionSearch"></i>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="container">
            <EventList/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    carouselItemsBigData: state.carouselDataReducer.carouselItems,
    carouselPanelItems: state.carouselDataReducer.carouselPanelItemsTemporary,
  }
}

let actionList = {
  carouselData: actions.carouselData,
  carouselPanelDataTemporary: actions.carouselPanelDataTemporary,

};

Home = connect(mapStateToProps, actionList)(Home);

export default Home;
