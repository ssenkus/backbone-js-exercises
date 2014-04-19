<!doctype html>
<html>
    <head>
        <title>Backbone/Marionette basic setup with nested views</title>
        <link rel="stylesheet" href="css/bootstrap.css" />
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

        <script type="text/template" id="meal-template">
            <%= title %> <%= description %>
        </script>        


        <!-- The javascript libraries get included here (edited for brevity) -->

        <!-- libraries -->
        <script src="js/lib/jquery.min.js"></script>
        <script src="js/lib/underscore-min.js"></script>
        <script src="js/lib/backbone-min.js"></script>
        <script src="js/lib/backbone.marionette.js"></script>
        <script src='js/mealplanner.js'></script>

    </body>
</html>