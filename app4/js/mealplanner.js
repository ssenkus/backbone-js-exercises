
    var mealsListView = new MealPlanner.MealsView({
        collection: meals

    });
    MealPlanner.mainRegion.show(mealsListView);











MealPlanner.MealItemView = Backbone.Marionette.ItemView.extend({
    template: '#meal-template',
    tagName: 'li',
    events: {
        'click': 'doAlert'

    },
    doAlert: function() {
        alert(this.model.get('phoneNumber'))

    }

});

MealPlanner.MealsView = Backbone.Marionette.CollectionView.extend({
    tagName: 'ul',
    itemView: MealPlanner.MealItemView
});

MealPlanner.start();