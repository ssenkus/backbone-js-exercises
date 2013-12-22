$(document).ready(function() {

    window.formulaTable = new FormulaTable();

    var PinyinLookup = Backbone.Typeahead.extend({
        template: $('#typeahead').html()
    });
    var pinyinLookup = new PinyinLookup({
        collection: window.formulaTable.collection,
        key: 'pinyin',
        itemTemplate: '<a><strong><%- pinyin %></strong> </td><td>(<%- common_name %>)  <%- concentration %></a>'
    });
    pinyinLookup.setElement('#pinyinSearch').render();

    window.chosenTable = new ResultTable();
});




