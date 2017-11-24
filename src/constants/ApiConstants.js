const ROOT_WORDPRESS_URL = 'http://dsnydev.wpengine.com/wp-json/';

const REST_WEBAPI_URL = 'http://msdwvw-dsndny01.csc.nycnet/DSNYApi/api/';
const REST_WEBAPI_EPICKUP_URL = 'http://msdwvw-dsndny01.csc.nycnet/ePickupsAPI/api/';
const constructWpUrl = url => `${ROOT_WORDPRESS_URL}${url}${url.indexOf('?') === -1
  ? '?'
  : ''}`;
export const WORDPRESS_ROOT_URL = `${ROOT_WORDPRESS_URL}`;
export const HOME_PAGE_DATA_URL = `${ROOT_WORDPRESS_URL}dsny/v1/getPageData?name=home`
export const NEWS_PAGE_DATA_URL = `${ROOT_WORDPRESS_URL}dsny/v1/getNewsByDateRange?month_year=:MonthYear`
export const FETCH_NEWS_DETAILS_URL = constructWpUrl('dsny/v1/getNewsArticlePage?name=id');

export const RID_OF_KEYWORDS_URL = `${ROOT_WORDPRESS_URL}dsny/v1/getDisposalKeywordList`
export const RID_OF_SEARCH_RESULTS_URL = `${ROOT_WORDPRESS_URL}dsny/v1/searchDisposalItems?s`

export const SITE_SEARCH_KEYWORDS_URL = `${ROOT_WORDPRESS_URL}dsny/v1/getSiteSearchKeywordList`
export const SITE_SEARCH_RESULTS_URL = `${ROOT_WORDPRESS_URL}dsny/v1/searchSite?s`

export const RID_OF_ITEM_DETAILS_URL = `${ROOT_WORDPRESS_URL}dsny/v1/getDisposalItemPage?name`
export const COLLECTION_SCHEDULE_URL = "http://msdwvw-dsndny01.csc.nycnet/DSNYGeoCoder/api/DSNYCollection/CollectionSchedule/"
export const HOLIDAY_DATA_URL = `${REST_WEBAPI_URL}Holidays/CheckSanitationHolidayToday`
export const CONTACT_PAGE_DATA_URL = `${ROOT_WORDPRESS_URL}dsny/v1/getPageData?name=contact-page`

// zzzzexport const MEDIAS_ALL_URL = `${ROOT_WORDPRESS_URL}wp/v2/media/`;
export const MEDIA_URL = `${ROOT_WORDPRESS_URL}wp/v2/media/id`;
export const FETCH_PRESS_RELEASE_DETAILS_URL = constructWpUrl('dsny/v1/getPressReleasePage?name=id');
export const FETCH_PRESS_RELEASE_LIST_URL = constructWpUrl('dsny/v1/getPressReleaseListPage?year=:Year');
export const FETCH_LANDING_PAGE_URL = `${ROOT_WORDPRESS_URL}dsny/v1/getPageData?name=:slug`;
export const FETCH_PAGE_DATA_URL = `${ROOT_WORDPRESS_URL}dsny/v1/getPageData?name=:slug`;

export const FETCH_DROPDOWN_LIST = `${ROOT_WORDPRESS_URL}dsny/v1/getDropdownOptions?cat=:category`;
export const FETCH_BUREAUS_DETAILS_URL = constructWpUrl('dsny/v1/getPressReleasePage?name=id');

//export const FETCH_EVENTS_SUB_LIST_URL = `${REST_WEBAPI_URL}Events/GetUpcomingEvents?eventSource=DSNY`;
export const FETCH_EVENTS_SUB_LIST_URL = `${REST_WEBAPI_URL}Events/GetAllByBorough?borough=:borough`;
export const FETCH_EVENT_DETAILS_URL = `${REST_WEBAPI_URL}Events/GetEventByID?eventID=:eventID`;
export const FETCH_LOCATION_LIST_URL = `${REST_WEBAPI_URL}garages`;


