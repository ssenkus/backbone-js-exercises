MealPlanner.module('MealsApp.Edit', function(Edit, MealPlanner, Backbone, Marionette, $, _) {

    Edit.Meal = MealPlanner.MealsApp.Common.Views.Form.extend({
        initialize: function() {
            this.viewTitle = 'Edit ' + this.model.get('title');

        }

    });
});