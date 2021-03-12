<?php

	header('Content-Type: application/json');

	require 'conexion.php';

	switch ($_GET['accion']) {
		case 'listar':
			$registros=$base->query("SELECT * FROM clientes_crud")->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($registros);
			break;

		case 'eliminar':
			$id = $_POST["id"];
			$registros=$base->query("DELETE FROM clientes_crud WHERE id=$id");
			echo json_encode($registros);
			break;

		case 'ingresar':
			$id = $_POST["id"];
			$registros=$base->query("DELETE FROM clientes_crud WHERE id=$id");
			echo json_encode($registros);
			break;
		
		case 'consultar':
			$id = $_POST["id"];
			$registros=$base->query("DELETE FROM clientes_crud WHERE id=$id");
			echo json_encode($registros);
			break;

		case 'editar':
			$id = $_POST["id"];
			$registros=$base->query("DELETE FROM clientes_crud WHERE id=$id");
			echo json_encode($registros);
			break;		
	}

?>