<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="utf-8">
    <title>BOOK Z NAMI: Przeczytaj tyle, ile masz wzrostu</title>
    <meta name="description" content="Wyzwanie na rok 2012: przeczytaj tyle książek, żeby utworzyły wieżę równą twojemu wzrostowi.">
    <meta name="author" content="Jan Giemza">

    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <!-- CSS -->
    <link href="css/bootstrap.css" rel="stylesheet">
		<link href="css/style.css" rel="stylesheet">
		<link href='http://fonts.googleapis.com/css?family=Loved+by+the+King' rel='stylesheet'>
		<link rel="stylesheet" href="js/TangleKit/TangleKit.css" type="text/css">

    <!-- Ikony -->
    <link rel="shortcut icon" href="img/favicon.ico">
    <link rel="apple-touch-icon" href="img/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="72x72" href="img/apple-touch-icon-72x72.png">

		<!-- Stary software -->
		<link rel="stylesheet" type="text/css" media="screen" href="css/browser-detection.css" />
		<script type="text/javascript" src="js/browser-detection.js"></script>
		
		<!-- Google Analytics -->
		<script type="text/javascript">

		  var _gaq = _gaq || [];
		  _gaq.push(['_setAccount', 'UA-11474312-6']);
		  _gaq.push(['_trackPageview']);

		  (function() {
		    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		  })();

		</script>
  </head>

	<body>
    <div class="navbar navbar-fixed-top">
      <div class="navbar-inner" id="nav_container">
        <div class="container">
          <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="i-bar"></span>
            <span class="i-bar"></span>
            <span class="i-bar"></span>
          </a>
          <a class="brand" href="http://www.bookznami.pl" target="_blank">book z nami <span id="przedstawia">przedstawia</span></a>
					
					<!--Facebook Love -->
					<span class="pull-right" id="facebook">
					<iframe src="http://www.facebook.com/plugins/like.php?href=http%3A%2F%2Fwww.facebook.com%2Fbookznamipl&amp;send=false&amp;layout=button_count&amp;width=450&amp;show_faces=true&amp;action=like&amp;colorscheme=light&amp;font&amp;height=21&amp;appId=413252915952" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:120px; height:20px;" allowTransparency="true"></iframe></span>
					
        </div>

      </div>
    </div>

    <div class="container" id="main_container">
			
			<!-- Poziom tytułu -->
			<div class="row">
					<div class="span2">
						<a href="#aboutproject" class="btn" id="ocowtymchodzi" data-toggle="modal">O co w tym chodzi? &raquo;</a>
					</div>
					<div class="span8">
						<hgroup id="title">     
							 
							<h2>Wyzwanie 2012</h2>
							<h1>Przeczytaj tyle, ile masz wzrostu</h1>
							
						</hgroup>
					</div>
					<div class="span2">
						<div class="btn-group">
						  <a class="btn dropdown-toggle" id="zobaczinneosoby" data-toggle="dropdown" href="#">
						    zobacz inne osoby
						    <span class="caret"></span>
						  </a>
						  <ul class="dropdown-menu">
						   <li><a href="#" id="janeklink">Janek</a></li>
							 <li><a href="#" id="agnieszkalink">Agnieszka</a></li>
							 <li><a href="#" id="dominiklink">Dominik</a></li>
						  </ul>
						</div>
					</div>
			</div>
			
			<!--JANEK-->
			<?
			$a = file_get_contents("_janek.html");
			echo ($a);
			?>
			
			<!--AGNIESZKA -->
			<?
			$b = file_get_contents("_agnieszka.html");
			echo ($b);
			?>
			
			<!--DOMINIK-->
			<?
			$c = file_get_contents("_dominik.html");
			echo ($c);
			?>
			
			
			<!-- Poziom dolnego paska -->
			<div class="row">
				<div class="span12" id="acozemna">
					<h1>A co ze mną?!</h1> 
					
					<p id="lcalc">Jeśli masz <span class="TKAdjustableNumber" data-min="50" data-max="250" data-var="lwzrost"> cm wzrostu</span>, musisz czytać każdego dnia ok. <span data-var="lstrony" data-format="%.0f"> stron</span>, co daje ok. <span data-var="lksiazki" data-format="%.0f"> książek</span> w ciągu roku. </p>
				</div>
			</div>
			
			<!-- Poziom stopki -->
			<div class="row">
				<div class="span12" id="stopka">
					<p>&copy; Jan Giemza (bookznami.pl), 2012. <a rel='tooltip' title='Informacje o stronie' data-toggle="modal" href="#siteinfo"><i class="icon-info-sign icon-white"></i></a></p>
				</div>
			</div>
		</div>
		
		<!-- MODALS -->
		<?
		$modals = file_get_contents("_modals.html");
		echo ($modals);
		?>

		<!-- Szczypta magii na koniec -->
    <script src="http://platform.twitter.com/widgets.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
		<script src="js/bootstrap-transition.js"></script>
    <script src="js/bootstrap-alert.js"></script>
    <script src="js/bootstrap-dropdown.js"></script>
    <script src="js/bootstrap-modal.js"></script>
    <script src="js/bootstrap-tooltip.js"></script>
    <script src="js/bootstrap-popover.js"></script>
    <script src="js/bootstrap-button.js"></script>
		<script src="js/list.min.js"></script>
		<script src="js/app.js"></script>
		<script src="js/lista.js"></script>
		<script src="js/Tangle.js"></script>
		<script src="js/TangleKit/mootools.js"></script>
		<script src="js/TangleKit/sprintf.js"></script>
		<script src="js/TangleKit/BVTouchable.js"></script>
		<script src="js/TangleKit/TangleKit.js"></script>
		<script src="js/lcalc.js"></script>

  </body>
</html>