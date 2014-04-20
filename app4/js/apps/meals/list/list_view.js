MealPlanner.module('MealsApp.List', function(List, MealsApp, Backbone, Marionette, $, _) {
    List.Meal = Backbone.Marionette.ItemView.extend({
        template: '#meal-template',
        tagName: 'li',
        events: {
            'click': 'doAlert'

        },
        doAlert: function() {
            alert(this.model.get('title'));

        }

    });

    List.Meals = Backbone.Marionette.CollectionView.extend({
        tagName: 'ul',
        itemView: List.Meal
    });



});




