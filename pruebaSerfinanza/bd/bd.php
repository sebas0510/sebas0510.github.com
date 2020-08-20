<?php

$conect = mysqli_connect("localhost", "root", "", "registro");

$nombre = $_POST['nombre'];
$celular = $_POST['celular'];
$email = $_POST['email'];
$pais = $_POST['pais'];

$sql = "INSERT INTO datos (nombre, celular, email, pais) VALUES ('$nombre','$celular','$email','$pais')";

$resultado = mysqli_query($conect, $sql);

if ($resultado) {
  ?>
      <h1>Registro exitoso</h1>


  <?php
}else {
  ?>
  <h3>Registro fallido</h3>
  <?php
}

 ?>
