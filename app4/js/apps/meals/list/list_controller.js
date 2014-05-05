MealPlanner.module('MealsApp.List', function(List, MealPlanner, Backbone, Marionette, $, _) {

    List.Controller = {
        listMeals: function() {
            var loadingView = new MealPlanner.Common.Views.Loading({
                title: 'Loading Meals',
                message: 'Please be patient, meals are on the way!'
                
            });
            MealPlanner.mainRegion.show(loadingView);
            
            var fetchingMeals = MealPlanner.request('meal:entities');

            $.when(fetchingMeals).done(function(meals) {
                var mealsListView = new List.Meals({
                    collection: meals
                });

                mealsListView.on("itemview:meal:show", function(childView, model) {
                    console.log("Received itemview:meal:show event on model ", model);
                    MealPlanner.trigger('meal:show', model.get('id'));
                });

                mealsListView.on('itemview:meal:edit', function(childView, model) {
                    var view = new MealPlanner.MealsApp.Edit.Meal({
                        model: model,
                        asModal: true
                    });

                    view.on('form:submit', function(data) {
                        if (model.save(data)) {
                            childView.render();
                            MealPlanner.dialogRegion.close();
                            childView.flash('success');
                        } else {
                            view.triggerMethod('form:data:invalid', model.validationError);
                        }
                        
                    });

                    MealPlanner.dialogRegion.show(view);
                    
                });

                mealsListView.on('itemview:meal:delete', function(childView, model) {
                    model.destroy();
                });

                MealPlanner.mainRegion.show(mealsListView);
            });
        }
    };

});