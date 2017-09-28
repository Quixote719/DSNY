import axios from 'axios';
import $ from 'jquery';
import data from './panelData.json';

// export function carouselData(successCallback) {
//     return function (dispatch) {
//         axios.get('http://dsnydev.staging.wpengine.com/wp-json/wp_query/args?post_type=herocard&orderby=date&order=DESC')
//             .then((data) => {
//                 console.log(data.data)
//                 let carouselItems = [];
//                 data.data.map((item) => {
//                     let temp = {};
//                     let heroFeaturedMediaID;
//                     temp['heroTitle'] = item.title.rendered;
//                     heroFeaturedMediaID = item.featured_media;
//                     axios.get('http://dsnydev.staging.wpengine.com/wp-json/wp/v2/media/'+heroFeaturedMediaID)
//                         .then((dataMedia)=>{
//                             temp['heroImage'] = dataMedia.data.source_url;
//                             carouselItems.push(temp);                            
//                         })
//                 })
// let c =0;
//                 var tid = setInterval(()=>{
//                     if(carouselItems.length > 2) {
//                         dispatch(
//                             {
//                                 type: 'SET_CAROUSEL_TITLE',
//                                 payload: carouselItems,
//                             }
//                         )
//                         successCallback();
//                         clearInterval(tid);
//                     }
//                     if(c === 3) {
//                         clearInterval(tid);                        
//                     }
//                     c++;
//                 },100);

//             })

//     }

// }
export function carouselData(successCallback) {
    return function (dispatch) {
        axios.get('http://dsnydev.wpengine.com/wp-json/wp_query/args?post_type=card&cat=41orderby=date&order=DESC&post_per_page=5')
            .then((data) => {
                let c = 0;
                console.log(data.data)
                let carouselItems = [];
                data.data.map((item) => {
                    let temp = {};
                    let heroFeaturedMediaID;
                    temp['heroTitle'] = item.title.rendered;
                    heroFeaturedMediaID = item.featured_media;
                    axios.get('http://dsnydev.wpengine.com/wp-json/wp/v2/media/' + heroFeaturedMediaID)
                        .then((dataMedia) => {
                            temp['heroImage'] = dataMedia.data.source_url;
                            carouselItems.push(temp);
                            c++;
                            if (c === 3) {
                                dispatch(
                                    {
                                        type: 'SET_CAROUSEL_TITLE',
                                        payload: carouselItems,
                                    }
                                )
                                successCallback();
                            }
                        })
                })
            })
    }
}

export function carouselPanelData(successCallback) {
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
                    }
                    else {
                        temp['panelItemType'] = item.items.type;
                    }
                    temp['panelItemIcon'] = 'http://www1.nyc.gov' + item.items.icon;
                    temp['panelItemStatus'] = item.items.status;
                    carouselPanelItems.push(temp);
                    dispatch(
                        {
                            type: 'SET_PANEL_ITEMS',
                            payload: carouselPanelItems,
                        }
                    )
                    successCallback();
                })

            })

    }

}

export function carouselPanelDataTemporary(successCallback) {
    return function (dispatch) {
        let carouselPanelItems = [];
        let temp = [];
        data.map(function (item) {
            item.items.map(function (items, index) {
                let temp1 = {}
                if (items.type == 'Parking') {
                    temp1['panelItemType'] = 'Alternate Side Parking';
                }
                else {
                    temp1['panelItemType'] = items.type;
                }
                temp1['panelItemIcon'] = 'http://www1.nyc.gov' + items.icon;
                temp1['panelItemStatus'] = items.status;
                temp.push(temp1);
            });
            carouselPanelItems.push(temp)
        })
        dispatch(
            {
                type: 'SET_PANEL_ITEMS_TEMPORARY',
                payload: carouselPanelItems
            })
        successCallback();

    }

}
// .catch((err) => {
//                 let carouselPanelItems = [];
//                 let temp = [];
//                 data.map(function (item) {
//                     item.items.map(function (items, index) {
//                         let temp1 = {}
//                         if (items.type == 'Parking') {
//                             temp1['panelItemType'] = 'Alternate Side Parking';
//                         }
//                         else {
//                             temp1['panelItemType'] = items.type;
//                         }
//                         temp1['panelItemIcon'] = 'http://www1.nyc.gov' + items.icon;
//                         temp1['panelItemStatus'] = items.status;
//                         temp.push(temp1);
//                     });
//                     carouselPanelItems.push(temp)
//                 })
//                 dispatch(
//                     {
//                         type: 'SET_PANEL_ITEMS_TEMPORARY',
//                         payload: carouselPanelItems
//                     })
//                 successCallback();

//             })