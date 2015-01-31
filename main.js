jQuery(function($) {
	//Моделька
	var Friend = Backbone.Model.extend({
		defaults: {
			name: "vasya",
			selected: false
		}
	});

	//Контроллер
	var FriendCollection = Backbone.Collection.extend({
		model: Friend,
		url: null
	});

	//Вьюшка
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

	var friendCollection = new FriendCollection;

	var AppView = Backbone.View.extend({
		el: $(".main-wrap"),
		events: {
			"click .addFriend"   : "createOne",
			"click .deleteAll" : "deleteAll"
		},

		createOne: function() {
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

	var app = new AppView();
});