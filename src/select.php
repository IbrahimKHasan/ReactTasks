<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "coffee";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}



$sql = "SELECT * FROM coffee";
$result = $conn->query($sql);
$rows=array();
if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    $rows[] = $row;
    // print_r($rows);
    // echo "DATA1: " . $row["coffee_name"]. " - DATA2: " . $row["coffee_name"]. "<br>";
  }
} else {
  echo "0 results";
}
print json_encode($rows); 
?>