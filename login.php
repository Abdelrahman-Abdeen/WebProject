
<!DOCTYPE html>
<html>
<head>
    <title>Log In</title>
    <link href = "styles.css" rel = "stylesheet">
    <link href = "styles2.css" rel = "stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>   
    <script src = "dropdownJS.js"></script>
</head>
<body>
    <div class = "header">
        <div class = "header-logo"><a href = "homepage.php"><img src = "Images/logo_4.png"></a></div>
        <ul class = "navmenu">
            <li class = "Cate" id = "gifts">Gifts </li>
            <a href = "aboutus.php"><li class = "AboutUs">About Us</li></a>
            <a href = "#2"><li class = "ContactUs">Contact Us</li></a>
        </ul>
        <ul class = "registration">
            <li>Log In</li>
            <a href = "registration.php"><li>Sign Up</li></a>
            <li class="cart">
                <a href="cart.php">
                    <ion-icon name="basket"></ion-icon>Cart <span> 0</span>
                </a>
            </li>
        </ul>
    </div>
    <div id = "navTab">
        <ul class = "dropdown-content">
            <a href = "page1.php"><li>Love gifts</li></a>
            <a href = "birthday.php"><li>Birthday gifts</li></a>
            <a href = "page2.php"><li>Get Well Soon gift</li></a>
            <a href = "page3.php"><li>Newborn gifts</li></a>
            <a href = "Graduation gits.php"><li>Graduation gifts</li></a>
        </ul>
    </div>
    <fieldset>
        <form action = "loginValid.php" method="POST">
        <h2>Log In</h2>
        <label for="email">Email:</label>
        <input type="email" for="email" name = "logEmail">
        <br>
        <br>
        <label for="pass">Password:</label>
        <input type="password" id="pass" name = "logPassword">
        <br>
        <br>
        <button type = "submit">Log In</button>
        <br>
        <br>
        <a href="homepage.php">forgot your Password</a>
        </form>
    </fieldset>
    <div class = "contactus" id = "2">
        <h1>Contact Us</h1>
        <p>Phone Number : +962 77 237 7777</p>
        <p>Office Number : 06-552-1231</p>
        <p>Email : <a href = "mailto : giftshop@gmail.com">Giftemporium@gmail.com</a></p>
        <p>Location : Amman, 7th Circle, Abdullah Ghosheh St.</p>
    </div>
    <div class = "sm">
        <h1>Social Media</h1>
        <img src = "Images/facebook.png">
        <img src = "Images/instagram.png">
        <img src = "Images/twitter.png" class = "twitter">
    </div>
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
        <script src="main.js"></script>
</body>
</html>