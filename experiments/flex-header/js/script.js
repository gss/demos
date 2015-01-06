var element = document.getElementById("flex-head");
var slider;

document.getElementById('sub-title-toggle').addEventListener('click',toggleSubTitle);
document.getElementById('cta-toggle').addEventListener('click',toggleCTA);
document.getElementById('bg-image-toggle').addEventListener('click',toggleBgImage);
document.getElementById('body-text-toggle').addEventListener('click',toggleBodyText);

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

// slider
for (var i=0;i<$('.slider').length;i++){
  $('.slider')[i].addEventListener('mousedown',function(e){
    e.preventDefault();
    slider = this;
    document.body.addEventListener('mousemove',dragSlider);
  });
}
function dragSlider(e){
  document.body.addEventListener('mouseup',function(e){
    document.body.removeEventListener('mousemove',dragSlider);
  });
  var left = Math.min(190,Math.max(0,e.pageX-slider.getBoundingClientRect().left));
  slider.getElementsByClassName('handle')[0].style.left = left + "px";

  switch (slider.getAttribute('id')){
    case "cta-slider":
      var radius = 30*(left/190)
      $('button')[0].style.borderRadius = radius + 'px'
      break;
    case "bg-slider":
      var opacity = 1-(left/190)
      $('.bg-image')[0].style.opacity = opacity
      break;
  }
}
