import axios from 'axios';
import $ from 'jquery';
import data from './panelData.json';
import * as types from '../constants/ActionTypes';
import { SERVICE_REQUEST_URL, SITE_SEARCH_RESULTS_URL, SITE_SEARCH_KEYWORDS_URL, HOLIDAY_DATA_URL, COLLECTION_SCHEDULE_URL, RID_OF_ITEM_DETAILS_URL, HOME_PAGE_DATA_URL, RID_OF_KEYWORDS_URL, RID_OF_SEARCH_RESULTS_URL, FETCH_EVENTS_SUB_LIST_URL, FETCH_EVENT_DETAILS_URL, NEWS_PAGE_DATA_URL, FETCH_NEWS_DETAILS_URL } from "../constants/ApiConstants";

export function carouselData() {
    return function (dispatch) {
        axios.get(HOME_PAGE_DATA_URL)
            .then((data) => {
                dispatch({
                    type: 'SET_CAROUSEL_TITLE',
                    payload: data.data.sections.sections,
                })
            })
    }
}
export function getNewsDataList(year) {
    return function (dispatch) {
        axios.get(NEWS_PAGE_DATA_URL.replace(/:MonthYear/g, year)).then((data) => {
            dispatch({ type: 'SET_NEWS_PAGE', payload: data })
        })
    }
}

