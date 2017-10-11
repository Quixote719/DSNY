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
export const PRESS_RELEASE_SUB_LIST_URL = `${ROOT_WORDPRESS_URL}wp_query/args?post_type=press_release&order=DESC&orderby=date&posts_per_page=5`;
export const FETCH_REPORT_CARD_SUB_LIST_URL = `${ROOT_WORDPRESS_URL}wp_query/args?post_type=card&cat=52&order=ASC&meta_key=rank&orderby=meta_value_num&posts_per_page=5`;
export const FETCH_STATS_CARD_SUB_LIST_URL = `${ROOT_WORDPRESS_URL}wp_query/args?post_type=card&cat=53&order=DESC&meta_key=rank&orderby=meta_value_num`;
export const FETCH_LAWS_SUB_LIST_URL = `${ROOT_WORDPRESS_URL}wp_query/args?post_type=card&cat=54&order=DESC&meta_key=rank&orderby=meta_value_num`;
export const FETCH_EDUCATIONAL_MATERIALS_PROMOTIONAL_SUB_LIST_URL = `${ROOT_WORDPRESS_URL}wp_query/args?post_type=card&cat=61&order=ASC&meta_key=rank&orderby=meta_value_num&posts_per_page=5`;
export const FETCH_PRESS_RELEASE_DETAILS_URL = constructWpUrl('wp/v2/press_release/?slug=id');
export const FETCH_PRESS_RELEASE_LIST_URL = constructWpUrl('wp/v2/press_release?after=:Year-01-01T00:00:49&before=:Year-12-31T00:00:49&orderby=date&order=desc');


export const FETCH_EVENTS_SUB_LIST_URL = `${REST_WEBAPI_URL}Events/GetUpcomingEvents?eventSource=DSNY`;
