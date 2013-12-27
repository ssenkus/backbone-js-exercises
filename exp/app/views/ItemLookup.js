var ItemLookup = Backbone.Typeahead.extend({
    initialize: function() {
        var self = this;
        this.setElement('#itemSearch');
        this.collection.fetch().done(function() {
            self.render();
        });

    }
});
