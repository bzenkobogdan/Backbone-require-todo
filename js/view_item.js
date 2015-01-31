define("view_item" ,[
    "backbone"
], function(
    Backbone
) {
    var FriendView = Backbone.View.extend({
        tagName: "li",
        template: _.template($("#template").html()),

        events: {
            "click .delete": "deleteItem",
            "click .friend-list" : "selected",
            "click input" : "stopProp"
        },

        initialize: function() {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        deleteItem: function() {
            this.model.destroy();
        },

        selected: function(e) {
            e.stopPropagation();
            var selected = this.model.get("selected");
            this.model.set("selected", !selected);
            $(this.el).toggleClass("active");
        },

        stopProp: function(e) {
            e.stopPropagation();
        }
    });

    return FriendView;
});