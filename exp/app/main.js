var Formula = Backbone.Model.extend({
    defaults: {
        pinyin: 'default',
        common_name: 'default',
        brand_name: 'default',
        concentration: 'default',
        grams: '-1',
        costPerGram: '-1',
        subTotal: '-1'
    }
});

var Formulas = Backbone.Collection.extend({
    model: Formula,
    url: 'json/products.json'
});

var FormulaTable = Backbone.View.extend({
    collection: new Formulas,
    initialize: function() {
        var self = this;
        this.listenTo(this.collection, 'change', this.render);
        this.collection.fetch().done(function() {
            self.render();
        });
    },
    render: function() {
        console.log(this);
        var tpl = _.template($('#formula-template').html(), {formulas: this.collection.models});
        $('.container').append(tpl);
        return this;
    }

});



$(document).ready(function() {

    window.formulaTable = new FormulaTable();
    var Bootstrap2 = Backbone.Typeahead.extend({
        template: '<input type="text" class="form-control" placeholder="Search" /><ul class="typeahead dropdown-menu"></ul>',
    });
    var typeahead = new Bootstrap2({
        collection: window.formulaTable.collection,
        key: 'pinyin',
        itemTemplate: '<a><strong><%- pinyin %> </strong> (<%- common_name %>)</a>'
    });
    typeahead.setElement('#pinyinSearch').render();


});




