var channelName = 'CHANNEL_NAME';
	
$(document).ready(function(){
	$.get(
		"https://www.googleapis.com/youtube/v3/channels", {
			part: 'contentDetails',
			forUsername: channelName,
			key:'API KEY'},
			function(data){
				$.each(data.items, function(i, item){
					console.log(item);
					pid = item.contentDetails.relatedPlaylists.uploads;
					getVids(pid);

				})
			}
	);
	function getVids(pid){
			$.get(
		"https://www.googleapis.com/youtube/v3/playlistItems", {
			part: 'snippet',
			maxResults: 20,
			playlistId: pid,
			key:'API KEY'},
			function(data){
				var output
				$.each(data.items, function(i, item){
					console.log(item);
					videTitle = item.snippet.title;
					videoId = item.snippet.resourceId.videoId;

					output = '<li>'+videTitle+'<br>'+'<iframe src=\"//www.youtube.com/embed/'+videoId+'\"></iframe>+<br><li>';

					//Append to results list listStyleType
					$('#results').append(output);
				})
			}
	);

	}
});

