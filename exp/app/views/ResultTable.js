var ResultTable = Backbone.View.extend({
    collection: new ChosenFormulas(),
    events: {
        'change input.grams': 'calculateSubtotal',
        'click th': 'add',
        'click button.deleteItemBtn': 'del',
        'click button#calculateTotal': 'calculateTotal'

    },
    add: function(e) {
        this.collection.add({});
        this.render();

    },
    del: function(e) {
        this.collection.remove({id: $(e.target).data('formula')})
        $(e.target).parent().parent().fadeOut(200);
    },
    calculateTotal: function(e) {
        console.log(this.collection.models);
        var total = 0;
        this.collection.each(function(element, iterator, list) {
            console.log('element', element.get('subTotal'));
            console.log('iterator',iterator);
            console.log('list', list);
           total += parseInt(element.get('subTotal'),10)
        });
        alert(total);
        

    },
    initialize: function() {
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
            console.log('The user has selected:', model.id);
            self.collection.add(model);
            self.render();
        });

        pinyinLookup.collection.fetch().done(function() {
            self.render();
        });

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
        var $target = $(e.target);
        var $costPerGram = $target.parent().next().find('input').val();
        var $subTotal = $target.parent().next().next().find('.subtotal');
        console.log($target.val(), $costPerGram, $subTotal.text());
        $subTotal.text(($costPerGram * $target.val()).toFixed(2));
        // TODO: update Sub_total for model based off of the data-formula attribute
        console.log('sdfsdfsdfsdf',$(e.target).data('formulas'));
        

    }

});