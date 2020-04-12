<?php $pageID = 'contest'; ?>
<?php include "header.php"; ?>
	<article class="main-content">
		<div class="wrapper">
			<p>Thank you for your submission. Here is a copy for you.</p>
			<br>
			<?php
			echo '<p>Name: ' . $_POST['name'] . '</p>';
			echo '<p>Phone: ' . $_POST['phone'] . '</p>';
			echo '<p>Address: ' . $_POST['address'] . '</p>';
			echo '<p>Email: ' . $_POST['email'] . '</p>';
			echo '<p>Text: ' . $_POST['textarea'] . '</p>';
			?>
		</div>
	</article>
<?php include 'footer.php' ?>