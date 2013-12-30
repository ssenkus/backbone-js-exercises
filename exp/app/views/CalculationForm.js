var CalculationForm = Backbone.View.extend({
    
    events: {
        'submit form': 'submitForm' // not working
        ,'click':'submitForm'
        ,'change input': 'loginput'
    },
    loginput: function(e) {
        console.log('loginput', e)
    },
    submitForm: function(e) {
        console.log(e)
        e.preventDefault();
        alert('this form shoulda submitted, eh?!')
        
    },
    initialize: function(options) {
        console.log('CalculationForm intialize: this', this,'options', options)
        this.model = new FormulaTotal({subTotal: options.subTotal, items: options.items});
        console.log('derp',this.model, this.model.toJSON());
        this.collection = app.chosenTable.collection;
        this.render();
    },
    render: function() {
        var view = this;
        console.log('model', this.model)
        $.when($('#calculationForm').html(_.template($('#calculation-form').html(), {subTotal: this.model.get('subTotal')})))
            .then(function() {
            view.setElement($("#checkout"));
        });
        return this;
    }

});


