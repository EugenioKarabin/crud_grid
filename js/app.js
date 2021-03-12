var	contenido=document.querySelector('#contenido')
addEventListener('DOMContentLoaded',function traer() {
	fetch('procesa_datos.php?accion=listar')
	.then(res => res.json())
	.then(datos =>{
		tabla(datos)
	})
	
})

function tabla(datos) {
	contenido.innerHTML=''
	let iten=1
	for(let valor of datos){
		if (iten<=6) {
			contenido.innerHTML +=` <div class="cliente">
										<div class="columnas">${valor.id}</div>
										<div class="columnas">${valor.nombre}</div>
										<div class="columnas">${valor.apellido}</div>
										<div class="columnas">${valor.telefono}</div>
										<div class="columnas"><div class="boton"><a href="#" class="editar" iten="${iten}"><img src="imagenes/canvas.png"></a></div></div>
										<div class="columnas"><div class="boton"><a href="#" class="eliminar" iten="${iten}"><img src="imagenes/trash.png"></a></div></div>
									</div>
								`	
			iten++
		}
	}
	
	const editar=document.getElementsByClassName('editar')
	const eliminar=document.getElementsByClassName('eliminar')
	for (let i = 0; i < editar.length; i++) {
		editar[i].addEventListener('click',editaCliente)
		eliminar[i].addEventListener('click',eliminaCliente)
	}
}

function capturaCliente(iten) {
	const cliente=document.querySelectorAll('.cliente')
	return cliente[iten].firstElementChild.innerHTML
}

function editaCliente(e) {
	let iten = parseInt(e.currentTarget.getAttribute('iten'))-1
	const id=capturaCliente(iten)
	console.log(id)
}

function eliminaCliente(e) {
	let iten = parseInt(e.currentTarget.getAttribute('iten'))-1
	const id=capturaCliente(iten)
	console.log(id)
}