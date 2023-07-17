<?php

    $servername="localhost";
    $username="root";
    $password="";
    $database="giftshop";

    $forgettenEmail=$_POST['Email'];
    $possibleNum=$_POST['PhoneNumber'];
    $password1=$_POST['password1'];
    $password2=$_POST['password2'];

    $conn = new mysqli($servername,$username,$password,$database);

    if($conn->connect_error){
        die("Connection failed: " . $conn->error);
    }

    $query = "SELECT * FROM user WHERE Email='$forgettenEmail'";
    $result = $conn->query($query);

    if($result->num_rows > 0){
        $row = $result->fetch_assoc();
        $correctNum=$row['Number'];

        if($possibleNum==$correctNum){
            if($password1==$password2){
                $query2= "UPDATE user SET FormPassword='$password1' WHERE Email='$forgettenEmail'";
                $result2 = $conn->query($query2);
                header("Location: login.php");
                exit();

            }
            else{
                echo "<script>alert('The Passwords don\'t match'); window.location='forgot.php';</script>";
                exit();
            }



        }
        else
        {
            
           echo "<script> alert('The phone Number doesn\'t match with the Email'); window.location='forgot.php';</script>";
           exit();
           
            
        }
    }
    else
    {
        echo "<script>alert('No user found with the entered email'); window.location='forgot.php';</script>";
        exit();
    }

    $conn->close();



?>