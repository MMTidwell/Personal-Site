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
	var answers = ['Maybe', 'Sure', 'Certainly not', 'I hope for your sake', 'Nope!', 'There is a possibility', 'Quite likely', 'I hope not!', 'NEVER!!', 'Ahaha! Really?!?', 'Pfft', 'Hell YES!', 'Hell to the NO', 'Hell YES!!', ' Who cares?', 'Yes', 'It is certain', 'It is decidedlu so', 'Without a doubt', 'Yes, definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Signs point to yes', 'Reply hazy try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', 'Don\'t count on it', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful'];

	function randomNumber() { 
		var random = Math.floor((Math.random() * answers.length - 1) + 0);
		var answer = answers[random];
			setTimeout(function() {
				$(".triangle").html(answer);
			}, 700);
	}
	
play();



})();

