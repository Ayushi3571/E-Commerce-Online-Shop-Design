<!DOCTYPE html>
<html lang="en" class="no-js">
<head>
    <meta charset="UTF-8" />
    <title>Login</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <meta name="description" content="Login and Registration Form with HTML5 and CSS3" />
    <meta name="keywords" content="html5, css3, form, switch, animation, :target, pseudo-class" />
    <meta name="author" content="Codrops" />
    <link rel="shortcut icon" href="../favicon.ico"> 
    <link rel="stylesheet" type="text/css" href="demo.css" />
    <link rel="stylesheet" type="text/css" href="style.css" />
    <link rel="stylesheet" type="text/css" href="animate-custom.css" />
</head>
<body>
    <div class="container">
        <section>                
            <div id="container_demo">
                <a class="hiddenanchor" id="staff"></a>
                <a class="hiddenanchor" id="tologin"></a>
                <div id="wrapper">
                    <div id="login" class="animate form">
                        <form action="index.php" method="POST" autocomplete="on"> 
                            <h1>Log in</h1> 
                            <p> 
                                <label for="username" class="uname" data-icon="u"> Your username </label>
                                <input id="username" name="username" required="required" type="text" placeholder="myusername" />
                            </p>
                            <p> 
                                <label for="password" class="youpasswd" data-icon="p"> Your password </label>
                                <input id="password" name="password" required="required" type="password" placeholder="eg. X8df!90EO" /> 
                            </p>
                            
                            <p class="login button"> 
                                <input type="submit" value="Login" /> 
                            </p>
                            <p class="change_link">
                                Staff ?
                                <a href="#toregister" class="staff">Staff login</a>
                            </p>
                        </form>
                    </div>

                    <div id="staff" class="animate form">
                        <form action="addnewuser.php" method="POST" autocomplete="on"> 
                            <h1> Log in </h1> 
                            <p> 
                                <label for="username" class="uname" data-icon="u"> Your username </label>
                                <input id="username" name="username" required="required" type="text" placeholder="myusername" />
                            </p>
                            <p> 
                                <label for="password" class="youpasswd" data-icon="p"> Your password </label>
                                <input id="password" name="password" required="required" type="password" placeholder="eg. X8df!90EO" /> 
                            </p>
                            
                            <p class="login button"> 
                                <input type="submit" value="Login" /> 
                            </p>
                            <p class="change_link">  
                                Customer ?
                                <a href="#tologin" class="staff"> Go to customer log in </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>  
        </section>
    </div>

  
</body>
</html>
