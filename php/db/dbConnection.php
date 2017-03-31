<?php


/*   LOCAL MyWEB-MCM CREDENTIALS */
    $servername     = 'localhost';
    $user           = 'root';
    $password       = 'root';
    $db             = 'mywebcreationsdb';
    $port           = 8889;

    $conn = new mysqli($servername, $user, $password, $db);

    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }
echo "Connected successfully";

?>