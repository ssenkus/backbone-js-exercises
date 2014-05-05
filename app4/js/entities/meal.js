MealPlanner.module("Entities", function(Entities, ContactManager, Backbone, Marionette, $, _) {

    Entities.Meal = Backbone.Model.extend({
        urlRoot: 'meals',
        /*        defaults: {
         title: 'Default Title',
         description: 'This is the default description',
         calories: 123
         } */
    });

    Entities.configureStorage(Entities.Meal);


    Entities.MealCollection = Backbone.Collection.extend({
        model: Entities.Meal,
        url: 'meals',
        comparator: function(m) {
            // sort by multiple 
            return [m.get('title'), m.get('description')];
        }
    });

    console.log('Entities', Entities)
    Entities.configureStorage(Entities.MealCollection);

    var meals;
    var initializeMeals = function() {
        meals = new MealPlanner.Entities.MealCollection([
            {
                id: 1,
                title: 'Snack Bars',
                description: 'A delicious treat!'
            }, {
                id: 2,
                title: 'Tomato Soup',
                description: 'A liquid meal'
            }, {
                id: 3,
                title: 'Gluten-Free French Bread',
                description: 'All the bread you love, without the gluten!'
            }
        ]);

        meals.forEach(function(meal) {
            meal.save();
        });

        return meals;
    };

    var API = {
        getMealEntities: function() {
            var meals = new Entities.MealCollection();
            var defer = $.Deferred();
            meals.fetch({
                success: function(data) {
                    defer.resolve(data);
                },
                error: function(data) {
                    alert('error');
                }
            });

            var promise = defer.promise();
            $.when(promise).done(function(meals) {
                console.log('meals??', meals);
                if (meals.length === 0) {
                    console.log('got here!!!')
                    var models = initializeMeals();
                    meals.reset(models);
                }
            });
            return promise;
        },
        getMealEntity: function(mealId) {
            var meal = new Entities.Meal({id: mealId});
            var defer = $.Deferred();
            setTimeout(function() {
                meal.fetch({
                    success: function(data) {
                        console.log('getMealEntity', meal, data)
                        defer.resolve(data);
                    },
                    error: function(data) {
                        defer.resolve(undefined);

                    }
                });
            }, 2000);


            return defer.promise();
        }
    };

    MealPlanner.reqres.setHandler("meal:entity", function(id) {
        return API.getMealEntity(id);
    });

    MealPlanner.reqres.setHandler("meal:entities", function() {
        return API.getMealEntities();
    });


});