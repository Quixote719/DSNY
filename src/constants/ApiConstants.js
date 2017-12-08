
/* Environment
Dev - 0
Staging - 1
Prod - 2
 */
export const Env = 1;

const ROOT_WORDPRESS_URL = (Env) =>  {
  switch (Env){
    case 0:
    return 'http://dsnydev.wpengine.com/wp-json/';
    case 1:
    return 'http://dsnydev.staging.wpengine.com/wp-json/';
    case 2:
      return 'http://dsnydev.staging.wpengine.com/wp-json/';
      default:
      return 'http://dsnydev.staging.wpengine.com/wp-json/';
  }

  };

export const REST_WEBAPI_URL  = (Env)  =>{
  switch (Env){
    case 0:
    return 'http://msdwvw-dsndny01.csc.nycnet/DSNYApi/api/';
    case 1:
    return 'https://msswvw-dnsdnyvp.csc.nycnet/DSNYApi/api/';
    case 2:
      return 'https://msswvw-dnsdnyvp.csc.nycnet/DSNYApi/api/';
      default:
      return 'https://msswvw-dnsdnyvp.csc.nycnet/DSNYApi/api/';
  }
};

export const REST_WEBAPI_EPICKUP_URL = (Env) => {
  switch (Env){
    case 0:
    return 'http://msdwvw-dsndny01.csc.nycnet/ePickupsAPI/api/';
    case 1:
    return 'https://msswvw-dnsdnyvp.csc.nycnet/ePickupsAPI/api/';
    case 2:
      return 'https://msswvw-dnsdnyvp.csc.nycnet/ePickupsAPI/api/';
      default:
      return 'https://msswvw-dnsdnyvp.csc.nycnet/ePickupsAPI/api/';
  }
};



export const REST_WEBAPI_GEOCODER_URL  = (Env) => {
  switch (Env){
    case 0:
    return 'http://msdwvw-dsndny01.csc.nycnet/DSNYGeoCoder/api/';
    case 1:
    return 'https://msswvw-dnsdnyvp.csc.nycnet/DSNYGeoCoder/api/';
    case 2:
      return 'https://msswvw-dnsdnyvp.csc.nycnet/DSNYGeoCoder/api/';
      default:
      return 'https://msswvw-dnsdnyvp.csc.nycnet/DSNYGeoCoder/api/';
  }
};

const constructWpUrl = url => `${ROOT_WORDPRESS_URL(Env)}${url}${url.indexOf('?') === -1
  ? '?'
  : ''}`;
export const WORDPRESS_ROOT_URL = `${ROOT_WORDPRESS_URL(Env)}`;
export const HOME_PAGE_DATA_URL = `${ROOT_WORDPRESS_URL(Env)}dsny/v1/getPageData?name=home`
export const NEWS_PAGE_DATA_URL = `${ROOT_WORDPRESS_URL(Env)}dsny/v1/getNewsByDateRange?month_year=:MonthYear`
export const FETCH_NEWS_DETAILS_URL = constructWpUrl('dsny/v1/getNewsArticlePage?name=id');

export const RID_OF_KEYWORDS_URL = `${ROOT_WORDPRESS_URL(Env)}dsny/v1/getDisposalKeywordList`
export const RID_OF_SEARCH_RESULTS_URL = `${ROOT_WORDPRESS_URL(Env)}dsny/v1/searchDisposalItems?s`

export const SITE_SEARCH_KEYWORDS_URL = `${ROOT_WORDPRESS_URL(Env)}dsny/v1/getSiteSearchKeywordList`
export const SITE_SEARCH_RESULTS_URL = `${ROOT_WORDPRESS_URL(Env)}dsny/v1/searchSite?s`

export const SERVICE_REQUEST_URL = `${REST_WEBAPI_URL(Env)}servicerequests/`

