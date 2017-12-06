var nav = document.getElementsByTagName("nav")[0];
var btn = document.getElementById("drop-button");
var hideMenu = document.getElementById("hide-menu");

// Función para que se vea el dropdown menú
btn.addEventListener("click", function(){
	hideMenu.classList.toggle("invisible");
	hideMenu.style.transitionDelay = "2s"
});

$('.modal').modal({
	dismissible: true, // Modal can be dismissed by clicking outside of the modal
	opacity: .5, // Opacity of modal background
	inDuration: 300, // Transition in duration
	outDuration: 200, // Transition out duration
	startingTop: '4%', // Starting top style attribute
	endingTop: '10%', // Ending top style attribute
});


$(document).ready(function() {
	$('select').material_select();
});
