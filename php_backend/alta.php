<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  $json = file_get_contents('php://input');

  $params = json_decode($json);

  require("conexion.php");
  $con=retornarConexion();


  mysqli_query($con,"insert into clientes(nombre, apellidos, nombre fiscal, NIF/CIF, direccion, direccion fiscal, codigo postal, poblacion, provincia, email, pagina web, cuenta corriente, telefono, telefono 2, telefono 3, contacto, contacto 2) values ('$params->nombre','$params->apellidos','$params->nombre_fiscal','$params->nif_cif','$params->direccion','$params->direccion_fiscal','$params->codigo_postal','$params->población','$params->provincia','$params->email','$params->pagina_web',
  '$params->cuenta_corriente','$params->telefono','$params->telefono_2','$params->telefono_3','$params->contacto','$params->contacto_2',)");


  class Result {}

  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'Cliente guardado';

  header('Content-Type: application/json');
  echo json_encode($response);
?>