export const RID_OF_ITEM_DETAILS_URL = `${ROOT_WORDPRESS_URL(Env)}dsny/v1/getDisposalItemPage?name`
export const COLLECTION_SCHEDULE_URL = `${REST_WEBAPI_GEOCODER_URL(Env)}DSNYCollection/CollectionSchedule/`
export const HOLIDAY_DATA_URL = `${REST_WEBAPI_URL(Env)}Holidays/CheckSanitationHolidayToday`
export const CONTACT_PAGE_DATA_URL = `${ROOT_WORDPRESS_URL(Env)}dsny/v1/getPageData?name=contact-page`

// zzzzexport const MEDIAS_ALL_URL = `${ROOT_WORDPRESS_URL(Env)}wp/v2/media/`;
export const MEDIA_URL = `${ROOT_WORDPRESS_URL(Env)}wp/v2/media/id`;
export const FETCH_PRESS_RELEASE_DETAILS_URL = constructWpUrl('dsny/v1/getPressReleasePage?name=id');
export const FETCH_PRESS_RELEASE_LIST_URL = constructWpUrl('dsny/v1/getPressReleaseListPage?year=:Year');
export const FETCH_LANDING_PAGE_URL = `${ROOT_WORDPRESS_URL(Env)}dsny/v1/getPageData?name=:slug`;
export const FETCH_PAGE_DATA_URL = `${ROOT_WORDPRESS_URL(Env)}dsny/v1/getPageData?name=:slug`;

export const FETCH_DROPDOWN_LIST = `${ROOT_WORDPRESS_URL(Env)}dsny/v1/getDropdownOptions?cat=:category`;
export const FETCH_BUREAUS_DETAILS_URL = constructWpUrl('dsny/v1/getPressReleasePage?name=id');

//export const FETCH_EVENTS_SUB_LIST_URL = `${REST_WEBAPI_URL(Env)}Events/GetUpcomingEvents?eventSource=DSNY`;
export const FETCH_EVENTS_SUB_LIST_URL = `${REST_WEBAPI_URL(Env)}Events/GetAllByBorough?borough=:borough`;
export const FETCH_EVENT_DETAILS_URL = `${REST_WEBAPI_URL(Env)}Events/GetEventByID?eventID=:eventID`;
export const FETCH_LOCATION_LIST_URL = `${REST_WEBAPI_URL(Env)}garages`;


//Forms
export const FETCH_FORM_GET_COMPOST_REQUEST_URL = `${REST_WEBAPI_URL(Env)}compostrequests/1`;
export const PSOT_FORM_COMPOST_REQUEST_URL = `${REST_WEBAPI_URL(Env)}compostrequests`;
export const PSOT_FORM_COLLECTION_BIN_REGISTRATION_URL = `${REST_WEBAPI_URL(Env)}organicscollectionrequests`;
export const PSOT_COLLECTION_BIN_REGISTRATION_URL = `${REST_WEBAPI_URL(Env)}collectionbinregistration`;
export const PSOT_FORM_DEAD_ANIMAL_URL = `${REST_WEBAPI_URL(Env)}deadanimals`;
export const PSOT_FORM_ORGANICS_BIN_URL = `${REST_WEBAPI_URL(Env)}organicsbinreplacement`;
export const PSOT_FORM_STREET_SIDEWALK_OBSTRUCTION_URL = `${REST_WEBAPI_URL(Env)}obstructions`;
export const PSOT_FORM_LITTER_BASKET_URL = `${REST_WEBAPI_URL(Env)}litterbaskets`;
export const PSOT_FORM_OVERFLOWING_LITTER_BASKET_URL = `${REST_WEBAPI_URL(Env)}overflowinglitterbaskets`;
export const PSOT_FORM_DISABILITY_SERVICES_URL = `${REST_WEBAPI_URL(Env)}disabilityservices`;
export const PSOT_LOT_CLEANING_URL = `${REST_WEBAPI_URL(Env)}lotcleanings`;
export const PSOT_REQUEST_COLLECTION_URL = `${REST_WEBAPI_URL(Env)}collectionServiceRequests`;
export const PSOT_NYC_AGENCY_RECYCLING_URL = `${REST_WEBAPI_URL(Env)}NycAgencyRecyclingPlanAnnualReports`;
export const PSOT_COLLECTION_BIN_OM_PUBLIC_PROPERTY_URL = `${REST_WEBAPI_URL(Env)}collectionbinonpublicproperty`;
export const PSOT_FORM_EEO_COMPLAINTS_URL = `${REST_WEBAPI_URL(Env)}eeocomplaints`;
export const PSOT_FORM_WEED_REMOVAL_PROPERTY_URL = `${REST_WEBAPI_URL(Env)}weedremoval`;
export const PSOT_FORM_SITE_VISIT_REQUEST  = `${REST_WEBAPI_URL(Env)}sitevisitrequest`;
export const PSOT_FORM_MASTER_COMPOST_REQST = `${REST_WEBAPI_URL(Env)}mastercompostercourse`;
export const POST_FORM_ADOPT_BASKET_URL = `${REST_WEBAPI_URL(Env)}adoptedbaskets`
export const POST_FORM_RECYCLABLE_MATERIAL_URL = `${REST_WEBAPI_URL(Env)}recyclablematerialthefts`;
export const POST_FORM_FAILURE_STORE_RECEPTACLES_URL = `${REST_WEBAPI_URL(Env)}failuretostorereceptaclecomplaints`;
export const POST_FORM_EVNT_PARTICIP_REQ_URL=`${REST_WEBAPI_URL(Env)}eventparticipationrequests`;
export const POST_FORM_TRUCK_SPILLAGE_URL= `${REST_WEBAPI_URL(Env)}truckspillages`;
export const POST_FORM_PRVT_RCPTBLE_CMPLNTS_URL= `${REST_WEBAPI_URL(Env)}privatereceptaclecomplaints`;

