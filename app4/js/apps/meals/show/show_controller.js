MealPlanner.module("MealsApp.Show", function(Show, MealPlanner, Backbone, Marionette, $, _) {
    
    Show.Controller = {
        showMeal: function(id) {
            console.log("showMeal called for model ", id);
            
            var loadingView = new MealPlanner.Common.Views.Loading({
                title: 'Retrieving data!',
                message: 'Your data will be available shortly'
            });
            MealPlanner.mainRegion.show(loadingView);
            
            var fetchingMeal = MealPlanner.request('meal:entity', id);
            $.when(fetchingMeal).done(function(meal) {
                console.log('fetched', fetchingMeal, meal);

                var mealView;
                if (meal !== undefined) {
                    mealView = new Show.Meal({
                        model: meal
                    });
                    
                    mealView.on('meal:edit', function(meal) {
                        console.log('triggering MealPlanner meal:edit')
                        MealPlanner.trigger('meal:edit', meal.get('id'));
                    });
                } else {
                    console.log('MissingMeal!!')
                    mealView = new Show.MissingMeal();
                }
                MealPlanner.mainRegion.show(mealView);

            });
        }
    }
});