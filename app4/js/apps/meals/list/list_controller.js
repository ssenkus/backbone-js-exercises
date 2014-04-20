MealPlanner.module('MealsApp.List', function(List, MealPlanner, Backbone, Marionette, $, _) {

    List.Controller = {
        listMeals: function() {
            var meals = MealPlanner.request('meal:entities')
            var mealsListView = new List.Meals({
                collection: meals
            });


            mealsListView.on('itemview:meal:delete', function(childView, model) {
                meals.remove(model)

            });

            mealsListView.on("itemview:meal:show", function(childView, model) {
                console.log("Received itemview:meal:show event on model ", model)
                MealPlanner.MealsApp.Show.Controller.showMeal(model);
            });


            MealPlanner.mainRegion.show(mealsListView);
        }


    };

});