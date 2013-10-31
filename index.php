<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>hello-backbonejs</title>
        <link rel="stylesheet" type="text/css" href="css/styles.css" />
        <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/bootstrap/3.0.1/css/bootstrap.min.css" />
    </head>
    <body>
        <div class="container">
            <h1>User List</h1>
            <div class="page"></div>
            <script type="text/template" id="user-list-template">
     <a href="#/new" class="btn btn-primary">New</a>
    <hr />
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>First Name</th><th>Last Name</th><th>Age</th><th></th>
        </tr>
      </thead>
      <tbody>
        <% _.each(users, function(user) { %>
          <tr>
            <td><%= htmlEncode(user.get('firstname')) %></td>
            <td><%= htmlEncode(user.get('lastname')) %></td>
            <td><%= htmlEncode(user.get('age')) %></td>
            <td><a class="btn" href="#/edit/<%= user.id %>">Edit</a></td>
          </tr>
        <% }); %>
      </tbody>
    </table>
            </script>
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script src="http://ajax.cdnjs.com/ajax/libs/json2/20110223/json2.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.0/js/bootstrap.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.0/backbone-min.js"></script>


        <script src="js/app.js" type="text/javascript"></script>

    </body>
</html>