jQuery(document).ready(function () {

	// open mobile menu
	jQuery(document).on('click', '#burger-menu', function (e) {
		jQuery('body').toggleClass('open-menu');
		jQuery('.main-menu ul:not(.sub-menu)').slideToggle();
	});

	// close mobile menu
	jQuery(document).on('click', '#x-menu', function (e) {
		jQuery('body').toggleClass('open-menu');
		jQuery('.main-menu ul:not(.sub-menu)').slideToggle();
	});

});
