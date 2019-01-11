<?php

include_once 'includes/dbconnect.inc.php';

?>

<!DOCTYPE html>
<html>
<head>

	<title>Rock Paper Scissors</title>

	<link rel="stylesheet" type="text/css" href="btnHide.css">
	<script src = "rps.js "> </script>
	
</head>
<body>

	<h1>Welcome to Rock Paper Scissors </h1>
	<h2> Choose Your Weapon: </h2>

  		<input type="radio" name="playerChoice"> Rock<br>
  		<input type="radio" name="playerChoice"> Paper<br>
  		<input type="radio" name="playerChoice"> Scissors <br><br>
  		<input type="button" value="Submit" onclick="findChoice()">
  		<input type="button" value="View Log" onclick = "ShowTable()"><br><br>

<div id="logTable">
 	<table>
 	<tr>
 		<th>Game</th>
 		<th>Player Choice</th>
 		<th>Computer Choice</th>
 		<th>Outcome</th>
 		<th>Date/Time</th>
 	</tr>

  	<?php
  		$query = "SELECT * FROM gameLog;";
  		$result = mysqli_query($conn, $query);
  		$resultNumber = mysqli_num_rows($result);

  		if($resultNumber > 0)
  		{
  			while($row = mysqli_fetch_assoc($result) )
  			{
  				echo "<tr><td>" . $row['game'] . "</td><td>" .
  				$row['player choice'] . "</td><td>" .
  				$row['comp choice'] . "</td><td>" .
  				$row['outcome'] . "</td><td>" .
  				$row['date time'] . "</td></tr>";
  			}

  			echo "</table>";
  		}

  	?>
</div>

	<div id="choiceMessage"> 
		<!-- This is where players choice will be displayed-->
	</div>

	<br>
		
	<input type="button" value="Continue" id = "continue" onclick="findWinner()">

	<br>

	<div id="compChoiceMesssage">
		<!-- This is where computer choice will be displayed-->
	</div>

	<div id="WinLoseMessage">
		<!-- This is where win or lose will be displayed-->
	</div>
	
	<br>

	<input type="button" value="Play Again" id = "playAgain" onclick="PlayAgain()">


</body>
</html>