MealPlanner.module('MealsApp.List', function(List, MealsApp, Backbone, Marionette, $, _) {
    List.Meal = Backbone.Marionette.ItemView.extend({
        template: '#meal-template',
        tagName: 'tr',
        events: {
            
            'click td': 'highlightName',
            
            'click button.deleteBtn': 'deleteClicked'

        },
        highlightName: function(e) {
            this.$el.toggleClass('warning')
        },
        deleteClicked: function(e) {
            e.stopPropagation();        
            //this.model.collection.remove(this.model)
            this.trigger('meal:delete', this.model);
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




