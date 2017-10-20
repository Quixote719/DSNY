import React , { Component } from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker  } from "react-google-maps"
import MarkerWithLabel from "react-google-maps/lib/components/addons/MarkerWithLabel";
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
    <Marker position={{ lat: 40.72940126, lng: -73.98070419 }} onClick={()=>props.onMarkerClick} />
    <Marker position={{ lat: 40.72540126, lng: -73.98570419 }} onClick={()=>props.onMarkerClick} />
    <Marker position={{ lat: 40.72840126, lng: -73.98170419 }} onClick={()=>props.onMarkerClick} />
    <Marker position={{ lat: 40.72040126, lng: -73.98370419 }} onClick={()=>props.onMarkerClick} />
    <Marker position={{ lat: 40.72340126, lng: -73.98770419 }} onClick={()=>props.onMarkerClick} />

    {props.isMarkerShown && <MarkerWithLabel
      position={{ lat: -34.397, lng: 150.644 }}

      labelStyle={{backgroundColor: "yellow", fontSize: "32px", padding: "16px"}}
    >
  <div>Hello There!</div>
</MarkerWithLabel>}
  </GoogleMap>
)

class MyFancyComponent extends Component {
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
    // this.setState({ isMarkerShown: false })
    // this.delayedShowMarker(obj)
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

export default MyFancyComponent
