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
// import fleetLeftArrow from '../../../../../content/image/Arrow_left.svg';

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

  render() {
    return(
      <div className="fleetCarouselContainerParent">
        <div className="container fleetCarouselContainer">
          <Carousel className="fleetCarousel" prevIcon={<span className="newsEventsCarouselIcon">
              <img src='http://www1.nyc.gov/assets/home/images/global/heroleft5.svg' alt="carouselleftArrow" />
          </span>} nextIcon={<span className="newsEventsCarouselIcon">
              <img src='http://www1.nyc.gov/assets/home/images/global/heroright5.svg' alt="carouselRightArrow" />
          </span>}>
              {this.carouselDataItemList()}
          </Carousel>
        </div>
    </div>
    );
  }

}

export default CarouselData;
