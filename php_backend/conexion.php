<?php
function retornarConexion() {
  $con=mysqli_connect("localhost","root","root","bd1");
  return $con;
}
?>