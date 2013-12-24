var CalculationForm = Backbone.View.extend({
    initialize: function() {
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
                $('#calculationForm').html(_.template($('#calculation-form').html(), {formulas: view.collection.models})))
                .then(function() {
            view.setElement($("#resultTable"));
        });
        return this;

    }


});


