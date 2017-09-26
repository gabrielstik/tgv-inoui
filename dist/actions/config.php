<?php
define('DB_HOST','localhost');
define('DB_NAME','tinder-godfather');
define('DB_USER','root');
define('DB_PASS','root');

try {
  $pdo = new PDO('mysql:host='.DB_HOST.';dbname='.DB_NAME,DB_USER,DB_PASS);
  $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE,PDO::FETCH_OBJ);
}
catch (Exception $e) {
  die('Could not connect');
}
?>
