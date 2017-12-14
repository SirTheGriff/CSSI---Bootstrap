var contactButton = document.querySelector("#formSubmit");

formSubmit.addEventListener("click", function() {
	alert("Thank You!");
	formSubmit.textContent = "Submitted";
	formSubmit.style.backgroundColor = "rgb(46,0,56)";
	});