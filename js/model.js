define("model" ,[
    "backbone"
], function(
    Backbone
) {
    var Friend = Backbone.Model.extend({
        defaults: {
            name: "vasya",
            selected: false
        }
    });

    return Friend;
});