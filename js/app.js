var SearchView = Backbone.View.extend({
    el: '#main',
    initialize: function() {
        this.render();
    },
    render: function() {
        // Compile the template using underscore
        var template = _.template($("#search_template").html(), {search_label: 'dfgdf'});
        // Load the compiled HTML into the Backbone "el"
        this.$el.html(template);
    }
});

var search_view = new SearchView({el: $("#search_container")});
var arrivals = Backbone.Collection.extend({
      arrival: model.arrival,
      localStorage: new Store("backbone-todo")
    });
