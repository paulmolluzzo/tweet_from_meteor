// Single User
Template.getUser.user = function() {
    return Users.findOne({});
};