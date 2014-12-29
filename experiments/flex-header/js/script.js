
document.getElementById('with-sub-title').addEventListener('click',addSubTitle);

function addSubTitle() {

  var element = document.getElementById("flex-head");

  element.classList.toggle("without-subtitle");
  element.classList.toggle("with-subtitle");

}

document.getElementById('with-cta').addEventListener('click',addCTA);

function addCTA() {

  var element = document.getElementById("flex-head");

  element.classList.toggle("without-cta");
  element.classList.toggle("with-cta");

}