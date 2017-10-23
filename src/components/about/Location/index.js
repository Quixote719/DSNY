import React , { Component } from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { connect } from 'react-redux'
import _ from "lodash"
import * as actions from '../../../actions/actions_about'
import MarkerWithLabel from "react-google-maps/lib/components/addons/MarkerWithLabel"
// import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";

const google = window.google;
let MarkerInfo = ()=>{return(    <MarkerWithLabel
      position = {{ lat: 40.72340126, lng: -73.98770419 }}
      labelAnchor = {new google.maps.Point(0, 0)}
      labelStyle = {{backgroundColor: "#FFFFFF", fontSize: "17px", padding: "7px", display:"none!important"}}>
      <div>Here</div>
    </MarkerWithLabel>);}
const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>{
  return(
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: props.Locations[0].lat, lng: props.Locations[0].lng }}>

       {props.Locations.map(marker => (
         <MarkerWithLabel
               position = {{ lat: marker.lat, lng: marker.lng }}
               labelAnchor = {new google.maps.Point(0, 0)}
               labelStyle = {{backgroundColor: "#FFFFFF", fontSize: "17px", padding: "7px", display:"none!important"}}>
               <div>Marker</div>
         </MarkerWithLabel>
      ))}
    );
    </GoogleMap>
  )
})

class Location extends Component {
  state = {
    isMarkerShown: true,
    Locations: [{lat: 40.71740126, lng: -73.98970419},{lat: 40.72730126, lng: -73.99360419},{lat: 40.72140126, lng: -73.97970419}]
  }

  componentWillMount() {
    this.props.Location();
  }

  componentDidMount() {
    // this.setState({ isMarkerShown: true })
    console.log('LocationList');
    console.log(this.props.LocationList);
    // this.delayedShowMarker()
  }

  // delayedShowMarker = (obj) => {
  //   setTimeout(() => {
  //     this.setState({ isMarkerShown: true })
  //   }, 1000)
  // }

  // handleMarkerClick = (obj) => {
  // }

  // locs = (obj)=>{
  //   return (<Marker position={{ lat: 40.72390126, lng: -73.98979419 }} />)
  // }

  // parseData(locations, google){
  //   console.log('locations!!');
  //   console.log(locations);
  //
  //   _.map(locations, item => {
  //       return   (
  //         <MarkerWithLabel
  //           position = {{ lat: item.Latitude, lng: item.Longitude }}
  //           labelAnchor = {new google.maps.Point(0, 0)}
  //           labelStyle = {{backgroundColor: "#FFFFFF", fontSize: "17px", padding: "7px", display:"none!important"}}>
  //           <div>Info</div>
  //         </MarkerWithLabel>
  //       );
  //   });
  // }

  render() {

    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        Locations={this.state.Locations}
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
