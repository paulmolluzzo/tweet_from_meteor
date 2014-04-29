// Single User
Template.getUser.user = function() {
    return Users.findOne({});
};

Template.searchUsers.users = function() {
    return Users.find({});
};