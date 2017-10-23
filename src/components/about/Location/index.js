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
          defaultZoom={12}
          defaultCenter={{ lat: 40.72390126, lng: -73.98979419 }}>
          {alert('!!!')}
           {
              _.map(props.Locations, marker =>  {
                if( marker.$id==1 ){
                  // alert(marker.$id);
                }
                if(!marker.isActive){
                    return(
                     <MarkerWithLabel
                           key = { marker.$id }
                           icon={{ url: require('../../../content/images/Map_marker_default.svg') }}
                           onClick = { () => {props.onMarkerClick(marker.$id)} }
                           position = {{ lat: marker.Latitude, lng: marker.Longitude }}
                           labelAnchor = {new google.maps.Point(0, 0)}
                           labelStyle = {{backgroundColor: "#FFFFFF", fontSize: "17px", padding: "7px", display:"none!important"}}>
                           <div>{marker.StreetName}</div>
                     </MarkerWithLabel>
                    )
                }
                  else if(marker.isActive==true){
                    return(
                     <MarkerWithLabel
                           key = { marker.$id }
                           icon={{ url: require('../../../content/images/Map_marker_selected.svg') }}
                           onClick = { () => {props.onMarkerClick(marker.$id)} }
                           position = {{ lat: marker.Latitude, lng: marker.Longitude }}
                           labelAnchor = {new google.maps.Point(0, 0)}
                           labelStyle = {{backgroundColor: "#FFFFFF", fontSize: "17px", padding: "7px", display:"none!important"}}>
                           <div>{marker.StreetName}</div>
                     </MarkerWithLabel>
                    )
                  }
                })
            }
        </GoogleMap>
      )

})

class Location extends Component {

  constructor(props, context) {
      super(props, context);
      this.state = {
        isMarkerShown: true,
        Locations: this.props.LocationList
      }
      this.onMarkerClick = this.onMarkerClick.bind(this);
      // this.UpdateMarker = this.UpdateMarker.bind(this);
  }

  componentWillMount() {
    this.props.Location().then(response=>{
      this.setState({Locations : this.props.LocationList});
    });
  }

  componentDidMount() {
  }

  // UpdateMarker(temp){
  //   this.setState({Locations : temp},()=>{
  //     alert('why?')
  //   });
  //   console.log(this.state.Locations);
  // }

  onMarkerClick(index){
    console.log(index-1);
    // let temp = this.state.Locations;
    let temp = Object.assign([],this.state.Locations);
    // temp = temp.splice(0,40)

    // temp[index-1].isActive = true;

    console.log(typeof(temp));
    console.log(temp);
    temp.forEach((item)=>{
      item.isActive = false;
    })
    temp[index-1].isActive=true;
    // temp.pop()
    // temp=[];
    // temp[index-1].isActive = true;
    this.setState({Locations : temp});
    // this.UpdateMarker(temp);
    // console.log('state');
    // console.log(this.state.Locations);
    console.log(this.state.Locations);
    // this.forceUpdate();
  }

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        Locations={this.state.Locations}
        onMarkerClick={this.onMarkerClick}
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
