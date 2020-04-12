<footer>
	<div class="wrapper">

		<div class="iss-info">
			<img src="assets/img/icons/satellite.png" id="iss-img">
			<span id="ISS"></span>
			<span id="ISSpassage"></span>
		</div>

		<div class="social-media">
			<a href="https://www.instagram.com/spacex/" target="_blank">
				<img src="assets/img/logos/instagram.png">
			</a>
			<a href="https://www.reddit.com/r/spacex/" target="_blank">
				<img src="assets/img/logos/reddit.png">
			</a>
			<a href="https://www.youtube.com/channel/UCtI0Hodo5o5dUb67FeUjDeA" target="_blank">
				<img src="assets/img/logos/youtube.png">
			</a>
			<a href="https://twitter.com/spacex" target="_blank">
				<img src="assets/img/logos/twitter.png">
			</a>
		</div>

		<a href="http://www.spacex.com" target="_blank">
			<img class="spacex-logo" src="assets/img/logos/spacex.png">
		</a>

		<p>Copyright (C) 2018 Kristoffer Eide</p>

		<a href="license.php">License</a>
		<a href="disclaimer.php">Disclaimer</a>
	</div>
</footer>
<script>
	getISS(); // init
	setInterval(getISS, 60000); // update once every minute
</script>

</body>
</html>
