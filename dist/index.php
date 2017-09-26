<?php
error_reporting(E_ERROR | E_WARNING | E_PARSE);
// include "actions/config.php";

include "partials/head.php";
include "partials/header.php";

$q = !empty($_GET['q']) ? $_GET['q'] : '';
switch($q) {
case '':
	$page = 'home';
	$title = "Tinder Godfather";
	break;
case 'home':
	$page = 'home';
	$title = "Tinder Godfather";
	break;
case 'form':
	$page = 'form';
	$title = "Infos persos";
	break;
default:
$page = '404';
	$title = "404. Cette page n'existe pas.";
	break;
}
include "views/$page.php";

include "partials/footer.php";
include "partials/foot.php";

?>
