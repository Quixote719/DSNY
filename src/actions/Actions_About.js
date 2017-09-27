import axios from 'axios';


export function AboutData(successCallback) {
    return function (dispatch) {
        axios.get('http://dsnydev.wpengine.com/wp-json/wp/v2/pages/?slug=about-dsny')
            .then((response) => {
                // alert('About');
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
