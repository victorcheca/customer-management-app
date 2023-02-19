<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  require("conexion.php");
  $con=retornarConexion();

  $registros=mysqli_query($con,"select id, nombre, apellidos from clientes");
  $vec=[];
  while ($reg=mysqli_fetch_array($registros))
  {
    $vec[]=$reg;
  }

  $cad=json_encode($vec);
  echo $cad;
  header('Content-Type: application/json');
?>


<!-- , nombre_fiscal, nif_cif, direccion, direccion_fiscal, codigo_postal, poblacion, provincia, email, pagina_web, cuenta_corriente, telefono, telefono_2, telefono_3, contacto, contacto_2 -->