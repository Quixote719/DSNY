import React , { Component } from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { connect } from 'react-redux'
import _ from "lodash"
import * as actions from '../../../actions/actions_about'
import MarkerWithLabel from "react-google-maps/lib/components/addons/MarkerWithLabel"
// import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";

const google = window.google;
const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDhdvaSCBpX16gKXvcdUx29_k1M9WAk8jo&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `450px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap defaultZoom={14} defaultCenter={{ lat: 40.72046126, lng: -73.98974419 }}>
    <MarkerWithLabel
      position = {{ lat: 40.72340126, lng: -73.98770419 }}
      labelAnchor = {new google.maps.Point(0, 0)}
      labelStyle = {{backgroundColor: "#FFFFFF", fontSize: "17px", padding: "7px", display:"none!important"}}>
      <div>Information</div>
    </MarkerWithLabel>
    {props.locs}
  </GoogleMap>
)

class Location extends Component {
  state = {
    isMarkerShown: false,
  }

  componentWillMount() {
    this.props.Location();
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = (obj) => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 1000)
  }

  handleMarkerClick = (obj) => {
    // alert(obj.lat);
  }

  locs = (obj)=>{
    return (<Marker position={{ lat: 40.72390126, lng: -73.98979419 }} />)
  }

  parseData(locations, google){
    console.log('locations!!');
    console.log(locations);

    _.map(locations, item => {
        return   (
          <MarkerWithLabel
            position = {{ lat: item.Latitude, lng: item.Longitude }}
            labelAnchor = {new google.maps.Point(0, 0)}
            labelStyle = {{backgroundColor: "#FFFFFF", fontSize: "17px", padding: "7px", display:"none!important"}}>
            <div>Info</div>
          </MarkerWithLabel>
        );
    });
  }

  render() {

    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
        locs={this.locs}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    LocationList: state.AboutDataReducer.LocationList,
  }
}

let actionList = {
  Location: actions.fetchLocationList,
};

Location = connect(mapStateToProps, actionList)(Location);

export default Location
