import axios from 'axios';
import * as types from '../constants/ActionTypes';
import {
	FETCH_FORM_GET_COMMERCIAL_ORGANICS_REQUEST_URL,
	FETCH_FORM_GET_COMPOST_REQUEST_URL,
	FETCH_PICKUP_ITEM_CATEGORIES_URL,
	FETCH_PICKUP_ITEM_SUB_CATEGORIES_URL,
	POST_FORM_COMMERCIAL_ORGANICS_REQUEST_URL,
	GET_UNAVAILABLE_DATES,
	FETCH_PICKUP_LOCATIONS_URL,
	IS_DISTRICT_ACTIVE,
	FETCH_TEN_PLUS_BUILDINGS_STATUS
} from '../constants/ApiConstants';
// import $ from 'jquery';

export function fetchFormObject(category) {
	return function(dispatch) {
		dispatch({type: types.FETCH_FORM_GET_COMPOST_REQUEST, payload: {},})
		axios.get(FETCH_FORM_GET_COMPOST_REQUEST_URL).then((data) => {
			dispatch({type: types.FETCH_FORM_GET_COMPOST_REQUEST, payload: data,})
		}).catch(function(error) {
		dispatch({type: types.ERROR_LOADING_REQUEST, payload: error,})
		});
	}

}

export function PickupReqGetItemCategories() {
	return function(dispatch) {
		axios.get(FETCH_PICKUP_ITEM_CATEGORIES_URL).then((data) => {
			dispatch({type: types.FETCH_PICKUP_ITEM_CATEGORIES, payload: data,})
		}).catch(function(error) {
			dispatch({type: types.ERROR_LOADING_REQUEST, payload: error,})
		});
	}
}

export function PickupLocations() {
	return function(dispatch) {
		axios.get(FETCH_PICKUP_LOCATIONS_URL).then((data) => {
		let pickuLocations = [];
		data.data.map((item) => {
				let temp = {};
						temp['Id'] = item.Id;
						temp['DisplayName'] = item.Name;
				pickuLocations.push(temp);
		})
			dispatch({type: types.FETCH_PICKUP_LOCATIONS, payload: pickuLocations})
		}).catch(function(error) {
			dispatch({type: types.ERROR_LOADING_REQUEST, payload: error})
		});
	}
}

export function PickupReqGetItemSubCategories(id) {
	return function(dispatch) {
		axios.get(FETCH_PICKUP_ITEM_SUB_CATEGORIES_URL.replace(':Id', id)).then((data) => {
			dispatch({type: types.FETCH_PICKUP_ITEM_SUB_CATEGORIES, payload: data,})
		}).catch(function(error) {
			dispatch({type: types.ERROR_LOADING_REQUEST, payload: error,})
		});
	}
}

export function IsDistrictActive(id) {
	return function(dispatch) {
		axios.get(IS_DISTRICT_ACTIVE.replace(':Id', id)).then((data) => {

			dispatch({type: types.IS_DISTRICT_ACTIVE, payload: data})
		}).catch(function(error) {
			dispatch({type: types.ERROR_LOADING_REQUEST, payload: error,})
		});
	}
}

export function GetUnavailableDates(Url) {
	return function(dispatch) {
		axios.get(Url).then((data) => {
			dispatch({type: types.GET_UNAVAILABLE_DATES, payload: data,})
		}).catch(function(error) {
			dispatch({type: types.ERROR_LOADING_REQUEST, payload: error,})
		});
	}
}

export function GetBulidingUnits(bbl) {
	return function(dispatch) {
		axios.get(FETCH_TEN_PLUS_BUILDINGS_STATUS.replace(':BBL', bbl)).then((data) => {
			dispatch({type: types.TEN_PLUS_BUILDINGS_STATUS, payload: data})
		}).catch(function(error) {
			dispatch({type: types.ERROR_LOADING_REQUEST, payload: error})
		});
	}
}

export function PickupReqGetItemSubCategoriesNew(id) {
	return function(dispatch) {
		axios.get(FETCH_PICKUP_ITEM_SUB_CATEGORIES_URL.replace(':Id', id)).then((data) => {
			dispatch({type: types.FETCH_PICKUP_ITEM_SUB_CATEGORIES_NEW, payload: data,})
		}).catch(function(error) {
			dispatch({type: types.ERROR_LOADING_REQUEST, payload: error,})
		});
	}

}

export function postFormObject(formObject, Url) {
	return function(dispatch) {
		dispatch({type: types.POST_FORM_REQUEST, payload: {},})
		axios.post(Url, formObject).then((data, headers) => {
			dispatch({type: types.POST_FORM_REQUEST, payload: data,})
		}).catch(function(error) {
			dispatch({type: types.ERROR_LOADING_REQUEST, payload: error,})
		});
	}
}

export function postFileObject(fileObject, Url) {
    return function(dispatch) {
		var formData = new FormData();

		Object.keys(fileObject).forEach(function(key) {
			formData.append(key, fileObject[key]);
		});


		if (fileObject.hasOwnProperty('files1') && fileObject.files1[0] !== undefined) {
			formData.append("image", fileObject.files1[0][0]);
		}
		if (fileObject.hasOwnProperty('files2') &&fileObject.files2[0] !== undefined) {
			formData.append("image", fileObject.files2[0][0]);
		}
		if (fileObject.hasOwnProperty('files3') && fileObject.files3[0] !== undefined) {
			formData.append("image", fileObject.files3[0][0]);
		}


		axios.post(Url, formData, {
			headers: {
			'Content-Type': 'multipart/form-data'
			}
		})
		.then(function (result) {
				console.log(result);
				}, function (error) {
				console.log(error);
	 		})
		}
}

export function fetchOrganicsForm(category) {
	return function(dispatch) {
		axios.get(FETCH_FORM_GET_COMMERCIAL_ORGANICS_REQUEST_URL).then((data) => {
			dispatch({type: types.FETCH_FORM_GET_COMMERCIAL_ORGANICS_REQUEST, payload: data,})
		}).catch(function(error) {
			dispatch({type: types.ERROR_LOADING_REQUEST, payload: error,})
		});
	}
}

export function postOrganicsForm(formObject) {
	return function(dispatch) {
		axios({
			method: 'post',
			url: POST_FORM_COMMERCIAL_ORGANICS_REQUEST_URL,
			data: formObject,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		}).then((data) => {
			dispatch({type: types.POST_FORM_COMMERCIAL_ORGANICS_REQUEST, payload: data,})
		}).catch(function(error) {
			dispatch({type: types.ERROR_LOADING_REQUEST, payload: error,})
			if (error.response) {}
		});
	}
}
