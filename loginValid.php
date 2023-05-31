<?php
session_start();
    $servername="localhost";
    $username="root";
    $password="";
    $database="giftshop";
    
    
    $logEmail=$_POST['logEmail'];
    $logPassword=$_POST['logPassword'];

    $conn = new mysqli($servername,$username,$password,$database);

    if($conn->connect_error){
        die("Connection failed: " . $conn->error);
    }
    
    $query = "SELECT * FROM user WHERE Email='$logEmail'";
    $result = $conn->query($query);
    

    if($conn->affected_rows > 0){
        $row = $result->fetch_assoc();
        $correctPassword = $row['FormPassword'];
        $fname = $row['FirstName'];
        $lname=$row['LastName'];
        if($correctPassword==$logPassword){
            $_SESSION['name']=$fname .' '. $lname ;
            header("Location: homepage.php");
            exit();
        }
        else
        {
            echo "<script>alert('The password is not correct'); window.location='login.php';</script>";
            exit();
        }
    }
    else
    {
        echo "<script>alert('No user found with the entered email'); window.location='login.php';</script>";
        exit();
        
    }
    $conn->close();


?>
