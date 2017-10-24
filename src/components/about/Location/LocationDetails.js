import _ from "lodash";
import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {fetchLocationList} from "../../../actions/actions_about";
import SubSectionHeader from '../../shared/sub_section_header';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
import LocationListItem from './LocationListItem';
import '../../../content/styles/locationDetails.css';
import PropTypes from 'prop-types';

class LocationDetails extends Component {

  componentDidMount() {
    this.props.fetchLocationList();
  }

  constructor() {
    super();
    this.forBronx = this.forBronx.bind(this);
    this.forBrooklyn = this.forBrooklyn.bind(this);
    this.forManhattan = this.forManhattan.bind(this);
    this.forQueens = this.forQueens.bind(this);
    this.forStatenIsland = this.forStatenIsland.bind(this);
  }

  renderBronx(pr) {
    return _.map(this.forBronx(pr), locationItem => {
      return (
        <LocationListItem
          houseNumber = {locationItem.HouseNumber}
          district = {locationItem.District}
          streetName = {locationItem.StreetName}
          crossStreet1 = {locationItem.CrossStreet1}
          crossStreet2 = {locationItem.CrossStreet2}
          garageBoroughId = {locationItem.GarageBoroughId} />);
    });
  }

  forBronx(obj) {
    return _.filter(obj, function(o) {
      if(o.GarageBoroughId === 1) {
        return o;
      }
    })
  }

  renderBrooklyn(pr) {
    return _.map(this.forBrooklyn(pr), locationItem => {
      return (
        <LocationListItem
          houseNumber = {locationItem.HouseNumber}
          district = {locationItem.District}
          streetName = {locationItem.StreetName}
          crossStreet1 = {locationItem.CrossStreet1}
          crossStreet2 = {locationItem.CrossStreet2}
          garageBoroughId = {locationItem.GarageBoroughId} />);
    });
  }

  forBrooklyn(obj) {
    return _.filter(obj, function(o) {
      if(o.GarageBoroughId === 2) {
          return o;
      }
      if(o.GarageBoroughId === 3) {
          return o;
      }
    })
  }

  renderManhattan(pr) {
    return _.map(this.forManhattan(pr), locationItem => {
      return (
        <LocationListItem
          houseNumber = {locationItem.HouseNumber}
          district = {locationItem.District}
          streetName = {locationItem.StreetName}
          crossStreet1 = {locationItem.CrossStreet1}
          crossStreet2 = {locationItem.CrossStreet2}
          garageBoroughId = {locationItem.GarageBoroughId} />);
    });
  }

  forManhattan(obj) {
    return _.filter(obj, function(o) {
      if(o.GarageBoroughId === 4) {
          return o;
      }
    })
  }

  renderQueens(pr) {
    return _.map(this.forQueens(pr), locationItem => {
      return (
        <LocationListItem
          houseNumber = {locationItem.HouseNumber}
          district = {locationItem.District}
          streetName = {locationItem.StreetName}
          crossStreet1 = {locationItem.CrossStreet1}
          crossStreet2 = {locationItem.CrossStreet2}
          garageBoroughId = {locationItem.GarageBoroughId} />);
    });
  }

  forQueens(obj) {
    return _.filter(obj, function(o) {
      if(o.GarageBoroughId === 5) {
          return o;
      }
      if(o.GarageBoroughId === 6) {
          return o;
      }
    })
  }

  renderStatenIsland(pr) {
    return _.map(this.forStatenIsland(pr), locationItem => {
      return (
        <LocationListItem
          houseNumber = {locationItem.HouseNumber}
          district = {locationItem.District}
          streetName = {locationItem.StreetName}
          crossStreet1 = {locationItem.CrossStreet1}
          crossStreet2 = {locationItem.CrossStreet2}
          garageBoroughId = {locationItem.GarageBoroughId} />);
    });
  }

  forStatenIsland(obj) {
    return _.filter(obj, function(o) {
      if(o.GarageBoroughId === 7) {
          return o;
      }
    })
  }

  render() {

    const {pr} = this.props;

    return(
      <div>
        <div className='container'>
            <SubSectionHeader title='Bronx'/>
            <Row>
              <div className='locationsDetails'>
                {this.renderBronx(pr)}
              </div>
            </Row>

              <SubSectionHeader title='Brooklyn'/>
            <Row>
              <div className='locationsDetails'>
                {this.renderBrooklyn(pr)}
              </div>
            </Row>

              <SubSectionHeader title='Manhattan'/>
            <Row>
              <div className='locationsDetails'>
                {this.renderManhattan(pr)}
              </div>
            </Row>

              <SubSectionHeader title='Queens'/>
            <Row>
              <div className='locationsDetails'>
                {this.renderQueens(pr)}
              </div>
            </Row>

              <SubSectionHeader title='Staten Island'/>
            <Row>
              <div className='locationsDetails'>
                {this.renderStatenIsland(pr)}
              </div>
            </Row>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {pr: state.AboutDataReducer.LocationList};
}


export default connect(mapStateToProps, {fetchLocationList})(LocationDetails);
