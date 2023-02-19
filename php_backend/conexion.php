<?php
function retornarConexion() {
  $con=mysqli_connect("localhost", "root", "root", "customer_management");
  return $con;
}
?>