MealPlanner.module('MealsApp.Edit', function(Edit, MealPlanner, Backbone, Marionette, $, _) {

    Edit.Controller = {
        editMeal: function(id) {

            var loadingView = new MealPlanner.Common.Views.Loading({
                title: 'Loading Meal for Editing',
                message: 'Meal is loading, please wait patiently...'

            });

            MealPlanner.mainRegion.show(loadingView);

            var fetchingMeal = MealPlanner.request('meal:entity', id);
            $.when(fetchingMeal).done(function(meal) {
                var view;
                if (meal !== undefined) {
                    view = new Edit.Meal({
                        model: meal
                    });

                    view.on('form:submit', function(data) {
                        if (meal.save(data)) {
                            MealPlanner.trigger('meal:show', meal.get('id'));
                        } else {
                            view.triggerMethod('form:data:invalid', meal.validationError);
                        }
                    });

                } else {
                    view = new MealPlanner.MealsApp.Show.MissingContact();

                }

                MealPlanner.mainRegion.show(view);

            });


        }


    }

});