import axios from 'axios';
import $ from 'jquery';
import data from './panelData.json';

export function carouselData() {
    return function (dispatch) {
        axios.get('http://dsnydev.wpengine.com/wp-json/dsny/v1/getPageData?name=home')
            .then((data) => {
                console.log(data.data)
                dispatch({
                    type: 'SET_CAROUSEL_TITLE',
                    payload: data.data.sections.sections,
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


