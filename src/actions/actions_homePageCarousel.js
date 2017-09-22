import axios from 'axios';
import $ from 'jquery';


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
        axios.get('http://dsnydev.staging.wpengine.com/wp-json/wp_query/args?post_type=herocard&orderby=date&order=DESC')
            .then((data) => {
                let c = 0;
                console.log(data.data)
                let carouselItems = [];
                data.data.map((item) => {
                    let temp = {};
                    let heroFeaturedMediaID;
                    temp['heroTitle'] = item.title.rendered;
                    heroFeaturedMediaID = item.featured_media;
                    axios.get('http://dsnydev.staging.wpengine.com/wp-json/wp/v2/media/' + heroFeaturedMediaID)
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