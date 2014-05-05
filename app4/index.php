<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">        

        <title>Backbone/Marionette basic setup with nested views</title>

        <link rel="stylesheet" href="css/bootstrap.css" />
        <link rel="stylesheet" href="css/jquery-ui-1.10.4.css" />
        <style type="text/css">
            body {
                background: #ffffff;

            }
        </style>
    </head>
    <body>
        <!-- Static navbar -->
        <div class="navbar navbar-default" role="navigation">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">Project name</a>
                </div>
                <div class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li class="divider"></li>
                                <li class="dropdown-header">Nav header</li>
                                <li><a href="#">Separated link</a></li>
                                <li><a href="#">One more separated link</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li class="active"><a href="./">Default</a></li>
                        <li><a href="../navbar-static-top/">Static top</a></li>
                        <li><a href="../navbar-fixed-top/">Fixed top</a></li>
                    </ul>
                </div><!--/.nav-collapse -->
            </div><!--/.container-fluid -->
        </div>

        <!-- Base element for app -->
        <!--
            Dont use the BODY element as the base because when the app renders in the BODY
            it will wipe out the template files before the views can pick them up
        -->
        <div id="AppBase"></div>

        <!-- TEMPLATES -->
        <div id="main-region" class="container">
            <p>Here is static content in the web page. You'll notice that it gets
                replaced by our app as soon as we start it.</p>
        </div>

        <div id="dialog-region"></div>
        
        <script type="text/template" id="meal-list">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Calories</th>
                    <th></th>
                </tr>
            </thead>
            <tbody></tbody>
        </script>

        <script type="text/template" id="meal-list-item">
            <td><%= id %></td>
            <td><%= title %></td>
            <td><%= description %></td>
            <td><%= calories %></td>
            <td>
                <a href="#meals/<%= id %>" class="js-show"><button class="btn btn-info">Show</button></a>
                <a href="#meals/<%= id %>/edit" class="js-edit"><button class="btn btn-warning">Edit</button></a>   
                <button class="btn btn-danger js-delete"><i class="icon-remove"></i>Delete</button>
            </td>
        </script>        
        <script type="text/template" id="meal-view">
            <a href="#meals">Back to list</a>
            <br />
            <h1><%= title %> <%= description %></h1>
            <p><strong>ID:</strong> <%= id %></p>
        </script>

        <script type="text/template" id="missing-meal-view">
            <a href="#meals">Back to list</a>
            <div class="alert alert-danger">This meal doesn't exist !</div>
        </script>
        
        <script type="text/template" id="loading-view">
            <h1><%= title %></h1>
            <p><%= message %></p>
            <div id="spinner"></div>
        </script>
        
        <script type="text/template" id="meal-form">
            <form>
                <div class="form-group">
                    <label for="meal-title" class="control-label">Title:</label>
                    <input class="form-control" id="meal-title" name="title" type="text" value="<%= title %>"/>
                </div>
                <div class="form-group">
                    <label for="meal-description" class="control-label">Description:</label>
                    <input class="form-control" id="meal-description" name="description" type="text" value="<%= description %>"/>
                </div>
                <div class="form-group">
                    <label for="meal-calories" class="control-label">Calories:</label>
                    <input class="form-control" id="meal-calories" name="calories" type="text" value="<%= calories %>"/>
                </div>                
                <button class="btn btn-success js-submit">Save</button>
            </form>
         </script>        
        

        <!-- The javascript libraries get included here (edited for brevity) -->

        <!-- libraries -->
        <script src="js/lib/jquery.min.js"></script>
        <script src="js/lib/jquery-ui-1.10.4.js"></script>
        <script src="js/lib/underscore-min.js"></script>
        <script src="js/lib/backbone-min.js"></script>
        <script src="js/lib/backbone.marionette.js"></script>
        <script src="js/lib/backbone.localStorage.js"></script>
        <script src="js/lib/backbone.syphon.js"></script>
        
        <!-- spinner -->
        <script src="js/lib/spin.js"></script>
        <script src="js/lib/jquery.spin.js"></script>
        
        <!-- app -->
        <script src="js/app.js"></script>
        <script src="js/apps/config/storage/localstorage.js"></script>
        <script src="js/entities/meal.js"></script>
        <script src="js/apps/meals/meals_app.js"></script>
        <script src="js/common/views.js"></script>
        
        <script src="js/apps/meals/list/list_view.js"></script>
        <script src="js/apps/meals/list/list_controller.js"></script>
        
        <script src="js/apps/meals/show/show_view.js"></script>
        <script src="js/apps/meals/show/show_controller.js"></script>

        <script src="js/apps/meals/edit/edit_view.js"></script>
        <script src="js/apps/meals/edit/edit_controller.js"></script>        
        

        <script>
            MealPlanner.start();
        </script>
    </body>
</html>