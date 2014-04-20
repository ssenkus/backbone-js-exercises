MealPlanner.module("MealsApp.Show", function(Show, MealPlanner, Backbone, Marionette, $, _) {
    Show.Controller = {
        showMeal: function(model) {
            console.log("showMeal called for model ", model)

            var mealView = new Show.Meal({
                model: model
            });

            MealPlanner.mainRegion.show(mealView);

        }
    };
});