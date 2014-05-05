MealPlanner.module("MealsApp.Show", function(Show, MealPlanner, Backbone, Marionette, $, _) {
    Show.Meal = Marionette.ItemView.extend({
        template: '#meal-view'
    });
    
    Show.MissingMeal = Marionette.ItemView.extend({
        template: '#missing-meal-view'
    });
    
});