import React , { Component } from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import _ from "lodash"
import MarkerWithLabel from "react-google-maps/lib/components/addons/MarkerWithLabel"
import '../../content/styles/About.css'

const google = window.google;


// const lat; const lng;
// let geocoder = new google.maps.Geocoder();
//   geocoder.geocode({
//   'address': '250 Bowery, New York, NY 10012'
//   },((results, status) => {
//   if (status == 'OK') {
//     const lat = results[0].geometry.location.lat();
//     const lng = results[0].geometry.location.lng();
//     console.log(results);
//     console.log('lat' + lat + 'lng' + lng)
//   }
// }));

const MapWindow = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCxMkcYQWRESMbq11G6keP1l9w3z5Jef04&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `210px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>{

      return(
        <GoogleMap
          onClick = { () => {props.onMapClick()} }
          zoom={12}
          center={props.Center}>
               <MarkerWithLabel
                     key = { 1 }
                     icon={{ url: require('../../content/images/Map_marker_default.png') }}
                     position = {{ lat: props.Locations.lat, lng: props.Locations.lng }}
                     labelAnchor = {new google.maps.Point(0, 0)}
                     zIndex = {4}>
                     <div></div>
               </MarkerWithLabel>
        </GoogleMap>
      )
})

export default MapWindow;
