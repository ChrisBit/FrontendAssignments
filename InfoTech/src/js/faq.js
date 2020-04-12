jQuery(document).ready(function () {

	// adds a pointer emoji to all questions
	jQuery('<span class="faq-pointer">&#8597;</span>').appendTo('.question > p');

	// faq
	jQuery(document).on('click', '.question', function (e) {
		jQuery(this).closest('div').toggleClass('open');
		jQuery(this).children('.answer').slideToggle();
	});

	// stops click on answer from reaching document
	jQuery(".answer").on("click", function (event) {
		event.stopPropagation();
	});

});
