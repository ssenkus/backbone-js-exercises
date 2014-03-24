var app = {};
$(document).ready(function() {

    app.itemLookup = new ItemLookup({
        collection: new Formulas(),
        key: 'pinyin',  // keep string for now
        limit: 20,
        itemTemplate: '<a><strong><%-  pinyin  %></strong></a>'
    });

    app.chosenTable = new ResultTable();
    app.helpMessage = new HelpMessage();
    app.helpBox = new HelpBox({model: app.helpMessage});


    app.itemLookup.on('selected', function(model) {
        // update collection, updates view
        app.chosenTable.collection.add(model);
        // help message placeholder
        app.helpMessage.set({
            title:  'Create Your Formula', // model.get('pinyin'),
            message: 'Select another item, or start entering grams' //model.get('common_name') + '<br /> sdlfkjsdlfkjsdf'
        });
        
        // clear input
        this.$el.find('input').val('');
        console.log('The user has selected:', model.id);
    });

    
    //app.


});
















