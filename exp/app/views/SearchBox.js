var SearchBox = Backbone.Typeahead.extend({
    collection: new Formulas(),    
    events: {
        'selected input': 'al',

    },
    al: function(e) {
        alert('search box seleted')

    },
    a: function(e) {
        if (e.keyCode === 40) {
            console.log(this)
            this.searchInput();
        }
    },
    initialize: function() {
        this.setElement('#itemSearch');
        var self = this;
        $.when(this.collection.fetch()).then(function() {

            self.on('selected', function(model) {
                this.$el.find('input[name=productSearch]').val('');
                console.log('The user has selected:', model.id);
                self.collection.add(model);
                console.log(model.toJSON())
                self.render();
            });

            self.render();
        });
    }
});


//    searchBox.on('selected', function(model) {
//        this.$el.find('input[name=productSearch]').val('');
//        console.log('The user has selected:', model.id);
//        self.collection.add(model);
//        self.render();
//    });
//    searchBox.$('#searchBy').on('change', function() {
//        var newSearchBy = $(this).val();
//        searchBox.options.key = newSearchBy;
//
//    });