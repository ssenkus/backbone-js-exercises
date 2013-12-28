var ResultTable = Backbone.View.extend({
    collection: new ChosenFormulas(),
    events: {
        'change input.grams': 'calculateSubtotal',
        'click button.deleteItemBtn': 'removeItem',
        'click button#calculateTotal': 'calculateTotal',
    },
    initialize: function() {
        this.collection.bind('add', this.render, this)
        this.collection.bind('set', this.render, this)
        this.render();
    },
    render: function() {
        var view = this;
        $.when(
            $('#formulas-chosen').html(_.template($('#result-template').html(),
            {formulas: view.collection.models})))
            .then(function() {
            view.setElement($("#resultContainer"));
        });
        return this;
    },
    removeItem: function(e) {
        // remove the item from the collection
        // uses data-formula attribute for model id
        this.collection.remove({id: $(e.target).data('formula')})
        $(e.target).parent().parent().fadeOut(200);
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
        var subTotal = (grams * costPerGram);

        // replace these with validation
        console.log('costPerGram', typeof costPerGram, costPerGram);
        console.log('grams', typeof grams, grams);
        console.log('subTotal', typeof subTotal, subTotal)

        // unit test this ASAP
        item.set({
            'grams': grams,
            'subTotal': subTotal
        });
        
        this.render();
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
        $('#itemSearch, hr').slideUp(500);
        $(e.target).slideUp(530, function() {
            app.calc = new CalculationForm({subTotal: total});

        })
    }
});