//Forms
export const FETCH_FORM_GET_COMPOST_REQUEST_URL = `${REST_WEBAPI_URL}compostrequests/1`;
export const PSOT_FORM_COMPOST_REQUEST_URL = `${REST_WEBAPI_URL}compostrequests`;
export const PSOT_COLLECTION_BIN_REGISTRATION_URL = `${REST_WEBAPI_URL}collectionbinregistration`;
export const PSOT_FORM_DEAD_ANIMAL_URL = `${REST_WEBAPI_URL}deadanimals`;
export const PSOT_FORM_ORGANICS_BIN_URL = `${REST_WEBAPI_URL}organicsbinreplacement`;
export const PSOT_FORM_STREET_SIDEWALK_OBSTRUCTION_URL = `${REST_WEBAPI_URL}obstructions`;
export const PSOT_FORM_LITTER_BASKET_URL = `${REST_WEBAPI_URL}litterbaskets`;
export const PSOT_FORM_OVERFLOWING_LITTER_BASKET_URL = `${REST_WEBAPI_URL}overflowinglitterbaskets`;
export const PSOT_FORM_DISABILITY_SERVICES_URL = `${REST_WEBAPI_URL}disabilityservices`;
export const PSOT_LOT_CLEANING_URL = `${REST_WEBAPI_URL}lotcleanings`;
export const PSOT_COLLECTION_BIN_OM_PUBLIC_PROPERTY_URL = `${REST_WEBAPI_URL}collectionbinonpublicproperty`;
export const PSOT_FORM_EEO_COMPLAINTS_URL = `${REST_WEBAPI_URL}eeocomplaints`;
export const PSOT_FORM_WEED_REMOVAL_PROPERTY_URL = `${REST_WEBAPI_URL}weedremoval`;
export const PSOT_FORM_SITE_VISIT_REQUEST  = `${REST_WEBAPI_URL}sitevisitrequest`;
export const PSOT_FORM_MASTER_COMPOST_REQST = `${REST_WEBAPI_URL}mastercompostercourse`;
export const POST_FORM_ADOPT_BASKET_URL = `${REST_WEBAPI_URL}adoptedbaskets`
export const POST_FORM_RECYCLABLE_MATERIAL_URL = `${REST_WEBAPI_URL}recyclablematerialthefts`;
export const POST_FORM_FAILURE_STORE_RECEPTACLES_URL = `${REST_WEBAPI_URL}failuretostorereceptaclecomplaints`;
export const POST_FORM_EVNT_PARTICIP_REQ_URL=`${REST_WEBAPI_URL}eventparticipationrequests`;
//10+ units pluto call
export const POST_FORM_COLLECTION_BIN_REPORT = `${REST_WEBAPI_URL}collectionBinAnnualReports`;
export const FETCH_TEN_PLUS_BUILDINGS_STATUS = `https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/MAPPLUTO/FeatureServer/0/query?where=bbl=:BBL&outFields=UnitsRes,UnitsTotal&returnGeometry=false&f=json`

//Forms - E.Waste Pickup Request
export const FETCH_PICKUP_ITEM_CATEGORIES_URL = `${REST_WEBAPI_EPICKUP_URL}PickupRequest/GetItemCategories`;
export const FETCH_PICKUP_ITEM_SUB_CATEGORIES_URL = `${REST_WEBAPI_EPICKUP_URL}PickupRequest/GetItemSubCategories?CategoryID=:Id`;
export const IS_DISTRICT_ACTIVE = `${REST_WEBAPI_EPICKUP_URL}PickupRequest/IsDistrictActive?districtCode=:Id`;
export const GET_UNAVAILABLE_DATES = `${REST_WEBAPI_EPICKUP_URL}PickupRequest/GetUnavailableDates?District=:Id&IsInsert=true`;

export const POST_FORM_COMMERCIAL_ORGANICS_REQUEST_URL = `${REST_WEBAPI_URL}commercialorganicsonsiteprocessingregistration`;
export const FETCH_FORM_GET_COMMERCIAL_ORGANICS_REQUEST_URL = `${REST_WEBAPI_URL}commercialorganicsonsiteprocessingregistration/new`;
