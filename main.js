
var userArray = [];

//var graphicArray = [];

function newUser() {

	if (document.getElementById("name").value == '' || document.getElementById("age").value == '' || document.getElementById("career").value == '' || document.getElementById("about").value == '') {
		alert('Todos los campos deben de estar llenos');
	} else {
			var user = {
					name: document.getElementById("name").value,
					age: document.getElementById("age").value,
					career: document.getElementById("career").value,
					about: document.getElementById("about").value
			}
			userArray.push(user);
			graficar(userArray);
			//console.log(userArray);
	}	
}

function graficar(usuarios){

	var html_perfil = document.getElementById("perfiles");
			
	//variable que guarda todo el html que quiero renderizar
	perfil='';

	for (let i = 0; i < usuarios.length; i++) {
		perfil = perfil + "<div class='card mx-2 p-2' style='width: 18rem;'> <div class='card-body'> <h5 class='card-title'>"+usuarios[i].name+"</h5> <p class='card-text'>"+usuarios[i].age+"</p> <p class='card-text'>"+usuarios[i].career+"</p> <p class='card-text'>"+usuarios[i].about+"</p> </div> <div class='card-body'> <button class='btn btn-danger' onClick='deleteUser("+i+");'><i class='fa-solid fa-user-xmark'></i>  Eliminar</button></button></div> </div>"; 			
	}
	//Renderizo todo apenas acabe
	html_perfil.innerHTML = perfil;
	//console.log(perfil)
	//console.log(graphicArray);
}

function filterAZ() {

	userArray.sort( function filtro(a, b) {
		if (a.name > b.name) return 1;
		if (a.name < b.name) return -1;
		
		return result = 0;
	});
	
	graficar(userArray);
}

function buscar() {
	busqueda = document.getElementById("busqueda").value;
	resultado = [];
	for (let i = 0; i < userArray.length; i++) {
		console.log(userArray[i].name);
		console.log(busqueda);
		if((userArray[i].name).indexOf(busqueda) != -1){
			resultado.push(userArray[i]);
		}
	}
	graficar(resultado);
}

function deleteUser(id){
	alert('Eliminaras al usuario '+userArray[id].name+", estas seguro?");
	userArray.splice(id,1);
	graficar(userArray);

}