<?php
$host = "localhost";
$user = "root";
$password = "";
$db = "demo";

mysql_connect($host,$user,$password);
mysql_select_db($db);

if(isset($_POST['username'])){
    $uname=$_POST['username'];
    $password=$_POST['password'];

    $sql="select * from loginform where user='".."'AND Pass='".."' limit 1";

    $result=mysql_query($sql);

    if(mysql_num_rows($result)==1){
        echo " You have Successfully logged in";
        exit();

    }else{
        echo " You have Entered Incorrect Password";
        exit();
    }
    
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=devide-width, initial-scale=1.0">
        <title>
            Habit Reminder
        </title>
        <script src="https://kit.fontawesome.com/363d4672c2.js"></script>
        <meta name="viewport" content="width=devide-width, initial-scale=1.0">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular.min.js"></script>
        
        <link rel="stylesheet" href="stylee.css">
        <style>
          .logo,img{
            width: 110px;
            height: 110px;
          }
        </style>
        </head>
        <body ng-app="myApp" ng-controller="myCtrl">
            <nav class="navbar navbar-expand-sm bg-success">
              <div class="logo">
                <img src="images/nwmsubearcat.jpg">
              </div>
                <div class="container-fluid">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link" href="./home.html">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="./Login.html">Login</a>
                    </li>
                    
                    <li class="nav-item">
                      <a class="nav-link" href="./index.html">Add New Habbit</a>
                    </li>
                    
                  </ul>
                </div>
              </nav>
            <div class="wrapper">
                <header>Login</header>
                <form method="POST" action="#">
                    <div class="mb-3 mt-3">
                      <label for="email">Email:</label>
                      <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
                    </div>
                    <div class="mb-3">
                      <label for="pwd">Password:</label>
                      <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd">
                    </div>
                    <div class="form-check mb-3">
                      <label class="form-check-label">
                        <input class="form-check-input" type="checkbox" name="remember"> Remember me
                      </label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </form>
                
            </div>
            <script src="app.js"></script>
            <div class="footer-2">
              <p>Copyright 2021-2022. All Rights Reserved.</p>
              <a href="https://github.com/srisathyamamidala/proposal">proposal6B</a>&nbsp;&nbsp;&nbsp;
              <a href="https://github.com/srisathyamamidala/habitreminder">source code</a>&nbsp;&nbsp;&nbsp;
              <a href="https://github.com/srisathyamamidala/habitreminder/projects/1">project board</a>
            </div>
            
        
    
</html>
