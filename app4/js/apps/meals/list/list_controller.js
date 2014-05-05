MealPlanner.module('MealsApp.List', function(List, MealPlanner, Backbone, Marionette, $, _) {

    List.Controller = {
        listMeals: function() {
            var loadingView = new MealPlanner.Common.Views.Loading({
                title: 'Loading Meals',
                message: 'Please be patient, meals are on the way!'

            });
            MealPlanner.mainRegion.show(loadingView);

            var fetchingMeals = MealPlanner.request('meal:entities');

            var mealsListLayout = new List.Layout();
            var mealsListPanel = new List.Panel();

            $.when(fetchingMeals).done(function(meals) {
                var mealsListView = new List.Meals({
                    collection: meals
                });

                mealsListLayout.on('show', function() {
                    mealsListLayout.panelRegion.show(mealsListPanel);
                    mealsListLayout.mealsRegion.show(mealsListView);
                });

                mealsListPanel.on('meal:new', function() {
                    console.log('ssdfsdf')
                    var newMeal = new MealPlanner.Entities.Meal({
                        
                        
                    });
                    console.log(newMeal);
                    var view = new MealPlanner.MealsApp.New.Meal({
                        model: newMeal,
                        asModal: true
                    });
                    console.log(view);
                    view.on('form:submit', function(data) {
                        var highestId = meals.max(function(c) {
                            return c.id;
                        });
                        highestId = highestId.get('id');
                        data.id = highestId + 1;
                        console.log(data)
                        if (newMeal.save(data)) {
                            alert(1)
                            meals.add(newMeal);
                            MealPlanner.dialogRegion.close();
                            mealsListView.children.findByModel(newMeal).flash('success');

                        } else {
                            
                            view.triggerMethod('form:data:invalid', newMeal.validationError);

                        }

                    });
                    console.log('got hererere', view);
                    MealPlanner.dialogRegion.show(view);
                    console.log('dR',MealPlanner.dialogRegion);
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

                MealPlanner.mainRegion.show(mealsListLayout);
            });
        }
    };

});