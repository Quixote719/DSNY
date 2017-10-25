import React, { Component } from 'react';
import Banner from '../../../shared/banner';
import CarouselData from './Carousel/index';
import * as actions from '../../../../actions/actions_home';
import styles from '../../../../content/styles/fleet.css';
import {connect} from 'react-redux';

class ViewOurFleet extends Component {

  componentWillMount() {
    this.props.carouselData();
  }

  render() {

    return (
        <div>
          <Banner text = "Discover our Fleet"/>
          <div className="itemsContainer">
            <CarouselData carouselItems={this.props.carouselItems} />
          </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {carouselItems: state.carouselDataReducer.carouselItems}
}

let actionList = {
  carouselData: actions.carouselData,
};

ViewOurFleet = connect(mapStateToProps, actionList)(ViewOurFleet)

export default ViewOurFleet;
