<?php

$dbServer = "localhost";
$dbUsername = "kwaldtmy_rps";
$dbPassword = "Hat1lamp";
$dbName = "kwaldtmy_RockPaperScissors";

$conn = mysqli_connect($dbServer, $dbUsername, $dbPassword, $dbName);
$connection_error = mysqli_connect_error();

if($connection_error != null)
{
	echo "<p>Error connecting to database: $connection_error </p>";
}
else
{
	//echo "Connected!";
}