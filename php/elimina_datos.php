<?php

	include 'conexion.php';

	$id = $_POST["id"]

	$base->query("DELETE FROM clientes_crud WHERE id=$id");

	header("Location:procesa_datos.php")

?>