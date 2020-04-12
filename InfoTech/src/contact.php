<?php $pageID = 'contact'; ?>
<?php include 'head.php' ?>
<link href="css/pages/contact.css" rel="stylesheet">
<?php include "header.php"; ?>
<article class="wrapper" style="margin-bottom: 25px;">

	<a class="giveMeAir" href="tel:+4755270030">Ring oss på 55 27 00 30</a>

	<section class="text-center">
		<h2>Kontaktskjema</h2>
		<p>Fyll ut skjemaet så kontakter vi deg!</p>

		<form>
			<label>
				<span>Navn:</span>
				<input type="text" id="name" name="user_name">
			</label>

			<label>
				<span>Telefon:</span>
				<input id="phone" type="tel">
			</label>

			<label>
				<span>Firma:</span>
				<input type="text" id="firm" name="firma">
			</label>

			<label>
				<span>E-post:</span>
				<input type="email" name="usremail">
			</label>


			<label>
				<span>Din beskjed til oss:</span>
				<textarea></textarea>
			</label>

			<label>
				<span>Henvendelsen gjelder:</span>
				<select>
					<option value="byggekortleser">Byggekortleser</option>
					<option value="itbase">ITBASE</option>
					<option value="annet">Annet</option>
				</select>
			</label>

			<button type="submit">Send</button>
		</form>

	</section>

</article>
<?php include 'foot.php' ?>
