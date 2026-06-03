<?php
include 'conecta.php'; 

$accion = isset($_GET['accion']) ? $_GET['accion'] : '';

switch($accion){

    case 'listar': 
        $res = mysqli_query($conexion, "SELECT * FROM productos");

        $datos = [];
        while($fila = mysqli_fetch_assoc($res)){
            $datos[] = $fila;
        }

        echo json_encode($datos);
    break;


    case 'calcular':

        $codigo = $_GET['codigo'];

        $res = mysqli_query($conexion,
        "SELECT codigo, descripcion, precio FROM productos WHERE codigo='$codigo'");

        $fila = mysqli_fetch_assoc($res);

        echo json_encode($fila);

    break;

    //Pasi
}
?>