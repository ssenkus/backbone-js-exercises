MealPlanner.module("MealsApp.Show", function(Show, MealPlanner, Backbone, Marionette, $, _) {
    Show.Meal = Marionette.ItemView.extend({
        template: "#meal-view"
    });
});