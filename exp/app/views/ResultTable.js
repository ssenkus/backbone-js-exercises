var ResultTable = Backbone.View.extend({
    collection: new ChosenFormulas(),
    events: {
        'change input.grams': 'calculateSubtotal',
        'click button.deleteItemBtn': 'removeItem',
        'click button#calculateTotal': 'calculateTotal'
    },
    removeItem: function(e) {
        // remove the item from the collection
        // uses data-formula attribute for model id
        this.collection.remove({id: $(e.target).data('formula')})
        $(e.target).parent().parent().fadeOut(200);
    },
    createTypeAhead: function() {
        var self = this;
        var PinyinLookup = Backbone.Typeahead.extend({
            template: $('#typeahead').html()
        });
        var pinyinLookup = new PinyinLookup({
            collection: new Formulas(),
            key: 'pinyin',
            itemTemplate: '<a><strong><%- pinyin %></strong> (<%- common_name %>) <%- concentration %> </a>'
        });
        console.log(this, pinyinLookup);
        pinyinLookup.setElement('#pinyinSearch').render();

        this.listenTo(pinyinLookup.collection, 'change', this.render);

        pinyinLookup.on('selected', function(model) {
            this.$el.find('input[name=productSearch]').val('');
            console.log('The user has selected:', model.id);
            self.collection.add(model);
            self.render();
        });

        pinyinLookup.collection.fetch().done(function() {
            self.render();
        });
    },
    initialize: function() {
        this.createTypeAhead();

    },
    render: function() {
        var view = this;
        $.when(
                $('#formulas-chosen').html(_.template($('#result-template').html(), {formulas: view.collection.models})))
                .then(function() {
            view.setElement($("#resultTable"));
        });
        return this;
    },
    calculateSubtotal: function(e) {
        // calculate subtotal for model after user inputs grams

        // this will need validation
        // for negative, non-numbers, etc.

        var $target = $(e.target);
        var id = $target.data('formula');
        var item = this.collection.get(id);
        var costPerGram = parseFloat(item.get('costPerGram'), 10);
        var grams = parseFloat($target.val(), 10);
        var subTotal = (grams * costPerGram).toFixed(2);

        // replace these with validation
        console.log('costPerGram', typeof costPerGram);
        console.log('grams', typeof grams);
        console.log('subTotal', typeof subTotal)

        // unit test this ASAP
        item.set({
            'grams': grams,
            'subTotal': subTotal
        });
    },
    calculateTotal: function(e) {
        // all all subtotals from models

        console.log($(e.target))
        var total = 0;

        // add all subtotals together
        this.collection.each(function(model) {
            total += parseFloat(model.get('subTotal'), 10);
        });
        console.log('calculated total', total);
        //$(e.target).parent().parent().fadeOut(1230)

    },
    formulaOptions: function() {
        //

    }
});