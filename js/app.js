var nav = document.getElementsByTagName("nav")[0];
var btn = document.getElementById("drop-button");
var hideMenu = document.getElementById("hide-menu");

btn.addEventListener("click", function(){
	hideMenu.classList.toggle("invisible");
	hideMenu.style.transitionDelay = "2s"
});
