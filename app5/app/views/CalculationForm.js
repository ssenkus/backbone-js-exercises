var CalculationForm = Backbone.View.extend({
    events: {
//        'submit form': 'submitForm' // not working
//        ,'click':'submitForm'
        'change input': 'loginput',
        'change select[name=shipping]': 'setShipping',
        'change select[name=discount]': 'setDiscount',
        'click #submitBtn': 'formulaSubmit',
        'click #recalc': 'recalculate'
    },
       recalculate: function() {
        $('#itemSearch, hr').slideDown(500);
        
        
        },
    setShipping: function(e) {

        this.model.set({shipping: this.$('select[name=shipping]').val()})
        console.log(this.model)
    },
    setDiscount: function(e) {
        
        this.model.set({discount: this.$('select[name=discount]').val()});
        console.log(this.model)
    },
    loginput: function(e) {
        e.preventDefault();
        console.log('loginput', e)
    },
    formulaSubmit: function(e) {
        e.preventDefault();
        alert(JSON.stringify(this.model.toJSON()));
        console.log('formulaSubmit: this.model = ', this.model)

    },
    submitForm: function(e) {
        console.log(e)
        e.preventDefault();
        alert('this form shoulda submitted, eh?!')

    },
    initialize: function(options) {
        console.log('CalculationForm intialize: this', this, 'options', options)
        this.model = new FormulaTotal({subTotal: options.subTotal,
            items: options.items});
        console.log('derp', this.model, this.model.toJSON());
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


