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




});