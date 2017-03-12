<?php
/*
SERVER MCM CREDENTIALS

    $servername     = 'localhost';
    $user           = 'malanuhe_admin';
    $password       = 'Edmonton1234';
    $db             = 'malanuhe_mcmdb';
    $port           = 3306;
*/


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
/*WEBCREATION CREDENTIALS
    $servername     = 'localhost';
    $user           = 'myweb6at';
    $password       = 'siju04@$Create';
    $db             = 'myweb6at_memberdb';
    $host           = 'localhost';
    $port           = 3306;

*/
?>