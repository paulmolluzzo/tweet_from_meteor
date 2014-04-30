Accounts.onCreateUser(function (options, user){
   user.profile = options.profile || {};
   if(user.services.twitter){
       user.profile.picture = user.services.twitter.profile_image_url_https;
       user.profile.username = user.services.twitter.screenName;
   }
   return user;
});

var twitter = new TwitterApi();

Meteor.methods({

    getTweet: function(tweetId) {
        return twitter.get('statuses/show.json', {id: tweetId})
    },

    searchTwitter: function(term) {
        return twitter.search(term);
    },

    getUser: function (term) {
        return twitter.get('users/show.json', {screen_name: term});
    },

    searchUsers: function(term, page, count) {
        return twitter.usersSearch(term, page, count)
    },

    postTweet: function(tweet) {
        return twitter.postTweet(tweet)
    },

    homeTimeline: function() {
        return twitter.homeTimeline();
    },

    userTimeline: function() {
        return twitter.userTimeline();
    },

    mentionTimeline: function() {
        return twitter.get('statuses/mentions_timeline.json');
    }
})