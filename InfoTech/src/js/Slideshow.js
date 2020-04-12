var slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
	showSlides(slideIndex += n);
}

// dot controls
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("slide");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" dot-active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " dot-active";
}

function auto() {
	showSlides(slideIndex += 1); // change slide
	setTimeout(auto, 4000); // do this every 4 sec
}

jQuery(document).ready(function () {
	auto();
});
