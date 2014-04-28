Template.searchTweets.events({
    'click #search': function() {
        Tweets.remove({});
        var term = document.getElementById('search-term').value || "test";
        document.getElementById('search').disabled = true;
        Meteor.call('searchTwitter', term, function(err, result){
            if(!err){
                result.headers.date = moment(result.headers.date).toDate();
                for (var i=0; i < result.data.statuses.length; i++) {
                    Tweets.insert(result.data.statuses[i]);  
                }
            }
        });
        document.getElementById('search').disabled = false;
        return Tweets.find({});
    }
})