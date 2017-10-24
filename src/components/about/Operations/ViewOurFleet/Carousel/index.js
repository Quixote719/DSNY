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

class CarouselData extends Component {

  constructor(props, context) {
    super(props, context);
  }

  carouselDataItemList() {
    return _.map(this.props.carouselItems, item => {
        if(item.name == "home-hero-section"){
            return _.map(item.cards, (item,index) =>{
                return (
                    <Carousel.Item key={index}>
                      <img className="carouselImg" src={item.image.file} />
                    </Carousel.Item>
                );
            })
        }
    });
  }

  render() {
    return(
      <div className="container fleetCarouselContainer">
        <Carousel prevIcon={<span className="newsEventsCarouselIcon">
            <img src='http://www1.nyc.gov/assets/home/images/global/heroleft5.svg' alt="carouselleftArrow" />
        </span>} nextIcon={<span className="newsEventsCarouselIcon">
            <img src='http://www1.nyc.gov/assets/home/images/global/heroright5.svg' alt="carouselRightArrow" />
        </span>}>
            {this.carouselDataItemList()}
        </Carousel>
      </div>
    );
  }

}

export default CarouselData;
