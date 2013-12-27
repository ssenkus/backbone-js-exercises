var CalculationForm = Backbone.View.extend({
    initialize: function(options) {
        this.subTotal = options.subTotal || 0;
        console.log('calform options', options)
        this.collection = new Formulas([
            new Formula({}),
            new Formula({}),
            new Formula({})
        ]);
        this.render();
    },
    render: function() {

        var view = this;
        $.when(
                $('#calculationForm').html(_.template($('#calculation-form').html(), {formulas: view.collection.models, subTotal: this.subTotal})))
                .then(function() {
            view.setElement($("#resultTable"));
        });
        return this;
    }


});


