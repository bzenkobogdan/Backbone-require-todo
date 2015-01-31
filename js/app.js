require(["collection" , "view_list"], function(FriendCollection, AppView) {
    var friendCollection = new FriendCollection;
    var app = new AppView(friendCollection);
});