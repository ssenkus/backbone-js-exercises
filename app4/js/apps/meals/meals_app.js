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
            
            MealPlanner.execute('set:active:header','meals');
            
        },
        showMeal: function(id) {
            console.log('route to show meal ' + id + ' was triggered');
            MealsApp.Show.Controller.showMeal(id);
            MealPlanner.execute('set:active:header','meals');
        },
        editMeal: function(id) {
            console.log('edit that meal!', id);
            MealsApp.Edit.Controller.editMeal(id);
            MealPlanner.execute('set:active:header','meals');
            
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