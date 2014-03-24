<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>hello-backbonejs</title>
        <!--        <link rel="stylesheet" type="text/css" href="css/styles.css" />  -->
        <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/bootstrap/3.0.1/css/bootstrap.min.css" />
    </head>
    <body>
        <div class="container">
            <div class="row">
                 <script type="text/template" id="quoteViewTemplate">
                     <%= quote.get('quote') %><br />
                       
                    <%= quote.get('link') %>  
                            <br />
                            <button>GET QUOTE</button>
                 </script>
                <div id="quoteView"></div>

            </div>
        </div> <!-- /container -->

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script src="//ajax.cdnjs.com/ajax/libs/json2/20110223/json2.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.0/js/bootstrap.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.0/backbone-min.js"></script>
        <script src="js/app.js"></script>
        <script>
        </script>

        <div id="hidden">
            <img src="//loomisadventures.com/sites/default/files/images/blog/illumination-rock-mount-hood-06-large-07.24.11.jpg" style="display:none;"/>
        </div>
    </body>
</html>