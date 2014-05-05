MealPlanner.module("MealsApp.Show", function(Show, MealPlanner, Backbone, Marionette, $, _) {
    Show.Meal = Marionette.ItemView.extend({
        template: '#meal-view',
        events: {
            'click .js-edit':'editClicked'
        },
        editClicked: function(e) {
            e.preventDefault();
            this.trigger('meal:edit', this.model);
        }
    });
    
    Show.MissingMeal = Marionette.ItemView.extend({
        template: '#missing-meal-view'
    });
    
});