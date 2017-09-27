import axios from 'axios';


export function AboutData(successCallback) {
    return function (dispatch) {
        axios.get('http://dsnydev.wpengine.com/wp-json/wp/v2/pages/?slug=about-dsny')
            .then((response) => {
                console.log(234);
                console.log(response.data);
                    dispatch(
                        {
                            type: 'SET_ABOUT_TITLE',
                            payload: response.data,
                        }
                    )
                    successCallback();
                })
    }
}

export function AboutLeadership(successCallback) {
    return function (dispatch) {
        axios.get('http://dsnydev.wpengine.com/wp-json/wp/v2/pagesection/?slug=leadership')
            .then((response) => {
              alert('Leadership');
                console.log(response.data[0]);
                let ProfileId = response.data[0].id;
                axios.get('http://dsnydev.wpengine.com/wp-json/wp/v2/pagesection/?slug=leadership?feature_image=' + ProfileId)
                .then((response)=>{
                  alert('ID');
                })
            })
    }
}
