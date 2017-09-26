<?php
include 'config.php';

$mail = $_POST['mail'];
$yearsold = $_POST['yearsold'];
$city = $_POST['city'];
$desc = $_POST['desc'];
$godfather = $_POST['godfather'];

echo $firstname, $lastname, $mail, $yearsold, $city, $desc;

$send = $pdo->prepare('INSERT INTO `h1` (user,pass) VALUES (:user, :pass)');
$send->bindValue(":user", $username);
$send->bindValue(":pass", $old_password);
$exec = $send->execute();
?>
