<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="author" content="Kristoffer Eide">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>SpaceX</title>
	<link href="assets/css/vendor/reset.css" rel="stylesheet">
	<link href="assets/css/main.css" rel="stylesheet">
	<script src="assets/js/vendor/jquery-min.js"></script>
	<script src="assets/js/vendor/bootstrap.min.js"></script>
	<script src="assets/js/global-min.js"></script>
	<link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,600,700" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Karla:400,700" rel="stylesheet">
	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBnm_FegjgjPAhnA2RsV_DNK8u6cNgCa5w"></script>
</head>

<?php
if ( $pageID ) {
	echo '<body class="' . $pageID . '">';
} else {
	echo '<body>';
}
?>

<header>

	<div class="wrapper">
		<div class="logo">
			<a href="index.php">Sp<span>X</span><span>-DM2</span></a>
		</div>
	</div>

	<nav class="main-menu">
		<div class="wrapper">
			<p class="menu-icon" id="burger-menu">&#9776;</p>
			<p class="menu-icon" id="x-menu">&#x2716;</p>
			<ul>
				<li>
					<a <?php if ( $pageID == 'mission' ) {
						echo 'class="active"';
					} ?> href="mission.php">The Mission</a>
				</li>
				<li>
					<a <?php if ( $pageID == 'news' ) {
						echo 'class="active"';
					} ?> href="news.php">News</a>
				</li>
				<li>
					<a <?php if ( $pageID == 'media' ) {
						echo 'class="active"';
					} ?> href="media.php">Media</a>
				</li>
				<li>
					<a <?php if ( $pageID == 'contest' ) {
						echo 'class="active"';
					} ?> href="contest.php">Contest</a>
				</li>
			</ul>
		</div>
	</nav>

</header>

<article class="header-countdown">
	<span id="status"></span>
	<span id="days"></span>
	<span id="hours"></span>
	<span id="minutes"></span>
	<span id="seconds"></span>
</article>

<script>
	$(function () {
		countdown('Jan 17 2019 15:00:00'); // init countdown to launch
	});
</script>
