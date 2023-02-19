<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  $json = file_get_contents('php://input');

  $params = json_decode($json);

  require("conexion.php");
  $con=retornarConexion();


  mysqli_query($con,"update clientes set  nombre='$params->nombre',
                                          apellidos='$params->apellidos',
                                          nombre_fiscal='$params->nombre_fiscal',
                                          nif_cif='$params->nif_cif',
                                          direccion='$params->direccion',
                                          direccion_fiscal='$params->direccion_fiscal',
                                          codigo_postal='$params->codigo_fiscal',
                                          poblacion='$params->poblacion',
                                          provincia='$params->provincia',
                                          email='$params->email',
                                          pagina_web='$params->pagina_web',
                                          cuenta_corriente='$params->cuenta_corriente',
                                          telefono='$params->telefono',
                                          telefono_2='$params->telefono_2',
                                          telefono_3='$params->telefono_3',
                                          contacto='$params->contacto',
                                          contacto_2='$params->contacto_2',
                                          where id=$params->id");


  class Result {}

  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'Cliente modificado';

  header('Content-Type: application/json');
  echo json_encode($response);
?>