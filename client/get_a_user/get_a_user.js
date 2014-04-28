Template.getUser.events({
    'click #get-user': function() {
        var term = document.getElementById('username').value || "twitter";
        document.getElementById('get-user').disabled = true;
        Meteor.call('getUser', term, function(err, result){
            if(!err){
                if (result.statusCode === 200)
                    console.log(result);
            }
        });
        document.getElementById('get-user').disabled = false;
        return Tweets.find({});
    }

})