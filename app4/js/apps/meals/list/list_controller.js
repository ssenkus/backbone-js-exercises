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
            
            MealPlanner.mainRegion.show(mealsListView);
        }


    };

});