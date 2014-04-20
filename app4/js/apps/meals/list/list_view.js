MealPlanner.module('MealsApp.List', function(List, MealsApp, Backbone, Marionette, $, _) {
    List.Meal = Backbone.Marionette.ItemView.extend({
        template: '#meal-template',
        tagName: 'tr',
        events: {
            // by clicking this td...
            'click td': 'highlightName',
            // ... doAlert will get executed ...
            'click': 'doAlert'

        },
        highlightName: function(e) {
            e.preventDefault();
            // ... unless we manually stop propagation ...
            e.stopPropagation();
            alert(this.$(e.currentTarget).text())
        },
        doAlert: function() {
            // ... which makes sure the event doesn't bubble up
            // and execute this function
            alert('propagation!')

        },    
    });

    List.Meals = Backbone.Marionette.CompositeView.extend({
        tagName: 'table',
        className: 'table table-bordered table-striped table-hover',
        itemView: List.Meal,
        template: '#meal-list',
        itemViewContainer: 'tbody'
    });



});




