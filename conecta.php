<?php
//Angel Gerardo Uitzil Tun
//Javier Arturo Rangel Abelar
$host = 'localhost';
$usuario = 'root';
$password = 'Elpepe123';
$baseDatos = 'factura';

$conexion = mysqli_connect($host, $usuario, $password, $baseDatos);

if (!$conexion){
    exit('error en conexion a base de datos');
}
?>

