<?php $pageID = 'contest'; ?>
<?php include "header.php"; ?>
	<article class="main-content">
		<div class="wrapper">
			<h2>Contest</h2>
			<p></p>

			<form id="contest_form" onsubmit="return validateForm()" action="contest_submitted.php" method="post">
				<label>
					<span>Full name:</span>
					<input type="text" id="name" name="name">
				</label>

				<label>
					<span>Phone:</span>
					<input type="tel" id="phone" name="phone">
				</label>

				<label>
					<span>Street Address:</span>
					<input type="text" id="address" name="address">
				</label>

				<label>
					<span>E-mail:</span>
					<input type="email" id="email" name="email">
				</label>

				<label>
					<span>How did you first got interested in space?</span>
					<span id="formCharacters">You have 300 words left</span>
					<textarea name="textarea" id="textarea" onKeyDown="form_limitText(this);"></textarea>
				</label>
				<p id="alertBox"></p>
				<button type="submit">Send</button>
			</form>
		</div>
	</article>
	<script>
		$(function () {
			$('textarea').on("paste", function (e) {
				e.preventDefault(); // prevent paste
			});
		});
	</script>
<?php include 'footer.php' ?>