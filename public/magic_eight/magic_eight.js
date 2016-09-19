(function() { 
"use strict";

	// ====================== VARIABLES =============================
	var count = 0;

	// ====================== START BUTTON =============================
	function play() {
		$('#ball').click(function() {
			if (count == 0) {
				$('#first').fadeOut(function() {
					$(this).load(function() { 
						$(this).fadeIn();
					});
					$(this).attr("src", "back_of_ball.png");
				});
				count++;
				randomNumber();
			} else {
				location.reload();
			}
		});
	}

	// ====================== RANDOM NUM GEN =============================
	// ====================== ANSWER =============================
	function randomNumber() { 
		var num = Math.floor(Math.random() * 20) + 1;
		// console.log("your number is: " + num)

		setTimeout(function() {
			switch (num) {
				case 1:
					$("#answer").html("It is certain");
					break;
				case 2:
					$("#answer").html("It is decidedly so");
					break;
				case 3:
					$("#answer").html("Without a doubt");
					break;
				case 4:
					$("#answer").html("Yes, definitely");
					break;
				case 5:
					$("#answer").html("You may rely on it");
					break;
				case 6:
					$("#answer").html("As I see it, yes");
					break;
				case 7:
					$("#answer").html("Most likely");
					break;
				case 8:
					$("#answer").html("Outlook good");
					break;
				case 9:
					$("#answer").html("Yes");
					break;
				case 10:
					$("#answer").html("Signs point to yes");
					break;
				case 11:
					$("#answer").html("Reply hazy try again");
					break;
				case 12:
					$("#answer").html("Ask again later");
					break;
				case 13:
					$("#answer").html("Better not tell you now");
					break;
				case 14:
					$("#answer").html("Cannot predict now");
					break;
				case 15:
					$("#answer").html("Concentrate and ask again");
					break;
				case 16:
					$("#answer").html("Don't count on it");
					break;
				case 17:
					$("#answer").html("My reply is no");
					break;
				case 18:
					$("#answer").html("My sources say no");
					break;
				case 19:
					$("#answer").html("Outlook not so good");
					break;
				case 20:
					$("#answer").html("Very doubtful");
					break;
			}
		}, 700);
	}
	
play();



})();

