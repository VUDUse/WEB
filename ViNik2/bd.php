<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Cookie";

// Создание соединения
$link = new mysqli($servername, $username, $password, $dbname);

// Проверка соединения
if ($link->connect_error) {
    die("Connection failed: " . $link->connect_error);
}

return $link;
?>