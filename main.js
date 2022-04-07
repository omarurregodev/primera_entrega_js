
var userArray = [];

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

			console.log(userArray);

			perfil='';

			for (let i = 0; i < userArray.length; i++) {
			    perfil = perfil + "<div class='card mx-2' style='width: 18rem;'> <div class='card-body'> <h5 class='card-title'>"+userArray[i].name+"</h5> <p class='card-text'>"+userArray[i].age+"</p> <p class='card-text'>"+userArray[i].career+"</p> <p class='card-text'>"+userArray[i].about+"</p> </div> <div class='card-body'> </div> </div>"; 
			}

			console.log(perfil)

			var html_perfil = document.getElementById("perfiles");

			html_perfil.innerHTML = perfil;

	}

	

}
