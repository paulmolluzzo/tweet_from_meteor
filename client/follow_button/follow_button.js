Template.followButton.events({
    'click': function() {
        var target = this._id
        var targetSN = this.screen_name
        if (this.following) {
            Meteor.call('unfollowUser', targetSN, function(err, result){
                if(!err){
                    console.log(result);
                    if (result.statusCode === 200)
                        Users.update({_id: target}, {$set: {following: false}});
                }
            });
        } else {
            Meteor.call('followUser', targetSN, function(err, result){
                if(!err){
                    console.log(result);
                    if (result.statusCode === 200)
                        Users.update({_id: target}, {$set: {following: true}});
                }
            });
        }
    }
})