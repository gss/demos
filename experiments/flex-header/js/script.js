
document.getElementById('with-sub-title').addEventListener('click',addSubTitle);

function addSubTitle() {

var element = document.getElementById("flex-head");

element.classList.toggle("without-subtitle");
element.classList.toggle("with-subtitle");

}