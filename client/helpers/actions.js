Template.actions.events({
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
    },

    'click #test': function() {
        var id = Meteor.userId();
        var term = "twitter"
        Meteor.call('getTest', id, term, function(err, result){
            if(!err){
                console.log(result);
            }
        });
    },

})