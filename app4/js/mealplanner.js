
var MealPlanner = new Marionette.Application();

MealPlanner.on('initialize:after', function() {
    console.log('after initialization');

    var meals = new MealPlanner.Meals([
        {
            title: 'Alice',
            description: 'Tampen'
        },
        {
            title: 'Bob',
            description: 'Brigham'
        },
        {
            title: 'Alice',
            description: 'Artsy'
        },        {
            title: 'Alice',
            description: 'Arten'
        },
        {
            title: 'Charlie',
            description: 'Campbell'
        },
        {
            title: 'Alice',
            description: 'Smith'
        },
        /*        
         new MealPlanner.Meal({ title: 'Potato Chips', description: 'delicious meal!'}),
         new MealPlanner.Meal({ title: 'Burrito', description: 'An arrangement mexican of rice, cheese, and beans.'}),
         new MealPlanner.Meal({ title: 'Popcorn', description: 'delicious meal!'}),
         new MealPlanner.Meal({ title: 'Burrito', description: 'An arrangement of rice, cheese, and beans.'}),
         new MealPlanner.Meal({ title: 'Sandwich', description: 'Bread, cheese, meat, cold'}),
         */

    ]);

    var mealsListView = new MealPlanner.MealsView({
        collection: meals

    });
    MealPlanner.mainRegion.show(mealsListView);
});

MealPlanner.addRegions({
    mainRegion: '#main-region'
});








MealPlanner.Meal = Backbone.Model.extend({
    defaults: {
        title: 'Default Title',
        description: 'This is the default description'

    }

});


MealPlanner.Meals = Backbone.Collection.extend({
    model: MealPlanner.Meal,
    comparator: function(m) {
        // sort by multiple 
        return [m.get('title'), m.get('description')];
    }
});

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