$(document).ready(function(){
	// HTML markup implementation, cover mode
	$( '#menu' ).multilevelpushmenu({
		containersToPush: [$( '#page' )],
		mode: 'cover'
	});
});