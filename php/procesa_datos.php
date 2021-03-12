<?php

	header('Content-Type: application/json');

	include 'conexion.php';

	$registros=$base->query("SELECT * FROM clientes_crud")->fetchAll(PDO::FETCH_OBJ);

	echo json_encode($registros);

?>