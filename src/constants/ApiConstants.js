const ROOT_WORDPRESS_URL = 'http://dsnydev.wpengine.com/wp-json/';

const REST_WEBAPI_URL = 'http://msdwvw-dsndny01.csc.nycnet/DSNYApi/api/';

const constructWpUrl = url => `${ROOT_WORDPRESS_URL}${url}${url.indexOf('?') === -1
  ? '?'
  : ''}`;
export const WORDPRESS_ROOT_URL = `${ROOT_WORDPRESS_URL}`;
export const HOME_PAGE_DATA_URL = `${ROOT_WORDPRESS_URL}dsny/v1/getPageData?name=home`
export const RID_OF_KEYWORDS_URL = `${ROOT_WORDPRESS_URL}dsny/v1/getDisposalKeywordList`
export const RID_OF_SEARCH_RESULTS_URL = `${ROOT_WORDPRESS_URL}dsny/v1/searchDisposalItems?s`
export const MEDIAS_ALL_URL = `${ROOT_WORDPRESS_URL}wp/v2/media/`;
export const MEDIA_URL = `${ROOT_WORDPRESS_URL}wp/v2/media/id`;
export const SUB_SECTION_HEADER_URL = constructWpUrl('wp/v2/pagesection?slug=id');
export const FETCH_PRESS_RELEASE_DETAILS_URL = constructWpUrl('dsny/v1/getPressReleasePage?name=id');
export const FETCH_PRESS_RELEASE_LIST_URL = constructWpUrl('dsny/v1/getPageData?name=press-releases');
export const FETCH_LANDING_PAGE_URL = `${ROOT_WORDPRESS_URL}dsny/v1/getPageData?name=:category`;
export const FETCH_CARD_DETAILS_URL = `${ROOT_WORDPRESS_URL}dsny/v1/getPageData?name=:category`;
export const FETCH_DROPDOWN_LIST = `${ROOT_WORDPRESS_URL}dsny/v1/getDropdownOptions?cat=:category`;
export const FETCH_BUREAUS_DETAILS_URL = constructWpUrl('dsny/v1/getPressReleasePage?name=id');

//export const FETCH_EVENTS_SUB_LIST_URL = `${REST_WEBAPI_URL}Events/GetUpcomingEvents?eventSource=DSNY`;
export const FETCH_EVENTS_SUB_LIST_URL = `${REST_WEBAPI_URL}Events/GetAllByBorough?borough=:borough`;
export const FETCH_EVENT_DETAILS_URL = `${REST_WEBAPI_URL}Events/GetEventByID?eventID=:eventID`;
export const FETCH_LOCATION_LIST_URL = `${REST_WEBAPI_URL}garages`;
