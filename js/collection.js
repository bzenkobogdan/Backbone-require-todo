define("collection" ,[
    "backbone",
    "./model"
], function(
    Backbone,
    Friend
) {
    var FriendCollection = Backbone.Collection.extend({
        model: Friend,
        url: null
    });

    return FriendCollection;
});