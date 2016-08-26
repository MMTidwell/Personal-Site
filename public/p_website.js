function gitInfo(repository) {
	var name = repository.name;
	var dt = repository.pushed_at;
	var day = new Date(dt);
	var date = day.toDateString();
	var info = "<div id='gitInfo'>"  
				+'<i class="fa fa-github fa-5x" id="icon"></i>'
					+ "<div>"
						+ "Project:<br>" + "<span>" + name + "</span>" 
						+ "<br><br>Last pushed on:<br>" + "<span>" + date + "</span>"  
					+ "</div>"
				+ "</div>";

	$("#github-name").append(info);
}

function gitName() {
	$.get("https://api.github.com/users/MMTidwell/repos?access_token=2ac39bf84fa078e8c80dad0abb7baafb60d6adf3").done(function(data) {

		data.forEach(function(repository) {
			gitInfo(repository);
		});
	}).fail(function() {
		alert("failed in gitName")
	});
}

gitName();




