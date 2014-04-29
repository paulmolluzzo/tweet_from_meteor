Template.getUser.events({
    'click #get-user': function(event) {
        event.preventDefault();
        Users.remove({});
        var term = document.getElementById('username').value || "paulmolluzzo";
        Meteor.call('getUser', term, function(err, result){
            if(!err){
                if (result.statusCode === 200)
                    Users.insert(result.data);
            }
        });
        return Users.findOne({});
    }
})