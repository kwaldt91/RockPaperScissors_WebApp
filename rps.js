var choice;
		
		function findChoice()
		{
			

			var playerChoice = document.getElementsByName("playerChoice");

			if (playerChoice[0].checked)//if rock is checked
			{
				document.getElementById("choiceMessage").innerHTML = "<br>You chose Rock!<br>";
				choice = 1;
		
			}
			else if(playerChoice[1].checked)//if paper is checked
			{
				document.getElementById("choiceMessage").innerHTML = "<br>You chose Paper!<br>";
				choice = 2;
			}
			else if(playerChoice[2].checked)//if scissors is checked
			{
				document.getElementById("choiceMessage").innerHTML = "<br>You chose Scissors!<br>";
				choice = 3;
			}

			document.getElementById("choiceMessage").style.visibility = "visible";
			document.getElementById("continue").style.visibility = "visible";//make cont btn visible
		}//end func	

		function findWinner()
		{
			var compChoice = Math.floor(Math.random() * 3) + 1; //rand # between 1-3

			switch(compChoice)
			{
				case 1:

					document.getElementById("compChoiceMesssage").innerHTML = "<br>Compuer Chooses Rock!<br>";

					if(choice === 2)
					{
						document.getElementById("WinLoseMessage").innerHTML = "<br>You Win!<br>";
					}
					else if (choice === compChoice)
					{
						document.getElementById("WinLoseMessage").innerHTML = "<br>It's a Tie!<br>";
					}
					else
					{
						document.getElementById("WinLoseMessage").innerHTML = "<br>You Lose!<br>";
					}
					break;

				case 2:

					document.getElementById("compChoiceMesssage").innerHTML = "<br>Compuer Chooses Paper!<br>";

					if(choice === 3)
					{
						document.getElementById("WinLoseMessage").innerHTML = "<br>You Win!<br>";
					}
					else if (choice === compChoice)
					{
						document.getElementById("WinLoseMessage").innerHTML = "<br>It's a Tie!<br>";
					}
					else
					{
						document.getElementById("WinLoseMessage").innerHTML = "<br>You Lose!<br>";
					}
					break;

				case 3:

					document.getElementById("compChoiceMesssage").innerHTML = "<br>Compuer Chooses Scissors!<br>";

					if(choice === 1)
					{
						document.getElementById("WinLoseMessage").innerHTML = "<br>You Win!<br>";
					}
					else if (choice === compChoice)
					{
						document.getElementById("WinLoseMessage").innerHTML = "<br>It's a Tie!<br>";
					}
					else
					{
						document.getElementById("WinLoseMessage").innerHTML = "<br>You Lose!<br>";
					}
					break;

			}//end switch

			document.getElementById("compChoiceMesssage").style.visibility = "visible";
			document.getElementById("WinLoseMessage").style.visibility = "visible";

			document.getElementById("playAgain").style.visibility = "visible";

		}//end func

		function PlayAgain()
		{
			document.getElementById("choiceMessage").style.visibility = "hidden";
			document.getElementById("continue").style.visibility = "hidden";
			document.getElementById("compChoiceMesssage").style.visibility = "hidden";
			document.getElementById("WinLoseMessage").style.visibility = "hidden";
			document.getElementById("playAgain").style.visibility = "hidden";

		}

		function ShowTable()
		{
			document.getElementById("logTable").style.visibility = "visible";
		}