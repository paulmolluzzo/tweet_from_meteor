var twitter = new TwitterApi();

Meteor.methods({
    searchTwitter: function(term) {
        return twitter.search(term);
    },

    getUser: function (term) {
        return twitter.get('users/show.json', {screen_name: term});
    },

    searchUsers: function(term, page, count) {
        return twitter.usersSearch(term, page, count)
    }
})