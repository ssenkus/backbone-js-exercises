MealPlanner.module("Entities", function(Entities, ContactManager, Backbone, Marionette, $, _) {

    Entities.Meal = Backbone.Model.extend({
        defaults: {
            title: 'Default Title',
            description: 'This is the default description'
        }
    });


    Entities.MealCollection = Backbone.Collection.extend({
        model: Entities.Meal,
        comparator: function(m) {
            // sort by multiple 
            return [m.get('title'), m.get('description')];
        }
    });

    var meals;
    var initializeMeals = function() {
        meals = new MealPlanner.Entities.MealCollection([
            {
                id: 1,
                title: 'zxcvzcv',
                description: 'asdfadf'
            }, {
                id: 2,
                title: 'qwer',
                description: 'qwerqwerqwer'
            }, {
                id: 3,
                title: 'zxcvzcv',
                description: 'ghgkghjk'
            }
        ]);
    };

    var API = {
        getMealEntities: function() {
            if (meals === undefined) {
                initializeMeals();
            }
            return meals;
        }
    };

    MealPlanner.reqres.setHandler("meal:entities", function() {
        return API.getMealEntities();
    });


});