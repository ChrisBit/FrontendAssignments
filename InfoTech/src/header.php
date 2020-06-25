</head>
<body>

<header>
	<div class="wrapper">
		<div class="logo">
			<a href="/">
				<img src="img/logo/infotech.png" alt="logo">
			</a>
		</div>
	</div>
	<nav class="main-menu">
		<div class="wrapper">
			<p class="menu-icon" id="burger-menu">&#9776;</p>
			<p class="menu-icon" id="x-menu">&#x2716;</p>
			<ul>
				<li><a <?php if ( $pageID == 'index') {echo 'class="active"';} ?> href="index.php">Hjem</a></li>
				<li><a <?php if ( $pageID == 'products') {echo 'class="active"';} ?> href="products.php">Produkter</a>
					<ul class="sub-menu">
						<li><a <?php if ( $pageID == 'byggekortleser') {echo 'class="active"';} ?> href="byggekortleser.php">Byggekortleser</a></li>
						<li><a <?php if ( $pageID == 'itbase') {echo 'class="active"';} ?> href="itbase.php">ITBase</a></li>
						<li><a <?php if ( $pageID == 'konsulent') {echo 'class="active"';} ?> href="konsulent.php">Konsulenttjenester</a></li>
					</ul>
				</li>
				<li><a <?php if ( $pageID == 'about') {echo 'class="active"';} ?> href="about.php">Om oss</a>
					<ul class="sub-menu">
						<li><a <?php if ( $pageID == 'references') {echo 'class="active"';} ?> href="references.php">Referanser</a></li>
						<li><a <?php if ( $pageID == 'staff') {echo 'class="active"';} ?> href="staff.php">Medarbeidere</a></li>
						<li><a <?php if ( $pageID == 'contact') {echo 'class="active"';} ?> href="contact.php">Kontakt oss</a></li>
					</ul>
				</li>

			</ul>
		</div>
	</nav>
</header>