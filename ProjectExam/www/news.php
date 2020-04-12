<?php
$pageID = 'news';
include "header.php";

// Get news from xml feed, dump to a js variable
$xml   = simplexml_load_file( 'https://www.nasa.gov/rss/dyn/breaking_news.rss' );
$json  = json_encode( $xml );
$array = json_decode( $json, true );
echo '<script>';
echo 'const newsData =';
echo $json;
echo ';';
echo '</script>';

?>

	<article class="main-content">
		<div class="wrapper">

			<section class="news">
				<h1>News</h1>
				<div id="news">
				</div>
			</section>

			<section class="launches">
				<h1>Upcoming launches</h1>
				<div id="launches">
				</div>
			</section>
		</div>
	</article>

	<div class="clear"></div>

	<script>
		$(function () {

			// Handle the news
			let newsArray = '';

			for (let i = newsData.channel.item.length - 1; i >= 0; i--) {
				newsArray += '<a href="' + newsData.channel.item[i].link + '" target="_blank">' + newsData.channel.item[i].title + '</a></br>';
			}

			document.getElementById('news').innerHTML = newsArray;

			getUpcomingLaunches();
		});
	</script>
<?php include 'footer.php' ?>