<?php
    $name = $_POST['name'];
    $mobile = $_POST['mobile'];
    $email = $_POST['email'];
    $password = $_POST['password'];
   

    // Database connection
    $conn = new mysqli('localhost','root','','test');
    if($conn->connect_error){
        echo "$conn->connect_error";
        die("Connection Failed : ". $conn->connect_error);
    } else {
        $stmt = $conn->prepare("insert into user(name, mobile, email, password) values(?, ?, ?, ?)");
        $stmt->bind_param("ssiss", $name,$mobile, $email, $password);
        $execval = $stmt->execute();
        echo $execval;
        echo "Registration successfully...";
        $stmt->close();
        $conn->close();
    }
?>