Template.searchUsers.events({
    'submit #search-users': function(event) {
        event.preventDefault();
        Users.remove({});
        var term = document.getElementById('search-term').value || "twitter";
        var page = document.getElementById('page').value || 0;
        var count = document.getElementById('count').value || 10;
        Meteor.call('searchUsers', term, page, count, function(err, result){
            if(!err){
                if (result.statusCode === 200)
                    console.log(result)
                    for (var i=0; i < result.data.length; i++) {
                        Users.insert(result.data[i]);  
                    }
            }
        });
    }
})