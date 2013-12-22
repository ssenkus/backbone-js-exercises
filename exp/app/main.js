var Formula = Backbone.Model.extend({
    defaults: {
        pinyin: 'default',
        common_name: 'default',
        brand_name: 'default',
        concentration: 'default',
        grams: '0',
        costPerGram: '-1',
        subTotal: '0'
    }
});

var Formulas = Backbone.Collection.extend({
    model: Formula,
    url: 'json/products.json'
});

var FormulaTable = Backbone.View.extend({
    collection: new Formulas,
    events: {
        'change input.grams': 'calculateSubtotal'

    },
    initialize: function() {
        var self = this;
        this.listenTo(this.collection, 'change', this.render);
        this.collection.fetch().done(function() {
            self.render();
        });
    },
    render: function() {


        var view = this;

        $.when(
            $('#formulas-all').html(_.template($('#formula-template').html(), {
            formulas: view.collection.models
        }))).then(function() {
            view.setElement($("#formula-table"));
        });
        return this;
    },
    calculateSubtotal: function(e) {
        var $target = $(e.target);
        var $costPerGram = $target.parent().next().find('input').val();
        var $subTotal = $target.parent().next().next().find('.subtotal');
        console.log($target.val(), $costPerGram, $subTotal.text())
        $subTotal.text(($costPerGram * $target.val()).toFixed(2));

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