//10+ units pluto call
export const POST_FORM_COLLECTION_BIN_REPORT = `${REST_WEBAPI_URL(Env)}collectionBinAnnualReports`;
export const FETCH_TEN_PLUS_BUILDINGS_STATUS = `https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/MAPPLUTO/FeatureServer/0/query?where=bbl=:BBL&outFields=UnitsRes,UnitsTotal&returnGeometry=false&f=json`

//Forms - Bulk Pickup Request
export const FETCH_PICKUP_LOCATIONS_URL = `${REST_WEBAPI_EPICKUP_URL(Env)}BulkPickups/GetPickupLocations`;
export const POST_BULK_PICKUP_REQUEST = `${REST_WEBAPI_EPICKUP_URL(Env)}BulkPickups/AddUpdatePickUpRequest`;

//Forms - CFC Recovery Appointment Request

export const POST_CFC_RECOVERY_APP_REQ = `${REST_WEBAPI_URL(Env)}cfcrecoveryappointment`;

//Forms - E.Waste Pickup Request
export const FETCH_PICKUP_ITEM_CATEGORIES_URL = `${REST_WEBAPI_EPICKUP_URL(Env)}PickupRequest/GetItemCategories`;
export const FETCH_PICKUP_ITEM_SUB_CATEGORIES_URL = `${REST_WEBAPI_EPICKUP_URL(Env)}PickupRequest/GetItemSubCategories?CategoryID=:Id`;
export const IS_DISTRICT_ACTIVE = `${REST_WEBAPI_EPICKUP_URL(Env)}PickupRequest/IsDistrictActive?districtCode=:Id`;
export const GET_UNAVAILABLE_DATES = `${REST_WEBAPI_EPICKUP_URL(Env)}PickupRequest/GetUnavailableDates?District=:Id&IsInsert=true`;
export const POST_E_WASTE_PICKUP_REQUEST = `${REST_WEBAPI_EPICKUP_URL(Env)}PickupRequest/AddUpdatePickUpRequest`;

export const POST_FORM_COMMERCIAL_ORGANICS_REQUEST_URL = `${REST_WEBAPI_URL(Env)}commercialorganicsonsiteprocessingregistration`;
export const FETCH_FORM_GET_COMMERCIAL_ORGANICS_REQUEST_URL = `${REST_WEBAPI_URL(Env)}commercialorganicsonsiteprocessingregistration/new`;
