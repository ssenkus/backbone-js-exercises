var ResultTable = Backbone.View.extend({
    collection: new ChosenFormulas(),
    events: {
        'change input.grams': 'calculateSubtotal',
        'click tr': 'a'
    },
    a: function() {
        var $target = $(e.target);
        console.log($target);
    },
    initialize: function() {
        var self = this;
        this.listenTo(this.collection, 'change', this.render);
        console.log(this.collection);
        this.render()
    },
    render: function() {
        var view = this;
        $.when(
            $('#formulas-chosen').html(_.template($('#formula-template').html(), {formulas: view.collection.models})))
            .then(function() {
            view.setElement($(".formula-table")[1]);
        });
        return this;
    },
    calculateSubtotal: function(e) {
        var $target = $(e.target);
        var $costPerGram = $target.parent().next().find('input').val();
        var $subTotal = $target.parent().next().next().find('.subtotal');
        console.log($target.val(), $costPerGram, $subTotal.text());
        $subTotal.text(($costPerGram * $target.val()).toFixed(2));

    }

});