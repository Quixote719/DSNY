import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-bootstrap';
import * as actions from '../../actions/actions_homePageCarousel';
import { connect } from 'react-redux';

class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.componentWillMount = this.componentWillMount.bind(this)
    this.successCallback = this.successCallback.bind(this)
  }
  componentWillMount() {
    this.props.carouselData(this.successCallback);
  }
  successCallback() {
    // console.log(this.props.carouselItemsBigData)
    this.forceUpdate();
  }
  render() {
    console.log("Lists Carousels")
    console.log(this.props.carouselItemsBigData)

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

    return (
      <div className = "carouselContainerParent">
      <div className = "container carouselContainer">
        <Carousel className="newsEventsCarousel" prevIcon={<span className="newsEventsCarouselIcon">
          <img src='http://www1.nyc.gov/assets/home/images/global/heroleft5.svg' alt="carouselleftArrow" />
        </span>} nextIcon={<span className="newsEventsCarouselIcon">
          <img src='http://www1.nyc.gov/assets/home/images/global/heroright5.svg' alt="carouselRightArrow" />
        </span>}>
          {carouselDataItemList}
        </Carousel>
      </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    carouselItemsBigData: state.carouselDataReducer.carouselItems,
  }
}

let actionList = {
  carouselData: actions.carouselData,
};

Home = connect(mapStateToProps, actionList)(Home);

export default Home;
