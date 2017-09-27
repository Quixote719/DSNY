import axios from 'axios';


export function AboutData() {
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
                    // successCallback();
                })
    }
}

export function AboutLeadership() {
    return function (dispatch) {
        axios.get('http://dsnydev.wpengine.com/wp-json/wp/v2/pagesection/?slug=leadership')
            .then((response) => {
                console.log(response.data[0]);
                let ProfileId = response.data[0].feature_image.ID;
                console.log(ProfileId);
                console.log('!!!')
                axios.get('http://dsnydev.wpengine.com/wp-json/wp/v2/media/' + ProfileId)
                .then((response)=>{
                  console.log('L');
                  console.log(response.data);
                  console.log(response.data.source_url);
                  dispatch(
                      {
                          type: 'SET_ABOUT_LEADERSHIP',
                          payload: response.data,
                      }
                  )
                })
            })
    }
}
