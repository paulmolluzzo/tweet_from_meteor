UI.registerHelper('moments', function(date) {
	return moment(date).format('HH:mm:ss');
});

UI.registerHelper('linkify', function(tweet) {
	var out = tweet.text;
	out = out.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&~\?\/.=]+/g, function(url) {
		var tweetText = url;
		if (tweet.entities.urls !== undefined && tweet.entities.urls.length > 0) {
			var myUrl = _.find(tweet.entities.urls, function(urlObj) {
				return urlObj.url === url;
			});
			if (myUrl !== undefined && myUrl !== null) {
				tweetText = myUrl.display_url;
			}
		}
		return tweetText.link(url);
	});
	out = out.replace(/[#]+[A-Za-z0-9-_]+/g, function(hash) {
		txt = hash.replace("#", "");
		return hash.link("http://twitter.com/search/%23" + txt);
	});
	out = out.replace(/[@]+[A-Za-z0-9-_]+/g, function(u) {
		var username = u.replace("@","")
		return u.link("http://twitter.com/" + username);
	});
	return out;
});

Template.tweets.events({
	'click #search': function() {
		Tweets.remove({});
		var term = document.getElementById('search-term').value || "test";
		document.getElementById('search').disabled = true;
		Meteor.call('searchTwitter', term, function(err, result){
			if(!err){
				result.created_at = moment(result.created_at).toDate();
				for (var i=0; i < result.statuses.length; i++) {
					Tweets.insert(result.statuses[i]);	
				}
			}
		});
		document.getElementById('search').disabled = false;
		return Tweets.find({});
	},

	'click #get-user': function() {
		var term = document.getElementById('username').value || "test";
		document.getElementById('get-user').disabled = true;
		Meteor.call('getUser', term, function(err, result){
			if(!err){
				console.log(result);
			}
		});
		document.getElementById('get-user').disabled = false;
		return Tweets.find({});
	}
})