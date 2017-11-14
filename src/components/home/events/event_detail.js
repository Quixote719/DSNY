import _ from "lodash";
import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {fetchEventDetails} from "../../../actions/actions_home";
import '../../../content/styles/subSectionHeaderImage.css';
import {Row, Col} from 'react-bootstrap';
import PressReleaseHeader from '../../PressReleases/pressReleaseHeader';
import PressReleaseBody from '../../PressReleases/pressReleaseBody';
import LazyImage from '../../shared/LazyImage';
import MapWindow from '../../shared/map_window';
import Header from '../../shared/Breadcrumb/breadcrumb_container'
import moment from 'moment';
import dateFormat from 'dateformat';

const google = window.google;

class EventDetail extends Component {

  constructor(props, context) {
      super(props, context);
      this.state = {
        lat: 0,
        lng: 0
      }
      // this.onMarkerClick = this.onMarkerClick.bind(this);
      // this.onMapClick = this.onMapClick.bind(this);
  }

  componentDidMount() {
    const {slug} = this.props.match.params;
    this.props.fetchEventDetails(slug);
  }

  render() {
    const {prd} = this.props;
    return (
      <div >
        {this.renderPage(prd)}
      </div>
    );
  };

  renderPage(cardDetails) {

    let geocoder = new google.maps.Geocoder();
      geocoder.geocode({
      'address': '250 Bowery, New York, NY 10012'
      },((results, status) => {
      if (status == 'OK') {
        this.setState({lat : results[0].geometry.location.lat()});
        this.setState({lng : results[0].geometry.location.lng()});
      }
    }));

    if (cardDetails) {
        var mail = "mailTo:" + cardDetails.ContactEmail
        var website = "" + cardDetails.Website
        let date = dateFormat(cardDetails.FromDateTime, "mmmm d yyyy, dddd, h TT") + ' - '+
        dateFormat(cardDetails.ToDateTime, "mmmm d yyyy, dddd, h TT").split(',').pop();

        return(
        <div>

             <div className="GBanner">
               <div className="BreadcrumbList">
                 <div className="container">
                   <ol role="navigation" aria-label="breadcrumbs" className="breadcrumb">
                     <li className=""><a href = {process.env.REACT_APP_SITE_RELATIVE_URL}>Home</a></li>
                     <li className=""><a href= {process.env.REACT_APP_SITE_RELATIVE_URL + '/dsnyevents'}>Events</a></li>
                    </ol>
                 </div>
               </div>
              </div>
             <div className='container PressReleaseHeader'>
              <Row>
                <Col xs={12}>
                  <div className='PressReleaseHeadertitle' dangerouslySetInnerHTML={{
                    __html: cardDetails.EventName
                  }}></div>
                </Col>
                <Col xs={12}>
                  <div className='patternLineGreen'></div>
                </Col>
              </Row>
            </div>
            <div className='container'>
              <MapWindow
                Center = {{ lat: this.state.lat, lng: this.state.lng }}
                Locations = {{ lat:this.state.lat, lng:this.state.lng }}/>
            </div>
             <div className='container PressReleaseBody'>
              <Row>
                <Col xs={12} sm={8} md={9}>
                  <div className='PressReleaseBodySubHeaders' dangerouslySetInnerHTML={{
                    __html:  date
                  }}/>
                  <div className='PressReleaseBodytext PressReleaseBodyAddress' dangerouslySetInnerHTML={{
                    __html: cardDetails.HouseNo + ' ' + cardDetails.Street + ' ' + cardDetails.Borough
                  }}/>
                  <div className='PressReleaseBodycontact PressReleaseBodytext' dangerouslySetInnerHTML={{
                    __html: cardDetails.Description
                  }}/>
                  <div className="PressReleaseBodycontact">Website: <a href={website}>{cardDetails.Website}</a></div>
                </Col>
                <Col xs={12} sm={4} md={3} className="PressReleaseContactBlock">
                    <div className="PressReleaseBodySubHeaders">Contact</div>
                    <div className="PressReleaseBodycontact"><a href={mail}>{cardDetails.ContactEmail}</a></div>
                    <div className="PressReleaseBodycontact">{cardDetails.ContactPhone}</div>
                    <div className="patternLineGreen PressReleasePaddingTop"></div>
                </Col>
              </Row>
            </div>
        </div>
        )
    } else {
      return (
        <div>loading.....</div>
      )
    }
  }
};

function mapStateToProps(state) {
  return {prd: state.carouselDataReducer.EventDetails};
}

export default connect(mapStateToProps, {fetchEventDetails})(EventDetail);
