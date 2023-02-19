<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  require("conexion.php");
  $con=retornarConexion();

  $registros=mysqli_query($con,"select id, nombre, apellidos, nombre fiscal, nif_cif, direccion, direccion fiscal, codigo postal, poblacion, provincia, email, pagina web, cuenta corriente, telefono, telefono 2, telefono 3, contacto, contacto 2 from clientes where id=$_GET[id]");

  if ($reg=mysqli_fetch_array($registros))
  {
    $vec[]=$reg;
  }

  $cad=json_encode($vec);
  echo $cad;
  header('Content-Type: application/json');
?>