import React , { Component } from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker  } from "react-google-maps"
import { connect } from 'react-redux'
import * as actions from '../../../actions/actions_about'
import MarkerWithLabel from "react-google-maps/lib/components/addons/MarkerWithLabel"

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
    <Marker position={{ lat: 40.72046126, lng: -73.98974419 }} onClick={()=>props.onMarkerClick({ lat: 40.72046126, lng: -73.98974419 })} />
    <Marker icon={{ url: 'https://maxcdn.icons8.com/Share/icon/Maps//marker1600.png',scaledSize: new google.maps.Size(64,64) }} position={{ lat: 40.72940126, lng: -73.98070419 }} onClick={()=>props.onMarkerClick} />
    <Marker icon={{ url: '../../../content/images/Map_marker_default.png' }} position={{ lat: 40.72540126, lng: -73.98570419 }} onClick={()=>props.onMarkerClick} />
    <Marker position={{ lat: 40.72840126, lng: -73.98170419 }} onClick={()=>props.onMarkerClick} />
    <Marker position={{ lat: 40.72040126, lng: -73.98370419 }} onClick={()=>props.onMarkerClick} />
    <Marker position={{ lat: 40.72340126, lng: -73.98770419 }} onClick={()=>props.onMarkerClick} />
    <MarkerWithLabel
      position = {{ lat: 40.72340126, lng: -73.98770419 }}
      labelAnchor = {new google.maps.Point(0, 0)}
      labelStyle = {{backgroundColor: "#FFFFFF", fontSize: "17px", padding: "7px"}}>
      <div>Info</div>
    </MarkerWithLabel>
  </GoogleMap>
)

class Location extends Component {
  state = {
    isMarkerShown: false,
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
    alert(obj.lat);
  }

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
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
