<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="styles.css" rel="stylesheet">
    <title>Your Cart</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>   
    <script src = "dropdownJS.js"></script>
</head>
<body>
    <div class = "header">
        <div class = "header-logo"><a href = "homepage.php"><img src = "Images\logo_4.png"></a></div>
        <ul class = "navmenu">
            <li class = "Cate" id = "gifts">Gifts </li>
            <a href = "aboutus.php"><li class = "AboutUs">About Us</li></a>
            <a href = "#6"><li class = "ContactUs">Contact Us</li></a>
        </ul>
        <ul class = "registration">
            <a href = "login.php"><li>Log In</li></a>
            <a href = "registration.php"><li>Sign Up</li></a>
            <li class="cart">
                <a href="cart.php">
                    <ion-icon name="basket"></ion-icon>Cart<span>0</span>
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

    <div class="products-container">
        <div class="product-header">
            <h5 class="product-title">Product</h5>
            <h5 class="price">Price</h5>
            <h5 class="quantity">Quantity</h5>
            <h5 class="total">Total</h5>
        
        </div>
        <div class="products">

        </div>
    </div>

    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
        <script src="main.js"></script>
</body>
</html>