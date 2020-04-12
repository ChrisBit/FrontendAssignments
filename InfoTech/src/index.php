<?php $pageID = 'index'; ?>
<?php include 'head.php' ?>
	<link href="css/pages/frontpage.css" rel="stylesheet">
	<script src="js/Slideshow.js"></script>
<?php include "header.php"; ?>
	<article>

		<section class="slideshow">

			<div class="slide fade">
				<img class="slide-img" src="img/backgrounds/b1.jpeg" alt="background">
				<a href="byggekortleser.php">
					<div class="slide-overlay">
						<h2>Byggekortleser med adgangskontroll
						</h2>
						<p> 
							Infotech tilbyr nå Byggekortleser med adgangskontroll
						</p>
						<img src="img/products/byggekortleser.png" alt="byggekortlese produkt">
					</div>
				</a>
			</div>

			<div class="slide fade">
				<img class="slide-img" src="img/backgrounds/b2.jpeg" alt="background">
				<a href="itbase.php">
					<div class="slide-overlay">
						<h2>ITBase</h2>
						<p>Skreddersydd webhotell for byggeprosjekter</p>
						<img src="img/products/itbase.png" alt="itbase produkt">
					</div>
				</a>
			</div>

			<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
			<a class="next" onclick="plusSlides(1)">&#10095;</a>

		</section>

		<div style="text-align:center">
			<span class="dot" onclick="currentSlide(1)"></span>
			<span class="dot" onclick="currentSlide(2)"></span>
		</div>

		<section class="wrapper">
			<h2>INFOTECH AS</h2>
			<p>
				Infotech AS har som mål å hjelpe bedrifter innen bygg- og anleggsbransjen til å spare tid og penger og
				øke sikkerheten på byggeplassen.
			</p>
		</section>

	</article>
<?php include 'foot.php' ?>