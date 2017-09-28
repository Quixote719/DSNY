import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-bootstrap';
import * as actions from '../../actions/actions_homePageCarousel';
import { connect } from 'react-redux';
import month from 'month';
import styles from '../../content/styles/home.css';
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
          <span className="panelData">
            {/* <div>
              {item.panelItemIcon}
            </div> */}
              {item.panelItemType}
              {item.panelItemStatus}
          </span>
        );
      })
    }, this)

    return (
      <div>
        <div className="carouselContainerParent">

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
              <li className="statusTitle">
                {carouselPanelDataItemList}
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