export function fetchNewsDetails(slug) {
    return function (dispatch) {
        axios.get(FETCH_NEWS_DETAILS_URL.replace('id', slug)).then((data) => {
            dispatch({ type: 'SET_NEWS_DATA', payload: data })
        })
    }
}
export function checkAddressValidator(key) {
    return function (dispatch) {
        dispatch({
            type: 'SET_ADDRESS_VALIDATOR_FLAG',
            payload: key,
        })
    }
}
export function getCollectionSchedule(address, callback = null, callbackSuccess = null) {
    return function (dispatch) {
        axios.get(COLLECTION_SCHEDULE_URL + address)
            .then((data) => {
                axios.get(HOLIDAY_DATA_URL).then((holidayData) => {
                    var DSNYGeoCoder = {};
                    if (callback) {
                        if (data.data.Goat !== null) {
                            DSNYGeoCoder['addressAsEntered'] = data.data.FormattedAddress;
                            DSNYGeoCoder['crossStreet'] = data.data.Goat.CrossStreet;
                            DSNYGeoCoder['pickupStreets'] = data.data.Goat.PickupStreets;
                            DSNYGeoCoder['latitude'] = data.data.Goat.latitude;
                            DSNYGeoCoder['longitude'] = data.data.Goat.longitude;
                            DSNYGeoCoder['houseNumber'] = data.data.Goat.houseNumber;
                            DSNYGeoCoder['street'] = data.data.Goat.firstStreetNameNormalized;
                            DSNYGeoCoder['borough'] = data.data.Goat.firstBoroughName;
                            DSNYGeoCoder['city'] = data.data.Goat.uspsPreferredCityName;
                            DSNYGeoCoder['zipCode'] = data.data.Goat.zipCode;
                            DSNYGeoCoder['sanitationCollectionSchedulingSectionAndSubsection'] = data.data.Goat.sanitationCollectionSchedulingSectionAndSubsection;
                            DSNYGeoCoder['bbl'] = data.data.Goat.bbl;
                            DSNYGeoCoder['sanitationDistrict'] = data.data.Goat.sanitationDistrict;
                            if (data.data.Goat.houseNumber) {
                                // Address
                                DSNYGeoCoder['address'] = data.data.Goat.houseNumber + " " + data.data.Goat.firstStreetNameNormalized + "(" + data.data.Goat.firstBoroughName + ")";
                            }
                            else {
                                // Place name
                                DSNYGeoCoder['address'] = data.data.Goat.firstStreetNameNormalized + "(" + data.data.Goat.firstBoroughName + ")";
                            }
                            DSNYGeoCoder['sanitationRegularCollectionSchedule'] = data.data.Goat.sanitationRegularCollectionSchedule;
                            DSNYGeoCoder['sanitationRecyclingCollectionSchedule'] = data.data.Goat.sanitationRecyclingCollectionSchedule;
                            DSNYGeoCoder['sanitationOrganicsCollectionSchedule'] = data.data.Goat.sanitationOrganicsCollectionSchedule;

                            DSNYGeoCoder['RegularCollectionSchedule'] = data.data.RegularCollectionSchedule;
                            DSNYGeoCoder['RecyclingCollectionSchedule'] = data.data.RecyclingCollectionSchedule;
<<<<<<< HEAD
                            DSNYGeoCoder['OrganicsCollectionSchedule'] = data.data.OrganicsCollectionSchedule;       
                            console.log(DSNYGeoCoder)                            
=======
                            DSNYGeoCoder['OrganicsCollectionSchedule'] = data.data.OrganicsCollectionSchedule;

                            // if(data.data.Goat.sanitationRegularCollectionSchedule !== null && data.data.Goat.sanitationRecyclingCollectionSchedule !== null && data.data.Goat.sanitationOrganicsCollectionSchedule !== null){
                            //     DSNYGeoCoder['sanitationRegularCollectionSchedule'] = data.data.Goat.sanitationRegularCollectionSchedule;
                            //     DSNYGeoCoder['sanitationRecyclingCollectionSchedule'] = data.data.Goat.sanitationRecyclingCollectionSchedule;
                            //     DSNYGeoCoder['sanitationOrganicsCollectionSchedule'] = data.data.Goat.sanitationOrganicsCollectionSchedule;
                            // }
                            // else{
                                // if(data.data.Goat.sanitationRegularCollectionSchedule === null && data.data.Goat.sanitationRecyclingCollectionSchedule !== null && data.data.Goat.sanitationOrganicsCollectionSchedule !== null){
                                //     DSNYGeoCoder['sanitationRegularCollectionSchedule'] = null;
                                //     DSNYGeoCoder['sanitationRecyclingCollectionSchedule'] = data.data.Goat.sanitationRecyclingCollectionSchedule;
                                //     DSNYGeoCoder['sanitationOrganicsCollectionSchedule'] = data.data.Goat.sanitationOrganicsCollectionSchedule;
                                // }
                                // if(data.data.Goat.sanitationRegularCollectionSchedule !== null && data.data.Goat.sanitationRecyclingCollectionSchedule === null && data.data.Goat.sanitationOrganicsCollectionSchedule !== null){
                                //     DSNYGeoCoder['sanitationRegularCollectionSchedule'] = data.data.Goat.sanitationRegularCollectionSchedule;
                                //     DSNYGeoCoder['sanitationRecyclingCollectionSchedule'] = null;
                                //     DSNYGeoCoder['sanitationOrganicsCollectionSchedule'] = data.data.Goat.sanitationOrganicsCollectionSchedule;
                                // }
                                // if(data.data.Goat.sanitationRegularCollectionSchedule !== null && data.data.Goat.sanitationRecyclingCollectionSchedule !== null && data.data.Goat.sanitationOrganicsCollectionSchedule === null){
                                //     DSNYGeoCoder['sanitationRegularCollectionSchedule'] = data.data.Goat.sanitationRegularCollectionSchedule;
                                //     DSNYGeoCoder['sanitationRecyclingCollectionSchedule'] = data.data.Goat.sanitationRecyclingCollectionSchedule;
                                //     DSNYGeoCoder['sanitationOrganicsCollectionSchedule'] = null;
                                // }
                            // }
                            console.log(DSNYGeoCoder)
>>>>>>> dev
                        }
                        else {
                            DSNYGeoCoder = null;
                            console.log(DSNYGeoCoder)
                        }
                    }
                    if (data.data.Goat !== null && data.data.RegularCollectionSchedule !== null) {
                        var sanitationRegularCollectionSchedule = data.data.RegularCollectionSchedule;
                    }
                    else {
                        var sanitationRegularCollectionSchedule = ""
                    }
                    if (data.data.Goat !== null && data.data.RecyclingCollectionSchedule !== null) {
                        var sanitationRecyclingCollectionSchedule = data.data.RecyclingCollectionSchedule;
                    }
                    else {
                        var sanitationRecyclingCollectionSchedule = ""
                    }
                    if (data.data.Goat !== null && data.data.OrganicsCollectionSchedule !== null) {
                        var sanitationOrganicsCollectionSchedule = data.data.OrganicsCollectionSchedule;
                    }
                    else {
                        var sanitationOrganicsCollectionSchedule = ""
                    }
                    if (sanitationRegularCollectionSchedule === "" && sanitationRecyclingCollectionSchedule === "" && sanitationOrganicsCollectionSchedule === "") {
                        var collectionScheduleData = "noValue";
                        var collectionScheduleLength = 0;
                    }
                    else {
                        var collectionScheduleData = [sanitationRegularCollectionSchedule, sanitationRecyclingCollectionSchedule, sanitationOrganicsCollectionSchedule]
                        var arrayLength = collectionScheduleData.filter(Boolean).length
                    }

                    dispatch({
                        type: 'SET_COLLECTION_SCHEDULE_DATA',
                        DSNYGeoCoder: DSNYGeoCoder,
                        collectionScheduleInfo: data.data.Goat,
                        payload: collectionScheduleData,
                        routingData: data.data.RoutingTime,
                        arrayLength: arrayLength - 1,
                        holidayData: holidayData.data,
                        noResultsError: data.data,
                        suggestionAddress: data.data.Suggestions,
                    })
                    if (callbackSuccess)
                        callbackSuccess();
                    if (callback)
                        callback();
                })
            })
    }
}
export function clearCollectionSchedule() {
    return function (dispatch) {
        dispatch({
            type: 'SET_COLLECTION_SCHEDULE_DATA',
            DSNYGeoCoder: undefined,
            collectionScheduleInfo: undefined,
            payload: undefined,
            routingData: undefined,
            collectionScheduleData: undefined,
            arrayLength: 0,
            holidayData: undefined,
            noResultsError: undefined,
            suggestionAddress: undefined
        });
    }
}
export function getRidOffKeywords() {
    return function (dispatch) {
        axios.get(RID_OF_KEYWORDS_URL)
            .then((data) => {
                dispatch({
                    type: 'SET_RID_OFF_KEYWORDS',
                    payload: data.data.key_words,
                })
            })
    }
}

