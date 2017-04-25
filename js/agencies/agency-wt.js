var prod_dcsId_val = "dcs22203du8fhhmjb00z60fsc_7q2f";


function prependClass(sel, strClass) {
    var $el = jQuery(sel);

    /* prepend class */
    var classes = $el.attr('class');
    classes = strClass +' ' +classes;
    $el.attr('class', classes);
}


$( document ).ready(function() {

$("a.main-filter-category:contains('Nonprofits & Agencies')").addClass( "longTxtMenu" );
$("a.main-filter-category:contains('Nonprofits & Agencies')").removeAttr("style");

//$('a[href^="/site/dsny/recycling-and-garbage/nonprofits-and-agencies.page').removeAttr("style");

//prependClass("a:contains('Nonprofits & Agencies')","longTxtMenu");


});