$(document).ready(function() {
  function _registerEventListeners() {

  //$('.language-button').on('click',_showLanguages);

  }
  var WIN = $(window);
  var DOC = $(document);

  WIN_H = WIN.height();
  WIN_W = WIN.width();


//Touch events
  var touchStartPos;

  moved =                 0, // amount your finger moved during touchmove
  isTouchDevice =         false; // set to true on touchstart

 $(window).bind('touchstart',function(e){
    e.preventDefault(); 
    // isTouchDevice = true;
    clearInterval(touchInterval);
    moved = 0;
    var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
    touchStartPos = touch.pageY;

  })

 $('body').bind('touchmove',function(e){
     e.preventDefault();

    var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
    var currentY = touch.pageY;

      moved = currentY-touchStartPos;
      touchStartPos = currentY;
  });

  $(window).bind('resize',pageResize);
  $(window).bind('touchend',function(e){
    e.preventDefault();
    var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
    touchInterval = setInterval(function(){
      moved*=.91;
      if(Math.abs(moved) < .1){
        clearInterval(touchInterval);
      }
    },15);
  })
  
  function pageResize (e) {
    WIN_H = WIN.height();
    WIN_W = WIN.width();
    if(WIN_W > 1400){
      smallScreen = true;
    }else{
    }
  }
  function scrollHandler(){
    if(isTouchDevice){
      scrollTop = Math.max(0,containerTop);
    }else{
      scrollTop = WIN.scrollTop();
    }
  }

  // Touch Scroll
  function redraw() {
    if(isTouchDevice){
      window.requestAnimationFrame(function() {
        scrollHandler();
      });
    }
  }
 
	_registerEventListeners();
  pageResize();
});