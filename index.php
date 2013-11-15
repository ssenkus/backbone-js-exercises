<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>hello-backbonejs</title>
        <link rel="stylesheet" type="text/css" href="css/styles.css" />
        <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/bootstrap/3.0.1/css/bootstrap.min.css" />
    </head>
    <body>
        <div id="main">
            <script type="text/template" id="search_template">
                <label><%= search_label %></label>
                <input type="text" id="search_input" />
                <input type="button" id="search_button" value="Search" />
            </script>

            <div id="search_container"></div>
        </div>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script src="http://ajax.cdnjs.com/ajax/libs/json2/20110223/json2.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.0/js/bootstrap.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.0/backbone-min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/backbone-localstorage.js/1.1.0/backbone.localStorage-min.js"></script>
        <script src="js/app.js"></script>


    </body>
</html>