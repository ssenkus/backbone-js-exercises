var CalculationForm = Backbone.View.extend({
    events: {
        'submit form': 'submitForm' // not working
    },
    submitForm: function(e) {
        
        e.preventDefault();
        alert('this form shoulda submitted, eh?!')
        
    },
    initialize: function(options) {
        this.subTotal = options.subTotal || 0;
        console.log('calform options', options)
        this.collection = app.chosenTable.collection;
        this.render();
    },
    render: function() {
        var view = this;
        $.when($('#calculationForm').html(_.template($('#calculation-form').html(), {formulas: view.collection.models, subTotal: this.subTotal})))
            .then(function() {
            view.setElement($("#resultTable"));
        });
        return this;
    }

});


