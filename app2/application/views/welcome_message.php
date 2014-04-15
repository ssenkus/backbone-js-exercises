<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Welcome to CodeIgniter</title>

        <style type="text/css">

            body {
                background-color: #fff;
                margin: 40px;
                font-family: Lucida Grande, Verdana, Sans-serif;
                font-size: 14px;
                color: #4F5155;
            }

            a {
                color: #003399;
                background-color: transparent;
                font-weight: normal;
            }

            h1 {
                color: #444;
                background-color: transparent;
                border-bottom: 1px solid #D0D0D0;
                font-size: 16px;
                font-weight: bold;
                margin: 24px 0 2px 0;
                padding: 5px 0 6px 0;
            }

            code {
                font-family: Monaco, Verdana, Sans-serif;
                font-size: 12px;
                background-color: #f9f9f9;
                border: 1px solid #D0D0D0;
                color: #002166;
                display: block;
                margin: 14px 0 14px 0;
                padding: 12px 10px 12px 10px;
            }

        </style>
    </head>
    <body>

        <h1>Welcome to my Trimet CodeIgniter App!</h1>
        <div id="results"></div>

        <script src="http://code.jquery.com/jquery-latest.min.js"></script>
        <script>
            $(document).ready(function(){
                (function getTr() {
                    $.ajax({
                        url: 'http://localhost/github/backbone-js-exercises/app2/index.php/arrivals?format=json',
                        dataType: 'json',
                        success: function(data) {
                            alert('success!  check your console for data object');
                            console.log(JSON.parse(data));
                                $('#results').append(data)
                        },
                        error: function() {
                            alert('AJAX error when fetching Trimet results');
                        }
                    });
                })();
            });
        </script>

    </body>
</html>