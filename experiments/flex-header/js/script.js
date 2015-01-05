
document.getElementById('sub-title-toggle').addEventListener('click',toggleSubTitle);
document.getElementById('cta-toggle').addEventListener('click',toggleCTA);
document.getElementById('bg-image-toggle').addEventListener('click',toggleBgImage);
document.getElementById('body-text-toggle').addEventListener('click',toggleBodyText);

var element = document.getElementById("flex-head");

function toggleSubTitle() {

  element.classList.toggle("without-subtitle");
  element.classList.toggle("with-subtitle");
  this.classList.toggle("on");

}

function toggleCTA() {

  element.classList.toggle("without-cta");
  element.classList.toggle("with-cta");
  this.classList.toggle("on");  

}

function toggleBgImage() {

  element.classList.toggle("without-bg-image");
  element.classList.toggle("with-bg-image");
  this.classList.toggle("on");  

}

function toggleBodyText() {

  element.classList.toggle("without-body-text");
  element.classList.toggle("with-body-text");
  this.classList.toggle("on");  

}