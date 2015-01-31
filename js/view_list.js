define("view_list" ,[
    "backbone",
    "./collection",
    "./view_item"
], function(
    Backbone,
    friendCollection,
    FriendView
) {
    var AppView = Backbone.View.extend({
        el: $(".main-wrap"),
        events: {
            "click .addFriend"   : "createOne",
            "click .deleteAll" : "deleteAll"
        },

        createOne: function() {
            console.log(friendCollection);
            friendCollection.create({name : $("input").val()});
        },

        initialize: function() {
            this.listenTo(friendCollection, 'add', this.addOne);
        },

        addOne: function(friend) {
            var view = new FriendView({model: friend});
            this.$(".friends-list").append(view.render().el);
        },

        deleteAll: function() {
            var friends = friendCollection.where({selected: true});
            console.log(friends);
            _.each(friends, function(model) {
                model.destroy();
            });
        },

        render: function() {

        }


    });

    return AppView;
});