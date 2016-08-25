// $.getJSON("https://api.github.com/users/MMTidwell/repos?access_token=2ac39bf84fa078e8c80dad0abb7baafb60d6adf3", function(data) {
// 	console.log(data, 'repos');
// 	// pulls repo info

// }).done(function(data) {
// 	data.forEach(function(repository) {
// 		$.getJSON("https://api.github.com/repos/MMTidwell/" + repository.name + "/commits?access_token=2ac39bf84fa078e8c80dad0abb7baafb60d6adf3", function(commits) {
// 			console.log(commits, 'commits');
// 			// pulls commit info

// 			var commitsString = '<div role="tabpanel" class="tab-pane fade" id="repository-' + repository.id + '">';
// 			commitsString += '<hr>';
// 			for(var i = 0; i < 3; i++){
// 				if(i >= commits.length) {
// 					break;
// 				}
// 				commitsString += '<b>Committed on:</b> ' + moment(commits[i].commit.committer.date).format("MMM Do YYYY");
// 				commitsString += '<div class="panel panel-hover">';
// 				commitsString += '<div class="panel-body row">';
// 				commitsString += '<div class="col-xs-1">';
// 				commitsString += '<img alt="@gavinv" class="avatar" height="36" src="' + commits[i].author.avatar_url + '" width="36">';
// 				commitsString += '</div>';
// 				commitsString += '<div class="col-xs-9">';
// 				commitsString += '<div class="message">';
// 				commitsString += commits[i].commit.message;
// 				commitsString += '</div>';
// 				commitsString += '<div class="author">';
// 				commitsString += '<small><a href="' + commits[i].committer.html_url + '">' + commits[i].committer.login + '</a> committed ' + moment(commits[i].commit.committer.date).fromNow() + '</small>';
// 				commitsString += '</div>';
// 				commitsString += '</div>';
// 				commitsString += '<div class="col-xs-2">';
// 				commitsString += '<a class="btn btn-primary" href="' + commits[i].html_url + '">' + (commits[i].sha).substring(0, 6) + '</a>';
// 				commitsString += '</div>';
// 				commitsString += '</div>';
// 				commitsString += '</div>'
// 			}	
// 			commitsString += '</div>';
// 			$('.tab-content').append(commitsString);

// 			$('.github-stream a').click(function (e) {
// 			  e.preventDefault()
// 			  $(this).tab('show')
// 			});
// 			$('.github-stream a:first').tab('show');
// 		})
// 		var tabsString = '';
// 		tabsString += '<li role="presentation"><a href="#repository-' + repository.id + '"  role="tab" data-toggle="tab">' + repository.name + '</a></li>';
// 		$('.github-stream').append(tabsString);


// 	});
// })


// function repoInfo(data) {
// 	var name = data.object[0].name;
// 	console.log(name)
// }

// gets repo info - name
function gitName() {
	$.get("https://api.github.com/users/MMTidwell/repos?access_token=2ac39bf84fa078e8c80dad0abb7baafb60d6adf3").done(function(data) {
		console.log(data, "name")
		data.forEach(function(repository) {
			gitRepo(repository)
			// console.log(repository.name)
		});
	}).fail(function() {
		alert("failed in gitName")
	});
}

function gitRepo(repository) {
	$.get("https://api.github.com/repos/MMTidwell/" + repository.name + "/commits?access_token=2ac39bf84fa078e8c80dad0abb7baafb60d6adf3").done(function(repository) {
		console.log(repository, "repository")
	}).fail(function(){
		// alert("failed in gitRepo")
		console.log("failed")
	});
}


gitName();







