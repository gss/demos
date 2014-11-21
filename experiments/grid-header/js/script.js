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

  $(window).on('scroll',function(e){
    scrollHandler(e);
  })
  // $(window).bind('mousemove',function(e){
  //   var x = e.pageX-(WIN_W/2);
  //   var y = e.pageY-(WIN_H/2);
  //   $('.head-cta').css({
  //     '-webkit-transform-origin': '50% 50%',
  //     '-webkit-transform': 'perspective(200px) rotateX('+y/-343+'deg) rotateY('+x/373+'deg)'
  //   })
  // })
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
    if(WIN_W < 500){
      smallScreen = true;
    }else{
      setTimeout(function(){
        $('.head-cta').addClass('head-cta-target');
      },3000)
    }
  }
  function scrollHandler(e){
    if(!e){
      e = 0;
    }
    scrollTop = WIN.scrollTop();
    var x = e.pageX-(WIN_W/2);
    var y = e.pageY-(WIN_H/2);
    $('.head-cta').css({
      '-webkit-transform-origin': '50% 50%',
      '-webkit-transform': 'perspective(200px) rotateX('+y/-343+'deg) rotateY('+x/373+'deg)',
      '-webkit-filter': 'brightness('+(100-(scrollTop/5))+'%)'
    })
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