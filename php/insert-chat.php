<?php
    session_start();
    // if(isset($_SESSION['unique_id'])){
        
        include_once "config.php";

        // $outgoing_id = mysqli_real_escape_string($conn, $_POST['outgoing_id']);
        // $incoming_id = mysqli_real_escape_string($conn, $_POST['incoming_id']);
        // $message = mysqli_real_escape_string($conn, $_POST['message']);

        $outgoing_id = $_POST['outgoing_id'];
        $incoming_id = $_POST['incoming_id'];
        $message = $_POST['message'];


        // $incoming_id = $_POST['incoming_id'];
        var_dump($incoming_id);
               
        if(!empty($message)){
            $sql = mysqli_query($conn, "INSERT INTO messages (incoming_msg_id, outgoing_msg_id, msg)
                   VALUES ({$incoming_id}, {$outgoing_id}, {$message})") or die();
            
            if (mysqli_query($conn, $sql)) {
                echo "New record created successfully";
            } else {
                echo "Error: " . $sql . "<br>" . mysqli_error($conn);
            }
        }

    //     $sql = "INSERT INTO messages (incoming_msg_id, outgoing_msg_id, msg) 
    //     VALUES (124, 567, 'This is the messagedd')";







        
        // $outgoing_id = mysqli_real_escape_string($conn, $_POST['outgoing_id']);
        // $incoming_id = mysqli_real_escape_string($conn, $_POST['incoming_id']);
        // $message = mysqli_real_escape_string($conn, $_POST['message']);
;

        // $outgoing_id = mysqli_real_escape_string($conn, 1234);
        // $incoming_id = mysqli_real_escape_string($conn, 6776);
        // $message = mysqli_real_escape_string($conn, 'message');
        
        // if(!empty($message)){
            // $sql = mysqli_query($conn, "INSERT INTO messages (incoming_msg_id, outgoing_msg_id, msg)
            //        VALUES ({$incoming_id}, {$outgoing_id}, {$message})") or die();


        // }

    // }else{
    //     header("../login.php");
    // }

?>