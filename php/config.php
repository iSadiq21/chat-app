<?php 
// $servername = "localhost";
// $username = "root";
// $password = "root";
// $db = "chat_app";

$conn = mysqli_connect("localhost", "admin", "9812", "chat_app");
// $conn = mysqli_connect($servername, $username, $password, $db);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
// echo "db connected";

// $sql = "INSERT INTO messages (incoming_msg_id, outgoing_msg_id, msg) 
// VALUES (124, 567, 'This is the message')";


// if (mysqli_query($conn, $sql)) {
// echo "New record created successfully";
// } else {
// echo "Error: " . $sql . "<br>" . mysqli_error($conn);
// }
?>