export function getRidOfSearchResults(suggestion) {
    return function (dispatch) {
        axios.get(RID_OF_SEARCH_RESULTS_URL + "=" + encodeURIComponent(suggestion))
            .then((data) => {
                dispatch({
                    type: 'SET_RID_OFF_SEARCH_RESULTS',
                    payload: data.data,
                    length: data.data.length,
                })
            })
    }
}
// SITE SEARCH
export function getSiteSearchKeywords() {
    return function (dispatch) {
        axios.get(SITE_SEARCH_KEYWORDS_URL)
            .then((data) => {
                dispatch({
                    type: 'SET_SITE_SEARCH_KEYWORDS',
                    payload: data.data.key_words,
                })
            })
    }
}

export function getSiteSearchResults(suggestion) {
    return function (dispatch) {
        axios.get(SITE_SEARCH_RESULTS_URL + "=" + suggestion)
            .then((data) => {
                dispatch({
                    type: 'SET_SITE_SEARCH_RESULTS',
                    payload: data.data,
                    length: data.data.length,
                })
            })
    }
}

export function getRidOffItemDetails(itemName) {
    return function (dispatch) {
        axios.get(RID_OF_ITEM_DETAILS_URL + "=" + itemName)
            .then((data) => {
                dispatch({
                    type: 'SET_RID_OFF_ITEM_DETAILS',
                    payload: data.data,
                    length: data.data.length,
                })
            })
    }
}

