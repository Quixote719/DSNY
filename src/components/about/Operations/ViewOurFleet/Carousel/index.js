import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-bootstrap';
import * as actions from '../../../../../actions/actions_home';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import styles from '../../../../../content/styles/fleet.css';
import '../../../../../../node_modules/font-awesome/css/font-awesome.min.css';
import _ from "lodash";
import {Link} from "react-router-dom";
import { Swipeable, defineSwipe } from 'react-touch';
const swipe = defineSwipe({ swipeDistance: 50 });

class CarouselData extends Component {

  constructor(props, context) {
    super(props, context);
  }

  carouselDataItemList() {

    return _.map(this.props.carouselItems, (item, index) => {
      let image = item.featured_image.base_path + item.featured_image.file
      let numberOfImages = this.props.carouselItems.length;

        return (
            <Carousel.Item key={index}>
                <img src={image} alt="fleetCarouselImage"/>
              <div className="fleetExplaination">
                <h1 className="fleetContentTitle">
                  {item.title}
                  <span className="pageNumber">{index + 1}/{numberOfImages}</span>
                </h1>
                <div className="fleetContent" dangerouslySetInnerHTML={{__html: item.content}}></div>
              </div>
            </Carousel.Item>
        );
    });
  }

  goRight() {
    let anchorObj = document.getElementsByClassName("carousel-control right")[0];
    if (anchorObj.click) {
        anchorObj.click()
      } else {
          var evt = document.createEvent("MouseEvents"); 
          evt.initMouseEvent("click", true, true, window, 
              0, 0, 0, 0, 0, false, false, false, false, 0, null); 
          var allowDefault = anchorObj.dispatchEvent(evt);
    }
  }
  goLeft() {
    let anchorObj = document.getElementsByClassName("carousel-control left")[0];
    if (anchorObj.click) {
        anchorObj.click()
      } else {
          var evt = document.createEvent("MouseEvents"); 
          evt.initMouseEvent("click", true, true, window, 
              0, 0, 0, 0, 0, false, false, false, false, 0, null); 
          var allowDefault = anchorObj.dispatchEvent(evt);
    }
  }

  render() {
    if(window.innerWidth >= 1367) {      
      return(
        <div className="fleetCarouselContainerParent">
          <div className="container fleetCarouselContainer">
            <Carousel className="fleetCarousel" prevIcon={<span className="newsEventsCarouselIcon">
                <img src={require('../../../../../content/images/Arrow_left.svg')} alt="carouselleftArrow" />
            </span>} nextIcon={<span className="newsEventsCarouselIcon">
                <img src={require('../../../../../content/images/Arrow_right.svg')} alt="carouselRightArrow" />
            </span>}>
                {this.carouselDataItemList()}
            </Carousel>
          </div>
        </div>
      );
    }
    else {
      return(
        <div className="fleetCarouselContainerParent">
          <div className="container fleetCarouselContainer">
            <Swipeable config={swipe} onSwipeLeft={this.goRight} onSwipeRight={this.goLeft}>
              <Carousel className="fleetCarousel" prevIcon={<span className="newsEventsCarouselIcon">
                  <img src={require('../../../../../content/images/Arrow_left.svg')} alt="carouselleftArrow" />
              </span>} nextIcon={<span className="newsEventsCarouselIcon">
                  <img src={require('../../../../../content/images/Arrow_right.svg')} alt="carouselRightArrow" />
              </span>}>
                  {this.carouselDataItemList()}
              </Carousel>
            </Swipeable>
          </div>
        </div>
      );
    }
  }
}

export default CarouselData;
