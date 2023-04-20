//your JS code here. If required.
let name = document.getElementById("name");
let age = document.getElementById("age");
document.getElementById("btn").addEventListener("submit",(e)=>{
	e.preventDefault();
	name = name.value;
	age = age.value;
}).then