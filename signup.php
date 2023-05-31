<?php
$servername="localhost";
$username="root";
$password="";
$database="giftshop";

$fname=$_POST['fname'];
$lname=$_POST['lname'];
$number=$_POST['number'];
$email=$_POST['email'];
$formpassword=$_POST['password'];
$gender=$_POST['gender'];
$fselect=$_POST['city'];

$conn = new mysqli($servername,$username,$password,$database);

if($conn->connect_error){
    die("Connection failed: " . $conn->error);
}

$query = "SELECT * FROM user WHERE Email='$email'";
$result = $conn->query($query);

if($conn->affected_rows > 0){
    echo "<script>alert('The Email is already used'); window.location='registration.php';</script>";

}
else{
$query = "INSERT INTO user (FirstName,LastName,Number,Email,FormPassword,Gender,City) VALUES ('$fname','$lname','$number','$email','$formpassword','$gender','$fselect')";
if($conn->query($query)==false)
    echo "Error : " . $conn->error;
else
    header("Location: login.php");

$conn->close();
}
?>