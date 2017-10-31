import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Banner from '../../../shared/banner';
import * as actions from '../../../../actions/actions_about';
import styles from '../../../../content/styles/fleet.css';
import {connect} from 'react-redux';
import _ from "lodash";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import { Carousel } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import '../../../../../node_modules/font-awesome/css/font-awesome.min.css';
import CarouselData from './Carousel/index';
import Header from '../../../shared/Breadcrumb/breadcrumb_container'

class ViewOurFleet extends Component {

  constructor(props, context) {
    super(props, context);
    this.componentWillMount = this.componentWillMount.bind(this);
    this.renderTitle = this.renderTitle.bind(this);
  }

  componentWillMount() {
    this.props.FetchFleet();
  }

  render() {

    let Fleet = {};
    let Carousel = {};
    let CarouselExplanation = {};
    let Title = {};

    this.parseFleetData(Fleet, Carousel, CarouselExplanation, Title);

    return (
      <div>
        {this.renderTitle()}
        <CarouselData carouselItems = {Carousel.cards} />
      </div>
    );
  }

  renderTitle() {
    let Fleet = {};
    if(this.props.FleetData !== undefined) {
      Fleet = this.props.FleetData.data;
      return(
        <div>
          <Header title={Fleet.header} breadCrumbList={Fleet.breadcrumb} body={Fleet.header_content} />
        </div>
      )
    }
  }

  parseFleetData(Fleet, Carousel, CarouselExplanation, Title) {
    if(this.props.FleetData !== undefined) {
      Fleet = this.props.FleetData.data;
    }

    if(this.props.FleetData != undefined) {
      _.map(this.props.FleetData.data.sections.sections, item => {
        Carousel.cards = item.cards;
      });
    }
  }
}

function mapStateToProps(state) {
  return {
    FleetData: state.AboutDataReducer.FleetData
  }
}

let actionList = {
  FetchFleet: actions.FetchFleet,
};

ViewOurFleet = connect(mapStateToProps, actionList)(ViewOurFleet)

export default ViewOurFleet;
