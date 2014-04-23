UI.registerHelper('moments', function(date) {
	return moment(date).format('HH:mm:ss');
});

// UI.registerHelper('linkify', function(tweet) {
// 	var out = tweet.text;
// 	out = out.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&~\?\/.=]+/g, function(url) {
// 		var tweetText = url;
// 		if (tweet.entities.urls !== undefined && tweet.entities.urls.length > 0) {
// 			var myUrl = _.find(tweet.entities.urls, function(urlObj) {
// 				return urlObj.url === url;
// 			});
// 			if (myUrl !== undefined && myUrl !== null) {
// 				tweetText = myUrl.display_url;
// 			}
// 		}
// 		return tweetText.link(url);
// 	});
// 	out = out.replace(/[#]+[A-Za-z0-9-_]+/g, function(hash) {
// 		txt = hash.replace("#", "");
// 		return hash.link("http://twitter.com/search/%23" + txt);
// 	});
// 	out = out.replace(/[@]+[A-Za-z0-9-_]+/g, function(u) {
// 		var username = u.replace("@","")
// 		return u.link("http://twitter.com/" + username);
// 	});
// 	return out;
// });

Template.tweets.events({
	'click': function() {
		Meteor.call('searchTwitter');
		TweetStream.on('tweet', function(tweet) {
			tweet.created_at = moment(tweet.created_at).toDate();
			console.log(tweet);
			Tweets.insert(tweet);
		});
		return Tweets.find({});
	}
})