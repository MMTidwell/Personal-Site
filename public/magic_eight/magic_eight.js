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
					$(".triangle").html("It is certain");
					break;
				case 2:
					$(".triangle").html("It is decidedly so");
					break;
				case 3:
					$(".triangle").html("Without a doubt");
					break;
				case 4:
					$(".triangle").html("Yes, definitely");
					break;
				case 5:
					$(".triangle").html("You may rely on it");
					break;
				case 6:
					$(".triangle").html("As I see it, yes");
					break;
				case 7:
					$(".triangle").html("Most likely");
					break;
				case 8:
					$(".triangle").html("Outlook good");
					break;
				case 9:
					$(".triangle").html("Yes");
					break;
				case 10:
					$(".triangle").html("Signs point to yes");
					break;
				case 11:
					$(".triangle").html("Reply hazy try again");
					break;
				case 12:
					$(".triangle").html("Ask again later");
					break;
				case 13:
					$(".triangle").html("Better not tell you now");
					break;
				case 14:
					$(".triangle").html("Cannot predict now");
					break;
				case 15:
					$(".triangle").html("Concentrate and ask again");
					break;
				case 16:
					$(".triangle").html("Don't count on it");
					break;
				case 17:
					$(".triangle").html("My reply is no");
					break;
				case 18:
					$(".triangle").html("My sources say no");
					break;
				case 19:
					$(".triangle").html("Outlook not so good");
					break;
				case 20:
					$(".triangle").html("Very doubtful");
					break;
			}
		}, 700);
	}
	
play();



})();

