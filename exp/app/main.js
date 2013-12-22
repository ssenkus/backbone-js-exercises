var Formula = Backbone.Model.extend({
    defaults: {
        pinyin: 'default',
        common_name: 'default',
        brand_name: 'default',
        concentration: 'default',
        weight: '-1',
        costPerGram: '-1',
        subTotal: '-1'
    },
    parse: function(response) {
            return response;
    }
});

var Formulas = Backbone.Collection.extend({
    model: Formula,
    url: 'json/products.json',
    parse: function(response) {

        console.log('collection - parse', response);
        return response;

    }
});

var Row = Backbone.View.extend({
    collection: new Formulas,
    initialize: function() {
        
            var self = this;
            //this.collection.bind('reset refresh', this.render, this);
            //this.collection.bind("reset", _.bind(this.render, this));
            this.listenTo(this.collection, 'sync', this.render);
            this.listenTo(this.collection, 'change', this.render);
            this.collection.fetch().done(function() {
                self.render();
            });        
        
        
        
        
//        
//        
//        this.collection = new Formulas() /*[new Formula({pinyin: 'Bai Fu Zi'}),
//            new Formula({pinyin: 'anna'}),
//            new Formula({pinyin: 'henry'})]); */
//        var that = this;
//        this.listenTo(this.collection, 'fetch', this.render, this);
//        this.collection.fetch();
    },
    render: function() {
        console.log(this);
        var tpl = _.template($('#formula-template').html(), {formulas: this.collection.models});
        // Compile the template using underscore
        //var template = _.template( $("#search_template").html(), variables );
        // Load the compiled HTML into the Backbone "el"
        $('body').append(tpl)//this.$el.html(tpl));
        return this;
    }

});

$(document).ready(function() {
    window.row = new Row();
})




