import axios from 'axios';
import * as types from '../constants/ActionTypes';
import {
	FETCH_FORM_GET_COMMERCIAL_ORGANICS_REQUEST_URL,
	FETCH_FORM_GET_COMPOST_REQUEST_URL,
	FETCH_PICKUP_ITEM_CATEGORIES_URL,
	FETCH_PICKUP_ITEM_SUB_CATEGORIES_URL,
	POST_FORM_COMMERCIAL_ORGANICS_REQUEST_URL,
	GET_UNAVAILABLE_DATES,
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

export function GetUnavailableDates(id) {
	return function(dispatch) {
		axios.get(GET_UNAVAILABLE_DATES.replace(':Id', id)).then((data) => {
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
		
		var inputs = Array.from(document.querySelectorAll('#form input, #form .dropdown-toggle'));
		inputs.forEach(input => {
			 formData.append(input.name, fileObject[input.name]);
		 });

		formData.append("image", fileObject.files1[0][0]);
		formData.append("image", fileObject.files2[0][0]);
		formData.append("image", fileObject.files3[0][0]);
		
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