export function carouselPanelData() {
    return function (dispatch) {
        var date = new Date();
        var month = ("0" + (date.getUTCMonth() + 1)).slice(-2);
        var day = ("0" + date.getUTCDate()).slice(-2);
        var year = date.getUTCFullYear().toString();
        var currentDate = parseInt(month + day + year);

        axios.get('http://nyc-csg-web.csc.nycnet/apps/311api/municipalservices/?startDate=' + currentDate, { crossdomain: true })
            .then((data) => {
                let carouselPanelItems = [];
                data.data.items[0].items.map((item) => {
                    let temp = {};
                    if (item.type == 'Parking') {
                        temp['panelItemType'] = 'Alternate Side Parking';
                    } else {
                        temp['panelItemType'] = item.type;
                    }
                    temp['panelItemIcon'] = 'http://www1.nyc.gov' + item.icon;
                    temp['panelItemStatus'] = item.status;
                    carouselPanelItems.push(temp);
                })
                dispatch({
                    type: 'SET_PANEL_ITEMS',
                    payload: carouselPanelItems,
                })


            })

    }

}

export function carouselPanelDataTemporary() {
    return function (dispatch) {
        let carouselPanelItems = [];
        let temp = [];
        data.map(function (item) {
            item.items.map(function (items, index) {
                let temp1 = {}
                if (items.type == 'Parking') {
                    temp1['panelItemType'] = 'Alternate Side Parking';
                } else {
                    temp1['panelItemType'] = items.type;
                }
                temp1['panelItemIcon'] = 'http://www1.nyc.gov' + items.icon;
                temp1['panelItemStatus'] = items.status;
                temp.push(temp1);
            });
            carouselPanelItems.push(temp)
        })
        dispatch({
            type: 'SET_PANEL_ITEMS_TEMPORARY',
            payload: carouselPanelItems
        })

    }
}

export function fetchEventSubList(borough) {
    return function (dispatch) {
        axios.get(FETCH_EVENTS_SUB_LIST_URL.replace(':borough', borough)).then((data) => {
            dispatch({ type: types.FETCH_EVENT_SUB_LIST, payload: data })
        })
    }
}

export function fetchEventDetails(slug) {
    return function (dispatch) {
        axios.get(FETCH_EVENT_DETAILS_URL.replace(':eventID', slug)).then((data) => {
            dispatch({ type: types.FETCH_EVENT_DETAILS, payload: data })
        })
    }
}
export function setActiveNavTab(key) {
    return function (dispatch) {
        dispatch({
            type: 'SET_ACTIVE_NAV_TAB',
            payload: key
        });
    }
}
export function setSiteSearchValue(value) {
    return function (dispatch) {
        dispatch({
            type: 'SET_SITE_SEARCH_VALUE',
            payload: value
        });
    }
}
export function setSearchClearBoxValue(value) {
    return function (dispatch) {
        dispatch({
            type: 'SET_CLEAR_BOX_SEARCH_VALUE',
            payload: value
        });
    }
}
export function setPaginationKey(value) {
    return function (dispatch) {
        dispatch({
            type: 'SET_PAGINATION_VALUE',
            payload: value
        });
    }
}
export function commercialAddressFlag(flag, message) {
    return function (dispatch) {
        var commercialAddress = {};
        commercialAddress['commercialFlag'] = flag;
        commercialAddress['commercialMessage'] = message
        dispatch({
            type: 'SET_COMMERICIAL_FLAG',
            commercialAddress: commercialAddress,
        });
    }
}
export function setServiceRequestStatus(value, callback = null) {
    return function (dispatch) {
        axios.get(SERVICE_REQUEST_URL + value + "/status")
        .then((data) => {
            console.log(data.data)
            dispatch({
                type: 'SET_SERVICE_REQUEST_STATUS',
                payload: data.data
            });
            if (callback){
                callback();                
            }
        })

    }
}

export function Services() {
    return function (dispatch) {
      axios.get(`${WORDPRESS_ROOT_URL}dsny/v1/getPageData?name=services`).then((request) => {
          dispatch({type: 'SET_SERVICES',payload: request.data})
      })
}}
