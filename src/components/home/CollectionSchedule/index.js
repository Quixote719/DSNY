import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as actions from '../../../actions/actions_home';
import { connect } from 'react-redux';
import styles from '../../../content/styles/collectionSchedule.css';
import { Grid, Row, Col, Pagination } from 'react-bootstrap';
import _ from "lodash";
import Banner from '../../shared/banner';
import { Link } from "react-router-dom";
import Header from '../../shared/Breadcrumb/breadcrumb_container.js';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import DownloadInfoApp from '../download_dsny_app';
import CollectionScheduleTable from './collectionScheduleTable';
import RoutingTimes from './routingTimes';
import AddressAutocomplete from './addressAutocomplete'

let errorFlag = 0;
class CollectionSchedule extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            address: this.props.match.params.address,
            placeholder: "When is Collection at ...",
            checkInputresults: "",
        };
    }
    componentWillMount() {
        var address = this.props.match.params.address;
        this.props.getCollectionSchedule(address, null, this.successCallback);
        if (this.props.match.path !== "/assets/donate/development/react/collectionSchedule") {
            this.setState({
                checkInputresults: ""
            });
        }
        else {
            this.setState({
                checkInputresults: "clearBoxChecked"
            });
        }

    }
    handleChange = (address) => {
        this.setState({
            address,
        })
    }
    resetPlaceHolder = () => {
        this.setState({
            placeholder: "When is Collection at ..."
        })
    }
    setPlaceHolder = () => {
        this.setState({
            placeholder: " "
        })
    }
    clearSearchBox() {
        this.setState({
            address: "",
            checkInputresults: "clearBoxChecked"
        });
    }
    handleSelect = (address) => {
        if (errorFlag == 0) {
            this.setState({
                address: address,
                checkInputresults: "clearBoxNotChecked"
            });
            this.props.getCollectionSchedule(address, null, this.successCallback);
            this.props.history.push(process.env.REACT_APP_SITE_RELATIVE_URL + "/collectionSchedule/" + address)
        }
    }
    successCallback = (success) => {
        this.setState({
            address: this.props.noResultsError.FormattedAddress,
        });
    }
    handleKeyPress = (event) => {
        if (this.state.address.trim().length == 0 && event.keyCode == 32) {
            event.preventDefault();
        }
    }
    collectionScheduleTable() {
        return (<CollectionScheduleTable holidayData={this.props.holidayData} arrayLength={this.props.arrayLength} collectionScheduleData={this.props.collectionScheduleData} />)
    }
    suggestedAddressSelected = (value) => {
        this.setState({
            address: value,
        });
        this.props.getCollectionSchedule(value);
    }
    correctAddressList = () => {
        return _.map(this.props.suggestionAddress, (value, index) => {
            return (
                <div className="suggestedAddressListItem" key={index} onClick={() => { this.suggestedAddressSelected(value) }}>
                    {value}
                </div>);
        });
    }
    render() {
        console.log(this.props.suggestionAddress ? this.props.suggestionAddress.length : "nothing")
        const defaultBounds = new window.google.maps.LatLngBounds(
            new window.google.maps.LatLng(40.915568, -73.699215),
            new window.google.maps.LatLng(40.495992, -74.257159));

        const inputProps = {
            onKeyDown: this.handleKeyPress,
            value: this.state.address,
            onChange: this.handleChange,
            placeholder: this.state.placeholder,
            onBlur: this.resetPlaceHolder,
            onFocus: this.setPlaceHolder,
        }
        const cssClasses = {
            root: "placesCollectionSchedule",
            googleLogoContainer: 'googleLogoContainer',
            googleLogoImage: 'googleLogoImage',
            autocompleteItem: 'collectionScheduleItem',
            autocompleteItemActive: 'collectionScheduleActiveItem',
            input: 'collectionSearchInput',
            autocompleteContainer: 'collectionScheduleLanding-autocomplete-container'
        }
        const cssClassesSelected = {
            root: "placesCollectionSchedule",
            googleLogoContainer: 'googleLogoContainer',
            googleLogoImage: 'googleLogoImage',
            autocompleteItem: 'collectionScheduleItem',
            autocompleteItemActive: 'collectionScheduleActiveItem',
            input: 'collectionSearchInput',
            autocompleteContainer: 'collectionScheduleLanding-autocomplete-container'
        }
        const options = {
            strictBounds: true,
            bounds: defaultBounds,
            componentRestrictions: { country: 'us' }
        }

        const contentHTML = () => {
            if (this.props.suggestionAddress == null || this.state.checkInputresults != "clearBoxChecked" || this.props.collectionScheduleInfo == null) {
                return (
                    <div className="noOfSearchResults">
                        No search results found
                    </div>
                )
            } else if (this.props.suggestionAddress != null || this.props.suggestionAddress.length > 0) {
                return (
                    <div className="errorUserAddressParent">
                        <div className="addressNotFound">
                            The address entered can not be found.
                        </div>
                        <div className="selectFromAddressBelow">
                            Please select from the possible addresses below
                        </div>
                        {this.correctAddressList()}
                    </div>
                )
            } else {
                return (
                    <Row className="collectionScheduleRow">
                    <Col xs={12}>
                        <div style={this.props.collectionScheduleInfo !== null && this.props.suggestionAddress == null && this.props.holidayData ? { display: 'block' } : { display: 'none' }} className="nonServiceDay">
                            Today is holiday. There is no service today!
                    </div>
                    </Col>
                    <Col xs={12} md={8} style={this.props.holidayData ? { display: 'none' } : { display: 'block' }} className="collectionScheduleColumn">
                        {this.collectionScheduleTable()}
                    </Col>
                    <Col xs={12} md={4} style={this.props.holidayData ? { display: 'none' } : { display: 'block' }} className="ridOfCol">
                        <div className={!this.props.holidayData ? "enforcementTitleHoliday" : "enforcementTitleNoHoliday"}>
                            <RoutingTimes collectionScheduleData={this.props.collectionScheduleData} collectionScheduleInfo={this.props.collectionScheduleInfo} routingData={this.props.routingData ? this.props.routingData : ""} />
                        </div>
                    </Col>
                </Row>
                )
            }
        }

    
        return (
            <div className="howToGetRidOfParent">
                <Header title='Collection Schedule' breadCrumbList="" />
                <div className="container searchContainerCollection">
                    <Row className="searchRowRidOf">
                        <Col xs={12} md={12} className="searchRidOfParent">
                            <div id="innersquareRidOf">
                                <AddressAutocomplete inputProps={inputProps} options={options} onSelect={this.handleSelect} onEnterKeyDown={this.handleSelect} classNames={this.state.address !== "" ? cssClassesSelected : cssClasses} />
                                <i className="fa fa-times collectionSearch" onClick={() => { this.clearSearchBox() }} style={this.state.address !== "" ? { display: 'block' } : { display: 'none' }} id="collectionSearchResults"></i>
                                <i className="fa fa-search collectionSearch" style={this.state.address == "" ? { display: 'block' } : { display: 'none' }} id="collectionSearchResults"></i>
                            </div>
                        </Col>
                    </Row>
                    {/* <div style={this.props.suggestionAddress !== null || this.state.checkInputresults == "clearBoxChecked" || this.props.collectionScheduleInfo !== null ? { display: 'none' } : { display: 'block' }} className="noOfSearchResults">
                        No search results found
                </div> */}

                    {/* <div style={this.props.suggestionAddress == null || this.props.suggestionAddress.length <= 0 ? { display: 'none' } : { display: 'block' }} className="errorUserAddressParent">
                        <div className="addressNotFound">
                            The address entered can not be found.
                    </div>
                        <div className="selectFromAddressBelow">
                            Please select from the possible addresses below
                    </div>
                        {this.correctAddressList()}
                    </div> */}

                    {/* <Row className="collectionScheduleRow">
                        <Col xs={12}>
                            <div style={this.props.collectionScheduleInfo !== null && this.props.suggestionAddress == null && this.props.holidayData ? { display: 'block' } : { display: 'none' }} className="nonServiceDay">
                                Today is holiday. There is no service today!
                        </div>
                        </Col>
                        <Col xs={12} md={8} style={this.props.holidayData ? { display: 'none' } : { display: 'block' }} className="collectionScheduleColumn">
                            {this.collectionScheduleTable()}
                        </Col>
                        <Col xs={12} md={4} style={this.props.holidayData ? { display: 'none' } : { display: 'block' }} className="ridOfCol">
                            <div className={!this.props.holidayData ? "enforcementTitleHoliday" : "enforcementTitleNoHoliday"}>
                                <RoutingTimes collectionScheduleData={this.props.collectionScheduleData} collectionScheduleInfo={this.props.collectionScheduleInfo} routingData={this.props.routingData ? this.props.routingData : ""} />
                            </div>
                        </Col>
                    </Row> */}
                    {contentHTML}
                </div>
                <DownloadInfoApp />
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        noResultsError: state.carouselDataReducer.noResultsError,
        suggestionAddress: state.carouselDataReducer.suggestionAddress,
        collectionScheduleInfo: state.carouselDataReducer.collectionScheduleInfo,
        routingData: state.carouselDataReducer.routingData,
        holidayData: state.carouselDataReducer.holidayData,
        arrayLength: state.carouselDataReducer.arrayLength,
        collectionScheduleData: state.carouselDataReducer.collectionScheduleData,
    }
}

let actionList = {
    getCollectionSchedule: actions.getCollectionSchedule,
};

CollectionSchedule = connect(mapStateToProps, actionList)(CollectionSchedule);
export default CollectionSchedule;
