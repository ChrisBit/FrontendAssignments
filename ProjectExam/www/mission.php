<?php $pageID = 'mission'; ?>
<?php include "header.php"; ?>
	<article class="main-content">

		<div class="parallax parallax-img1">
			<div class="img-wrapper">
				<img src="assets/img/logos/spacex.png">
			</div>
		</div>

		<div class="wrapper parallax-block">
			<p>SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in
				2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other
				planets.</p>
		</div>

		<div class="parallax parallax-img1">
			<div class="img-wrapper">
				<img id="falcon-9" src="assets/img/illustrations/falcon9_transparent.png">
			</div>

			<div class="button-wrapper">
				<a class="button" data-toggle="modal" href="#F9_modal">View specs</a>
			</div>
		</div>

		<div id="F9_modal" class="modal" tabindex="-1">
			<div class="modal-content">
				<span data-dismiss="modal" class="close">&times;</span>

				<p id="falcon-9-modalinfo"></p>
			</div>
		</div>

		<div class="wrapper parallax-block">
			<p>Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of
				satellites and the Dragon spacecraft into orbit. Falcon 9 is the first orbital class rocket capable of
				reflight.
			</p>
		</div>

		<div class="parallax parallax-img2">
			<div class="img-wrapper">
				<img id="dragon-2" src="assets/img/illustrations/dragon2_transparent.png">
			</div>

		</div>

		<div class="wrapper parallax-block">
			<p>Dragon is a free-flying spacecraft designed to deliver both cargo and people to orbiting destinations</p>
		</div>


		<div class="parallax parallax-img-dragon">
			<div class="button-wrapper">
				<a class="button" href="http://www.spacex.com/dragon" target="_blank">View more</a>
			</div>
		</div>

		<div class="wrapper parallax-block">
			<p>
				Step inside Crew Dragon, SpaceX’s next-generation spacecraft designed to carry humans to the
				International Space Station.
			</p>
		</div>

		<div class="parallax parallax-img3">
		</div>

		<div class="wrapper parallax-block">
			<p>
				NASA has signed a contract to procure up to six crewed flights to the International Space Station under
				the Commercial Crew Development. SpaceX will conduct an automated test mission to the ISS in August
				2018, and carry its first crew on a
				demonstration flight in December 2018.
			</p>
		</div>

		<div class="parallax parallax-img3">
		</div>

	</article>
	<script>
		$(function () {
			getF9Info();
		});
	</script>
<?php include 'footer.php' ?>