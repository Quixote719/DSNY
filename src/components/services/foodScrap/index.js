import React , { Component } from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { connect } from 'react-redux'
import _ from "lodash"
import * as actions from '../../../actions/actions_services'
import Header from '../../shared/Breadcrumb/breadcrumb_container'
import MarkerWithLabel from "react-google-maps/lib/components/addons/MarkerWithLabel"
import '../../../content/styles/About.css'

const google = window.google;

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCxMkcYQWRESMbq11G6keP1l9w3z5Jef04&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `500px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>{
      console.log(props.Locations);
      return(
        <GoogleMap
          onClick = { () => {props.onMapClick()} }
          zoom={12}
          center={props.Center}>
           {
              _.map(props.Locations, marker =>  {
                if(!marker.isActive){
                    return(
                     <MarkerWithLabel
                           key = { marker.$id }
                           icon={{ url: require('../../../content/images/Map_marker_default.png') }}
                           onClick = { () => {props.onMarkerClick(marker.$id)} }
                           position = {{ lat: marker.Latitude, lng: marker.Longitude }}
                           labelAnchor = {new google.maps.Point(0, 0)}
                           zIndex = {4}>
                           <div></div>
                     </MarkerWithLabel>
                    )
                }
                  else if(marker.isActive==true){
                    return(
                     <MarkerWithLabel
                           key = { marker.$id }
                           icon={{ url: require('../../../content/images/Map_marker_selected.png') }}
                           onClick = { () => {props.onMarkerClick(marker.$id)} }
                           position = {{ lat: marker.Latitude, lng: marker.Longitude }}
                           labelAnchor = {new google.maps.Point(-17, 75)}
                           labelStyle = {{ backgroundColor: "#FFFFFF", fontSize: "17px", padding: "7px"}}
                           zIndex = {5}
                           >

                           <div className='wideLocLabel'>
                               <div className='locLabelInfo'>
                                 <div className='DistrictName'>{marker.DropOffSiteName}</div>
                                 <div>{marker.Location}</div>
                               </div>
                           </div>
                     </MarkerWithLabel>
                    )
                  }
                })
            }
        </GoogleMap>
      )
})

class FoodScrapMap extends Component {

  constructor(props, context) {
      super(props, context);
      this.state = {
        isMarkerShown: true,
        Center: { lat: 40.72390127, lng: -73.88979419 },
        Locations: this.props.FoodScrapList
      }
      this.onMarkerClick = this.onMarkerClick.bind(this);
      this.onMapClick = this.onMapClick.bind(this);
      this.renderSection = this.renderSection.bind(this);
  }

  componentWillMount() {
    this.props.Location().then((response)=>{
      this.setState({Locations : this.props.FoodScrapList},()=>{
      });
    });
    this.props.FoodScrapContent();
  }

  componentDidMount() {
  }

  onMapClick(){
    let temp = Object.assign([],this.state.Locations);
    temp.forEach((item)=>{
      item.isActive = false;
    })
    this.setState({Locations : temp});
  }

  onMarkerClick(index){
    let tempLoc = Object.assign([],this.state.Locations);
    tempLoc.forEach((item)=>{
      item.isActive = false;
    })
    tempLoc[index-1].isActive=true;
    this.setState({Locations : tempLoc});
  }

  renderSection(content){
    return <div className="SContainer boxPadding" dangerouslySetInnerHTML={{__html: content}}></div>
  }

  render() {
    let locBanner = null;
    let locContent = [];
    if(this.props.FoodScrapData !== undefined){
      let locPage = this.props.FoodScrapData;
      locBanner = <Header title={locPage.header} breadCrumbList={locPage.breadcrumb} body={locPage.header_content}/>
      _.map(locPage.sections.sections, (SecContent, index)=>{
          locContent.push(this.renderSection(SecContent.content));
      })
    }
    return (
      <div>
        {locBanner}
        <div className='ReactGoogleMap'>
            <MyMapComponent
              isMarkerShown = {this.state.isMarkerShown}
              Center = {this.state.Center}
              Locations = {this.state.Locations}
              onMarkerClick = {this.onMarkerClick}
              onMapClick = {this.onMapClick}/>
        </div>
        {locContent}
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    FoodScrapList: state.ServicesDataReducer.FoodScrapList,
    FoodScrapData: state.ServicesDataReducer.FoodScrapData
  }
}

let actionList = {
  Location: actions.fetchFoodScrapList,
  FoodScrapContent: actions.foodScrapMapPage
};

FoodScrapMap = connect(mapStateToProps, actionList)(FoodScrapMap);

export default FoodScrapMap
