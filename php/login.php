<?php 
     session_start();
     include_once "config.php";
     $email = mysqli_real_escape_string($conn, $_POST['email']);
     $password = mysqli_real_escape_string($conn, $_POST['password']);

     if(!empty($email) && !empty($password)){
          //checking if entered details match
          $sql = mysqli_query($conn, "SELECT * FROM users WHERE email = '{$email}' AND password = '{$password}'");
          if(mysqli_num_rows($sql) > 0) { // if users credentials match
               $row = mysqli_fetch_assoc($sql);
               $status = "Active now";
               $unique_id = $row['unique_id'];
               
               // $sql2 = mysqli_query($conn, "UPDATE users SET status = {$status} WHERE email='{$email}'");
               $query = "UPDATE users SET status = '{$status}' WHERE unique_id='{$unique_id}'";
               $sql2 = mysqli_query($conn, $query);
               
               if ($sql2) {
                    $sql = mysqli_query($conn, "SELECT * FROM users WHERE email = '{$email}' AND password = '{$password}'");
                    $_SESSION['unique_id'] = $unique_id;
                    echo "success";
               } else {
                    var_dump($conn->error);
               }
          } else {
               echo "Email or Password is incorrect";
          }
     } else {
          echo "All input fields are required!";
     }
?>