<!DOCTYPE html>
<html lang="en">
<head>
    <title>About Us</title>
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
    <br>
    <br>
    <div class = "aboutus">
        <h1>About Us</h1>
        <p>Welcome to our Gift Shop! We are passionate about helping our customers find the 
            perfect gift for any occasion. Our shop is filled with unique and carefully curated 
            items that are sure to delight your loved ones. We believe that giving gifts is an 
            art form, and we are dedicated to helping you express your love and appreciation 
            through thoughtful and meaningful gifts. Our team is made up of knowledgeable and 
            friendly staff who are always ready to help you navigate our collection and find the
            perfect present. Thank you for choosing our Gift Shop, and we look forward to helping
            you create unforgettable moments!
        </p>
        <br>
        <hr>
        <p>At our gift center, we believe that every gift should be as special and unique as the person receiving it. We strive to offer a diverse range of products that cater to all 
            tastes and preferences. Whether you're searching for a sentimental keepsake or a practical item, we have you covered. We are committed to providing the highest quality products 
            at affordable prices, without sacrificing style or design. Our team works tirelessly to stay on top of the latest trends and innovations in the gift-giving industry, ensuring that
             our selection is always fresh and exciting.
        </p>
        <br>
        <hr>
        <p>
            In addition to our vast array of products, we also offer a variety of services to make your gift-giving experience even more enjoyable. Our gift wrapping service adds an extra 
            touch of elegance to your gift and saves you time and hassle. We also offer personalized gift options, such as custom engraving or monogramming, to create a truly one-of-a-kind 
            gift that will be cherished for years to come.
        </p>
        <br>
        <hr>
        <p>
            We understand that gift-giving is an expression of love, gratitude, and appreciation, and we take that responsibility seriously. Our goal is to help you convey your heartfelt sentiments
             in a meaningful way. Whether you're celebrating a birthday, anniversary, wedding, or any other special occasion, we are here to help you make it unforgettable. We are honored to be a 
             part of your gift-giving journey and look forward to serving you for many years to come.
        </p>
    </div>
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