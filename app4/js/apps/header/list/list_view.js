MealPlanner.module('HeaderApp.List', function(List, MealPlanner, Backbone, Marionette, $, _) {

    List.Header = Marionette.ItemView.extend({
        template: '#header-link',
        tagName: 'li',
        events: {
            'click a': 'navigate'
        },
        navigate: function(e) {
            e.preventDefault();
            this.trigger('navigate',this.model);
        },
            
        onRender: function() {
            if (this.model.selected) {
                this.$el.addClass('active');
            }
        }
    });

    List.Headers = Marionette.CompositeView.extend({
        template: '#header-template',
        className: 'navbar',
        itemView: List.Header,
        itemViewContainer: 'ul',
        events: {
            'click a.brand': 'brandClicked'

        },
        brandClicked: function(e) {
            e.preventDefault();
            this.trigger('brand:clicked');

        }
    });

});