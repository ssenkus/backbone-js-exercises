MealPlanner.module('MealsApp.Edit', function(Edit, MealPlanner, Backbone, Marionette, $, _) {
    
    Edit.Meal = Marionette.ItemView.extend({
        template: '#meal-form',
        events: {
            'click button.js-submit': 'submitClicked'
        },
        submitClicked: function(e) {
            e.preventDefault();
            alert('clicked dat button');
        }
        
    });
    
});