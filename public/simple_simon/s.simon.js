(function(){ 
	// ==================== VARIABLES ====================
	var gameArray = [];
	var count = 0

	// ==================== START BUTTON ====================
	function play() {
		$("#playGame").click(function() {
			// sets it to where you can not click play more than once
			if (count == 0) {
				gameOrder();
			}
		});
	}

	// ==================== GAME ORDER ====================
	function gameOrder() {
		gameArray.push(Math.floor(Math.random() * 4) + 1);

		// let declares i for each iteration, not the loop. This way what is passed to the setTimeout is exactly what we want. let is scoped for the loop, var is scoped to the function. 
		for (let i = 0; i < gameArray.length; i++) {
			setTimeout(function() {
				switch (gameArray[i]) {
					case 1:
						lightUp("#green");
						break;
					case 2:
						lightUp("#red");
						break;
					case 3:
						lightUp("#blue");
						break;
					case 4:
						lightUp("#yellow");
						break;
				}
			// i represents the delay used after the button is added to the array
			}, i * 400);
		} 
		clientClicks();
	} 

	// ==================== LIGHTS UP ====================
	function lightUp(box) {
		$(box).fadeTo("fast", 1).fadeTo("fast", 0.5);
	}	

	// ==================== COMPARES CLICK ====================
	function clientClicks() {
		$(".boxed").on("click", function() {
			var lightOnClick = "#" + $(this).attr("id");
			var buttonClicked = $(this).attr("value");
			lightUp(lightOnClick);
			
			// check button clicked and compares to gameArray
			if (buttonClicked == gameArray[count]) {
				count++;
				if (count == gameArray.length) {
					// updates the score 
					$('#winCounts').html(count);

					// sets a delay between client clicks and game clicks
					setTimeout(function() {
						count = 0;
						$(".boxed").off("click");
						gameOrder();
					}, 800);
				} else {
					$(".boxed").off("click");
					// recalls itself if gameArray has anything left in it
					clientClicks();
				}
			} else {
				alert("You have died a miserable death\nand my little puppy can do better than you!\nGive it another try!");
				// reloads page
				location.reload();
			}
		});		
	};

play();

})();






