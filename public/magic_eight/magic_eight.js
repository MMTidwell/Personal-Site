(function() { 
"use strict";

	// ====================== VARIABLES =============================
	var count = 0;
	var answers = ['Maybe', 'Sure', 'Certainly not', 'I hope for your sake', 'Nope!', 'There is a possibility', 'Quite likely', 'I hope not!', 'NEVER!!', 'Ahaha! Really?!?', 'Pfft', 'Hell YES!', 'Hell to the NO', 'Hell YES!!', ' Who cares?', 'Yes', 'It is certain', 'It is decidedly so', 'Without a doubt', 'Yes, definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Signs point to yes', 'Reply hazy try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', 'Don\'t count on it', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful', 'EWWW...MICHAEL!!'];

	// ======================START BUTTON============================
	function play() {
		$('#ball').click(function() {
			// checks count to see if page needs to reload
			if (count == 0) {
				// fades front of ball out
				$('#first').fadeOut(function() {
					$(this).load(function() { 
						$(this).fadeIn();
					});
					// fades back of ball in
					$(this).attr("src", "back_of_ball.png");
				});
				count++;
				randomNumber();
			} else {
				// reloads the page 
				location.reload();
			}
		});
	}

	// ======================RANDOM NUM GEN========================
	// ====================== ANSWER =============================
	function randomNumber() { 
		// PULLS RANDOM NUMBER
		var random = Math.floor((Math.random() * answers.length - 1) + 0);
		// TAKES RANDOM NUMBER AND ASSIGNS IT TO VALUE IN ANSWERS ARRAY
		var answer = answers[random];
			// STARTS TIME OUT SO THE ANSWER WILL NOT APPEAR RIGHT AWAY
			setTimeout(function() {
				//  PLACES ANSWER IN TRIANGLE
				$(".triangle").html(answer);
			// DELAY
			}, 900);
	}
	
play();



})();

