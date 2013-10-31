    function htmlEncode(value){
      return $('<div/>').text(value).html();
    }
    $.fn.serializeObject = function() {
      var o = {};
      var a = this.serializeArray();
      $.each(a, function() {
          if (o[this.name] !== undefined) {
              if (!o[this.name].push) {
                  o[this.name] = [o[this.name]];
              }
              o[this.name].push(this.value || '');
          } else {
              o[this.name] = this.value || '';
          }
      });
      return o;
    };

    $.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
      options.url = 'http://backbonejs-beginner.herokuapp.com' + options.url;
    });

    var Users = Backbone.Collection.extend({
      url: '/users'
    });

    var User = Backbone.Model.extend({
      urlRoot: '/users'
    });

    var UserListView = Backbone.View.extend({
      el: '.page',
      render: function () {
        var that = this;
        var users = new Users();
        users.fetch({
          success: function (users) {
            var template = _.template($('#user-list-template').html(), {users: users.models});
            that.$el.html(template);
          }
        })
      }
    });
var Router = Backbone.Router.extend({
    routes: {
        '': 'home'
    }

});

var userListView = new UserListView();

var router = new Router();
router.on('route:home', function() {
    console.log('route:home');
    userListView.render();

});

Backbone.history.start();

/*
 Backbone.sync = function(method, model, success, error) {
 success();
 };
 
 var Item = Backbone.Model.extend({
 defaults: {
 part1: 'hello',
 part2: 'world'
 }
 });
 
 var List = Backbone.Collection.extend({
 model: Item
 });
 
 
 var ItemView = Backbone.View.extend({
 tagName: 'li',
 events: {
 'click span': 'swap',
 'click span.delete': 'remove'
 },
 initialize: function() {
 _.bindAll(this, 'render', 'unrender', 'swap', 'remove');
 
 this.model.bind('change', this.render);
 this.model.bind('remove', this.unrender);
 },
 render: function() {
 $(this.el).html('<span style="color:black;">' + this.model.get('part1') + ' ' + this.model.get('part2') + '</span> &nbsp; &nbsp; <span class="swap" style="font-family:sans-serif; color:blue; cursor:pointer;">[swap]</span> <span class="delete" style="cursor:pointer; color:red; font-family:sans-serif;">[delete]</span>');
 return this;
 },
 unrender: function() {
 $(this.el).remove();
 },
 swap: function() {
 var swapped = {
 part1: this.model.get('part2'),
 part2: this.model.get('part1')
 
 };
 this.model.set(swapped);
 },
 remove: function() {
 this.model.destroy();
 }
 
 });
 
 
 
 var ListView = Backbone.View.extend({
 el: $('body'),
 events: {
 'click button#add': 'addItem'
 },
 initialize: function() {
 _.bindAll(this, 'render', 'addItem', 'appendItem');
 this.collection = new List();
 this.collection.bind('add', this.appendItem)
 this.counter = 0;
 this.render();
 
 },
 render: function() {
 var self = this;
 $(this.el).append('<button id="add">Add List Item</button>');
 $(this.el).append('<ul></ul>')
 _(this.collection.models).each(function(item) {
 self.appendItem(item);
 }, this);
 },
 addItem: function() {
 this.counter++;
 var item = new Item();
 item.set({
 part2: item.get('part2') + this.counter
 
 });
 this.collection.add(item);
 
 },
 appendItem: function(item) {
 var itemView = new ItemView({
 model: item
 });
 
 $('ul', this.el).append(itemView.render().el);
 
 }
 });
 
 var listView = new ListView();
 
 */
