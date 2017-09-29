const ROOT_WORDPRESS_URL = 'http://dsnydev.wpengine.com/wp-json/';

const constructWpUrl = url => `${ROOT_WORDPRESS_URL}${url}${url.indexOf('?') === -1
  ? '?'
  : ''}`;

export const MEDIAS_ALL_URL = `${ROOT_WORDPRESS_URL}wp/v2/media/`;
export const MEDIA_URL = `${ROOT_WORDPRESS_URL}wp/v2/media/id`;
export const SUB_SECTION_HEADER_URL = constructWpUrl('wp/v2/pagesection?slug=id');
export const PRESS_RELEASE_SUB_LIST_URL = `${ROOT_WORDPRESS_URL}wp_query/args?post_type=press_release&order=DESC&orderby=date&posts_per_page=5`;
export const FETCH_REPORT_CARD_SUB_LIST_URL = `${ROOT_WORDPRESS_URL}wp_query/args?post_type=card&cat=52&order=ASC&meta_key=rank&orderby=meta_value_num&posts_per_page=10`;
export const FETCH_STATS_CARD_SUB_LIST_URL = `${ROOT_WORDPRESS_URL}wp_query/args?post_type=card&cat=53&order=DESC&meta_key=rank&orderby=meta_value_num`;
export const FETCH_LAWS_SUB_LIST_URL = `${ROOT_WORDPRESS_URL}wp_query/args?post_type=card&cat=54&order=DESC&meta_key=rank&orderby=meta_value_num`;
export const FETCH_EDUCATIONAL_MATERIALS_PROMOTIONAL_SUB_LIST_URL = `${ROOT_WORDPRESS_URL}wp_query/args?post_type=card&cat=61&order=ASC&meta_key=rank&orderby=meta_value_num&posts_per_page=5`;
export const FETCH_PRESS_RELEASE_DETAILS_URL = constructWpUrl('wp/v2/press_release/?slug=id');
