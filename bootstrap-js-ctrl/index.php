<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>hello-backbonejs</title>
        <link rel="stylesheet" type="text/css" href="css/styles.css" />
        <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/bootstrap/3.0.1/css/bootstrap.min.css" />
    </head>
    <body>
        <!-- Fixed navbar -->
        <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">Bootstrap theme</a>
                </div>
                <div class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="#">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
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
                </div><!--/.nav-collapse -->
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div id="carousel-container">
                    <div class="col-lg-8">
                        <div id="carousel0" class="carousel slide" data-ride="carousel">
                            <!-- Indicators -->
                            
                            <ol class="carousel-indicators">
                                <li data-target="#carousel0" data-slide-to="0" class="active"></li>
                                <li data-target="#carousel0" data-slide-to="1"></li>
                                <li data-target="#carousel0" data-slide-to="2"></li>
                                <li data-target="#carousel0" data-slide-to="3"></li>
                            </ol>
                            
                            <!-- Wrapper for slides -->
                            <div class="carousel-inner">
                                <div class="item active">
                                    <script type="text/template" id="slide0-content">
                                        <h1><%= title %></h1>
                                        <p>
                                        <a href="#" class="btn btn-success btn-lg" role="button">Learn more &raquo;</a>
                                        <a href="#" id="btnInfo" class="btn btn-info btn-lg" role="button">Learn more &raquo;</a>
                                                                                </p>
                                    </script>
                                </div>
                                <div class="item">
                                    <img src="//placekitten.com/800/350" alt="...">
                                    <div class="carousel-caption">
                                        slide1
                                    </div>
                                </div>
                                <div class="item">
                                    <img src="//placedog.com/800/350" alt="...">
                                    <div class="carousel-caption">
                                        slide2
                                    </div>
                                </div>
                                <div class="item">
                                    <img src="//placebear.com/800/350" alt="...">
                                    <div class="carousel-caption">
                                        slide3
                                    </div>
                                </div>                            
                            </div>


                            <!-- Controls -->
                            <!--
                            <a class="left carousel-control" href="#carousel0" data-slide="prev">
                                <span class="glyphicon glyphicon-chevron-left"></span>
                            </a>
                            <a class="right carousel-control" href="#carousel0" data-slide="next">
                                <span class="glyphicon glyphicon-chevron-right"></span>
                            </a>
                            -->
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="list-group">
                            <a data-target="#carousel0" data-slide-to="0" href="#" class="list-group-item active">
                                <h4 class="list-group-item-heading">List group item heading</h4>
                                <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                            </a>
                            <a data-target="#carousel1" data-slide-to="1" href="#" class="list-group-item">
                                <h4 class="list-group-item-heading">List group item heading</h4>
                                <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                            </a>
                            <a data-target="#carousel2" data-slide-to="2" href="#" class="list-group-item">
                                <h4 class="list-group-item-heading">List group item heading</h4>
                                <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                            </a>
                            <a data-target="#carousel1" data-slide-to="3" href="#" class="list-group-item">

                                <h4 class="list-group-item-heading">List group item heading</h4>
                                <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                            </a>                        
                        </div>
                    </div><!-- /.col-sm-4 -->
                </div> 
            </div>

            <!-- Modal -->
            <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"></div>
        </div> <!-- /container -->

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script src="//ajax.cdnjs.com/ajax/libs/json2/20110223/json2.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.0/js/bootstrap.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.0/backbone-min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/backbone-localstorage.js/1.1.0/backbone.localStorage-min.js"></script>
        <script src="js/app.js"></script>
        <script>    
        </script>

        <img src="//loomisadventures.com/sites/default/files/images/blog/illumination-rock-mount-hood-06-large-07.24.11.jpg" style="display:none;"/>

    </body>
</html>