import axios from 'axios';
import $ from 'jquery';
import data from './panelData.json';

export function carouselData() {
    return function (dispatch) {
        axios.get('http://dsnydev.wpengine.com/wp-json/dsny/v1/getPageData?name=home')
            .then((data) => {
                console.log("Carousel Values: ")
                console.log(data.data)
                let carouselItems = [];
                data.data.sections.sections.map((items) => {
                    items.cards.map((item) => {
                        let temp = {};
                        temp['heroTitle'] = item.title;
                        temp['heroImage'] = item.image.file;
                        carouselItems.push(temp);
                    })
                })
                dispatch({
                    type: 'SET_CAROUSEL_TITLE',
                    payload: carouselItems,
                })
            })
    }
}

export function carouselPanelData() {
    return function (dispatch) {
        var date = new Date();
        var month = ("0" + (date.getUTCMonth() + 1)).slice(-2);
        var day = ("0" + date.getUTCDate()).slice(-2);
        var year = date.getUTCFullYear();
        var currentDate = month.toString() + day.toString() + year.toString();
        console.log(currentDate)
        axios.get('http://nyc-csg-web.csc.nycnet/apps/311api/municipalservices/?startDate=' + currentDate)
            .then((data) => {
                console.log('Call going through')
                let carouselPanelItems = [];
                data.data.map((item) => {
                    let temp = {};
                    if (item.type == 'Parking') {
                        temp['panelItemType'] = 'Alternate Side Parking';
                    } else {
                        temp['panelItemType'] = item.items.type;
                    }
                    temp['panelItemIcon'] = 'http://www1.nyc.gov' + item.items.icon;
                    temp['panelItemStatus'] = item.items.status;
                    carouselPanelItems.push(temp);
                    dispatch({
                        type: 'SET_PANEL_ITEMS',
                        payload: carouselPanelItems,
                    })
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

export function programData() {
    return function (dispatch) {
        axios.get('http://dsnydev.wpengine.com/wp-json/wp_query/args?post_type=card&cat=75&order=ASC&meta_key=rank&orderby=meta_value_num&post_per_page=5')
            .then((data) => {
                console.log(data.data)
                let programItems = [];
                data.data.map((item) => {
                    let temp = {};
                    if (item.image) {
                        temp['programTitle'] = item.title.rendered;
                        temp['programImage'] = item.image.guid;
                    } else {
                        temp['programTitle'] = item.title.rendered;
                        temp['programImage'] = item.linked_file.guid;
                    }
                    programItems.push(temp);
                })
                dispatch({
                    type: 'SET_PROGRAM_CARDS',
                    payload: programItems,
                })
            })
    }
}

export function programInitiatives() {
    return function (dispatch) {
        axios.get('http://dsnydev.wpengine.com/wp-json/wp_query/args?post_type=card&cat=74&order=ASC&meta_key=rank&orderby=meta_value_num&post_per_page=5')
            .then((data) => {
                let programInitiativesItems = [];
                data.data.slice(0, 4).map((item, index) => {
                    let temp = {};
                    temp['initiativeRank'] = item.rank;
                    temp['initiativesHeader'] = item.header;
                    temp['initiativesTitle'] = item.title.rendered;
                    temp['initiativesContent'] = item.content.rendered;
                    programInitiativesItems.push(temp);
                })
                dispatch({
                    type: 'SET_PROGRAM_INITIATIVES',
                    payload: programInitiativesItems,
                })
            })
    }
}