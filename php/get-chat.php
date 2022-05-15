<?php
    session_start();
    if(isset($_SESSION['unique_id'])){
        include_once "config.php";
        $outgoing_id = mysqli_real_escape_string($conn, $_POST['outgoing_id']);
        $incoming_id = mysqli_real_escape_string($conn, $_POST['incoming_id']); 
        $output = "";

        $sql = "SELECT * FROM messages
                LEFT JOIN users ON users.unique_id = messages.outgoing_msg_id 
                WHERE (messages.outgoing_msg_id = {$outgoing_id} AND messages.incoming_msg_id = {$incoming_id})
                OR (messages.outgoing_msg_id = {$incoming_id} AND messages.incoming_msg_id = {$outgoing_id}) ORDER BY messages.id";
        
        $query = mysqli_query($conn, $sql);
        
        if(mysqli_num_rows($query) > 0){
            while($row = mysqli_fetch_assoc($query)){
                if($row['outgoing_msg_id'] === $outgoing_id){ //if this is equal to then its a sender 
                    $output .= '<div class="chat outgoing">
                                 <div class="details">
                                    <p>'. $row['msg_body'] .'</p>
                                </div>
                                </div>';
                }else{ //its a receiver
                    $output .= '  <div class="chat incoming">
                                  <img src="php/images/'.$row['img'].'" alt="">
                                  <div class="details">
                                    <p>'. $row['msg_body'] .'</p>
                                 </div>
                                 </div>';
                }
            }
            echo $output;
        } else {
            echo "0 results";
        }
    } else {
        header("../login.php");
    }

?>