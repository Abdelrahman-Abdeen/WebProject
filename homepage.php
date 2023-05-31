<!DOCTYPE html>
<html lang = "en">
    <head>
        <meta charset = "utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
        <title>Gift Emporium</title>
        <link href = "styles.css" rel = "stylesheet">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>   
        <script src = "dropdownJS.js"></script>
    </head>
    <body>
        <div class = "header" class = "container-fluid">
            <div class = "header-logo"><a href = "homepage.php"><img src = "Images\logo_4.png"></a></div>
            <ul class = "navmenu">
                <li class = "Cate" id = "gifts">Gifts </li>
                <a href = "aboutus.php"><li class = "AboutUs">About Us</li></a>
                <a href = "#2"><li class = "ContactUs">Contact Us</li></a>
            </ul>
            <ul class = "registration">
                <a href = "login.php"><li>Log In</li></a>
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
        <div class = "exploretext">
            <h1>Gift By Occasions</h1>
            <p>covers everything you need !</p>
        </div>
        <div class = "types">
            <a href = "birthday.php"><div class = "prod"><img src = "Images\birthday.png"><p>Birthday Gifts</p></div></a>
            <a href = "page1.php"><div class = "prod"><img src = "Images\heart2.png"><p>Love Gifts</p></div></a>
            <a href = "Graduation gits.php"><div class = "prod"><img src = "Images\graduationhat.png"><p>Graduation Gifts</p></div></a>
            <a href = "page3.php"><div class = "prod"><img src  ="Images\newborn.png"><p>Newborn Gifts</p></div></a>
            <a href = "page2.php"><div class = "prod"><img src = "Images\getwellsoon.png"><p>Get well soon Gifts</p></div></a>
        </div>
        <div class = "services">
            <ul>
                <li><p><img src = "Images\cart.png" class = "cart">Fast Delivery within 48 hours</p></li>
                <li><p><img src = "Images\clock.png" class = "clock">24/7 Service</p></li>
                <li><p><img src = "Images\customersupp.png">Instant customer support chat</p></li>
            </ul>
        </div>
        <hr>
        <div class = "BestSellerText">
            <h1>Best Sellers</h1>
        </div>
        <div class = "BestSeller">
            <div class="Prod"><p><img src="Images\perfume4.png"></p>
                <p>Perfume 4</p>
            <h1>10 JD</h1>
            <a class="add-to-cart cart67" data-tag="perfume4">ADD TO CART</a>
            </div>
            <div class="Prod"><p><img src="Images\box5.png"></p>
                <p>Box 5</p>
            <h1> 15 JD</h1>
            <a class="add-to-cart cart24" data-tag="box5">ADD TO CART</a>
            </div>
            <div class="Prod"><p><img src="Images\sunglasses3.png"></p>
                <p>Sunglasses 3</p>
                <h1>10 JD</h1>
                <a class="add-to-cart cart67" data-tag="sunglasses3">ADD TO CART</a>
            </div>
            <div class="Prod"><p><img src="Images\watch6.png"></p>
                <p>Watch 6</p>
                <h1>20 JD</h1> 
                <a class="add-to-cart cart67" data-tag="watch6">ADD TO CART</a>
            </div>
            <div class="Prod"><p><img src="Images\gradgift15.png"></p>
                <p>Airpods Pro</p>
                <h1>200 JD</h1>
                <a class="add-to-cart cart2" data-tag="gradgift15">ADD TO CART</a>
            </div>
            <div class="Prod"><p><img src="Images\gradgift10.png"></p>
                <p>Graduation Mug</p>
            <h1>3 JD</h1>
            <a class="add-to-cart cart2" data-tag="gradgift10">ADD TO CART</a>
            </div>
        </div>
        <hr>
        <div class = "LimitedText">
            <h1>Limited Items</h1>
        </div>
        <div class = "Limited">
            <div class="Prod"><p><img src="Images\seat_2.png"></p>
                <p>Car Seat 2</p> 
                <h1> 65 JD</h1>
                <a class="add-to-cart cart35" data-tag="seat_2">ADD TO CART</a>
            </div>
            <div class="Prod"><p><img src="Images\seat_3.png"></p>
                <p>Car Seat 3</p> 
                <h1>85 JD</h1>
                <a class="add-to-cart cart35" data-tag="seat_3">ADD TO CART</a>
            </div>
            <div class="Prod"><p><img src="Images\clothes_9.png"></p>
                <p>Baby Clothes 9</p>
                <h1>15 JD</h1>
                <a class="add-to-cart cart35" data-tag="clothes_9">ADD TO CART</a>
            </div>
            <div class="Prod"><p><img src="Images\bear_6.png"></p>
                <p>Get Well Soon Bear 6</p>
                <h1>10 JD</h1>
                <a class="add-to-cart cart49" data-tag="bear_6">ADD TO CART</a>
            </div>
            <div class="Prod"><p><img src="Images\bear_7.png"></p>
                <p>Get Well Soon Bear 7</p>
                <h1>10 JD</h1>
                <a class="add-to-cart cart50" data-tag="bear_7">ADD TO CART</a>
            </div>
            <div class="Prod"><p><img src="Images\balloon_1.png"></p>
                <p>Get Well Soon baloons 1</p>
                <h1>10 JD</h1>
                <a class="add-to-cart cart65" data-tag="balloon_1">ADD TO CART</a>
            </div>
        </div>
        <hr>
        <div class = "contactus" id = "2">
            <h1>Contact Us</h1>
            <p>Phone Number : +962 77 237 7777</p>
            <p>Office Number : 06-552-1231</p>
            <p>Email : <a href = "mailto : giftshop@gmail.com">Giftemporium@gmail.com</a></p>
            <p>Location : Amman, 7th Circle, Abdullah Ghosheh St.</p>
        </div>
        <div class = "sm">
            <h1>Social Media</h1>
            <img src = "Images\facebook.png">
            <img src = "Images\instagram.png">
            <img src = "Images\twitter.png" class = "twitter">
        </div>
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
        <script src="main.js"></script>
    </body>
</html>