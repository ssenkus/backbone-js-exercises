MealPlanner.module("MealsApp", function(MealsApp, MealPlanner, Backbone, Marionette, $, _) {
    MealsApp.Router = Marionette.AppRouter.extend({
        appRoutes: {
            "meals": "listMeals",
            'meals/:id': 'showMeal',
            'meals/:id/edit': 'editMeal'
        }
    });

    var API = {
        listMeals: function() {
            console.log("route to list meals was triggered");
            MealsApp.List.Controller.listMeals();
        },
        showMeal: function(id) {
            console.log('route to show meal ' + id + ' was triggered');
            MealsApp.Show.Controller.showMeal(id);
        },
        editMeal: function(id) {
            console.log('edit that meal!', id);
            MealsApp.Edit.Controller.editMeal(id);
            
        }
        
    };

    MealPlanner.on('meal:show', function(id) {
        MealPlanner.navigate("meals/" + id);
        API.showMeal(id);
    });

    MealPlanner.on('meal:edit', function(id) {
        MealPlanner.navigate('meals/' + id + '/edit');
        API.editMeal(id);
    });

    MealPlanner.on('meals:list', function() {
        MealPlanner.navigate('meals');
        API.listMeals();

    });

    MealPlanner.addInitializer(function() {
        new MealsApp.Router({
            controller: API
        });
    });

});