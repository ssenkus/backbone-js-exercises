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
      options.url = 'http://developer.trimet.org/ws/V1/arrivals/locIDs/2580/appID/5E48DCD7031297B7CBF2F37FD';
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
          success: function (data) {
            var fdata =pareXml(data)
            var template = _.template($('#user-list-template').html(), fdata);
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
function parseXml(xml) {
   var dom = null;
   if (window.DOMParser) {
      try { 
         dom = (new DOMParser()).parseFromString(xml, "text/xml"); 
      } 
      catch (e) { dom = null; }
   }
   else if (window.ActiveXObject) {
      try {
         dom = new ActiveXObject('Microsoft.XMLDOM');
         dom.async = false;
         if (!dom.loadXML(xml)) // parse error ..

            window.alert(dom.parseError.reason + dom.parseError.srcText);
      } 
      catch (e) { dom = null; }
   }
   else
      alert("cannot parse xml string!");
   return dom;
}