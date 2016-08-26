$(document).ready(function() { 
	"use strict";

	// sorts through all of your repos calling only on the info requested in var
	function gitInfo(repository) {
		var repo = repository.clone_url;
		var name = repository.name;
		var dt = repository.pushed_at;
		var day = new Date(dt);
		var date = day.toDateString();
		// set up like this for easier visibility 
		var info = "<div id='gitInfo'>"  
						+ '<a href="'+ repo + '" target="_blank"><i class="fa fa-github fa-5x" id="icon"></i></a>'
							+ "<div>"
								+ "<br>Project:<br>" + "<span>" + name + "</span>"
							+ "</div>"
							+ "<div>" 
								+ "<br>Last pushed on:<br>" + "<span>" + date + "</span>"  
							+ "</div>"
					+ "</div>";

		// puts info into the id github-name
		$("#github-name").append(info);
	}

	// first function made, calls on gitInfo for more info. 
	function gitName() {
		$.get("https://api.github.com/users/MMTidwell/repos?access_token=2ac39bf84fa078e8c80dad0abb7baafb60d6adf3").done(function(data) {

			// forEach loop goes to github and finds all repos, must specify if you do not want private repos shown
			data.forEach(function(repository) {
				gitInfo(repository);
			});
		}).fail(function() {
			alert("failed in gitName")
		});
	}

	gitName();


});