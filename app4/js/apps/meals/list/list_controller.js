MealPlanner.module('MealsApp.List', function(List, MealPlanner, Backbone, Marionette, $, _) {

    List.Controller = {
        listMeals: function() {
            var meals = MealPlanner.request('meal:entities')
            var mealsListView = new List.Meals({
                collection: meals
            });
            
            MealPlanner.mainRegion.show(mealsListView);
        }


    };

});