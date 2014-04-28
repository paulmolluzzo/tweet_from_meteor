Template.searchTweets.events({
    'submit #search-tweets': function(event) {
        event.preventDefault();
        Tweets.remove({});
        var term = document.getElementById('search-term').value || "test";
        Meteor.call('searchTwitter', term, function(err, result){
            if(!err){
                result.headers.date = moment(result.headers.date).toDate();
                for (var i=0; i < result.data.statuses.length; i++) {
                    Tweets.insert(result.data.statuses[i]);  
                }
                console.log("done");
            }
        });
        return Tweets.find({});
    }
})