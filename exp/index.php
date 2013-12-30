<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">        
        <title>Title</title>
        <link href="http://netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css" type="text/css" rel="stylesheet" />
        <style>
            .dropdown-menu {
                border: none;
                padding: 0;
                width: 100%;
            }
            .dropdown-menu li {
                width: 50%;
                float:left;
                padding: 2px;
            }
            .dropdown-menu li a {
                display: block;
                
            }

            .dropdown-menu li a:hover, .dropdown-menu li a:focus     {
                display: block;
                background-color: rgb(50, 118, 177);
                color: #fff;
                text-shadow: -1px 1px 0px #000;
            }            
            #searchBy {
                display: block;
                
            }

        </style>
    </head>
    <body>
        
        
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h1>Formulas</h1>
                </div>
                <div class="col-md-6" id="helpBox"></div>
            </div>
            <hr />
            <div class="row">
                <div class="col-md-12" id="itemSearch"></div>
            </div>
            <hr />            
            <div class="row">
                <div id="formulas-chosen"></div>
                <div id="calculationForm"></div>
            </div>
        </div>
        
        
        
        <!-- app dependencies -->
        <script src="app/lib/jquery-1.10.2.js"></script>
        <script src="app/lib/underscore.js"></script>
        <script src="app/lib/backbone.js"></script>
        <script src="app/lib/backbone.typeahead.js"></script>        
        <script src="app/lib/jquery.transit.min.js"></script>
        <!-- Models -->
        <script src="app/models/FormulaItem.js"></script>
        <script src="app/models/FormulaTotal.js"></script>
        <script src="app/models/HelpMessage.js"></script>
        <!-- Collections -->
        <script src="app/collections/ChosenFormulas.js"></script>
        <script src="app/collections/FormulaItems.js"></script>
        <!-- Views -->
        <script src="app/views/ItemLookup.js"></script>
        <script src="app/views/ResultTable.js"></script>
        <script src="app/views/CalculationForm.js"></script>
        <script src="app/views/HelpBox.js"></script>
        <!-- Main function -->
        <script src="app/main.js"></script>

        <script type="text/template" id="typeahead">
            <form class="form-inline">
                <div class="form-group col-md-4" >
                    <label for="productSearch">Search</label>
                    <input name="productSearch" type="text" class="form-control" autocomplete="off" placeholder="Find results easy with Autocomplete (Type a letter)" />
                </div>
                <div class="form-group col-md-4">    
                    <label for="searchBy">Search by:</label>
                    <select id="searchBy" name="searchBy" class="form-control">
                        <option value="pinyin">Pinyin</option>
                        <option value="common_name">Common name</option>
                        <option value="brand">Brand</option>
                    </select>
                </div>
            </form>
            <ul class="typeahead dropdown-menu"></ul>
        </script>
        
        <script type="text/template" id="help-box-template">
            <div id="helpBoxContainer">
                <h3><%= helpMessage.get('title') %></h3>
                <p><%= helpMessage.get('message') %></p>
            </div>
        </script>

        <script type="text/template" id="formula-template">
            <table class="formula-table table table-striped table-bordered table-condensed">
                <thead>
                    <tr>
                        <th class="col-md-5">Pinyin</th>
                        <th class="">Common Name</th>
                        <th class="">Brand</th>
                        <th>Concentration</th>
                        <th class="col-sm-5">Grams</th>
                        <th>Cost/Gram</th>
                        <th>Subtotal</th>
                        <th>ACTIONS</td>
                    </tr>
                </thead>
                <tbody>
                    <% _.each(formulas, function(formula) { %>
                    <tr>
                        <td><%= formula.get('pinyin') %></td>
                        <td><%= formula.get('common_name') %></td>
                        <td><%= formula.get('brand_name') %></td>
                        <td><%= formula.get('concentration') %></td>
                        <td><input class="form-control" type="text" disabled="disabled" value="<%= formula.get('costPerGram') %>" /></td>                        
                        <td><input class="form-control grams" type="range" min="0" step="0.01" max="20" value="<%= formula.get('grams') %>" /></td>
                        <td><span class="subtotal"><%= formula.get('subTotal') %></span></td>
                        <td><button type="button" class="btn btn-danger">Delete</button></td>
                    </tr>
                    <% }); %>  
                </tbody>
            </table>
        </script>
        
        <script type="text/template" id="result-template">
            <div id="resultContainer" class="row">
                <table id="resultTable" class="table table-striped table-bordered table-condensed">
                    <thead>
                        <tr>
                            <th class="col-sm-2">Pinyin</th>
                            <th class="col-md-2">Common Name</th>
                            <th class="col-md-2">Brand</th>
                            <th>Concentration</th>
                            <th>Grams</th>
                            <th>Cost/Gram</th>
                            <th>Subtotal</th>
                            <th>ACTIONS</td>
                        </tr>
                    </thead>
                    <tbody>
                        <% _.each(formulas, function(formula) { %>
                        <tr>
                            <td><%= formula.get('pinyin') %></td>
                            <td><%= formula.get('common_name') %></td>
                            <td><%= formula.get('brand_name') %></td>
                            <td><%= formula.get('concentration') %></td>
                            <td><input data-formula="<%- formula.get('id') %>" class="form-control grams" value="<%= formula.get('grams') %>" /></td>
                            <td><input class="form-control" type="text" disabled="disabled" value="<%= formula.get('costPerGram') %>" /></td>
                            <td><span data-formula="<%- formula.get('id') %>" class="subtotal"><%= formula.get('subTotal') %></span></td>
                            <td><button data-formula="<%- formula.get('id') %>" type="button" class="deleteItemBtn btn btn-danger">Delete</button></td>
                        </tr>
                        <% }); %>  
                        <tr>
                        </tr>
                    </tbody>
                </table>
                <div class="row">
                    <button style="margin: 20px; float: right; display: block;" id="calculateTotal" class="btn btn-primary">Calculate</button>
                </div>
            </div>
        </script>        
        
        
        <script type="text/template" id="calculation-form" >
                <form role="form"  id="checkout" style="width:200px; float: right; clear:both;">
                    <div class="form-group">
                        <label for="checkoutSubTotal">Subtotal:</label>
                        <input type="text" disabled="disabled" class="form-control" value="<%= subTotal %>" id="checkoutSubTotal">
                    </div>
                    <div class="form-group">
                        <label for="shipping">Shipping</label>
                        <select class="form-control" id="shipping" name="shipping">
                            <option>Free</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="discount">Discount</label>
                        <select class="form-control" name="discount">
                            <option>10% You Pay</option>
                            <option>15% Client Pays</option>
                        </select>
                    </div>
                    <button type="submit" id="submitBtn" class="btn btn-success">Submit</button>
                </form>
        </script>
            
        
        
    </body>
</html>