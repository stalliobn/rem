// DOM Ready
$(function() {

  var overlay = $('.overlay');
  var open_modal = $('.open_modal');
  var close = $('.modal_close, .overlay');
  var modal = $('.modal_div');
  open_modal.click( function(event){
    event.preventDefault();
    var div = $(this).attr('data-href');
    overlay.fadeIn(400,
      function(){
        $(div)
          .css('display', 'table').css('z-index', '1000')
          .animate({opacity: 1}, 200);
      });
  });

  function closeModal() {
    modal.animate({opacity: 0}, 200,
      function(){
        $(this).css('display', 'none').css('z-index', '0');
        overlay.fadeOut(400);
      }
    );
  }

  close.click( function(){
    closeModal()
  });

  $(this).keydown(function(eventObject){
    if (eventObject.which == 27)
      closeModal()
  });

  
  $('.gelery a').lightbox();

  $('.portfolio-wrap').find('a').lightbox();

  var mySwiper = new Swiper('.swiper-container',{
    calculateHeight: true,
    slidesPerView: 1
  })

  $('.swiper-container-vertival').each(function() {
    var $container = $(this);
    var mySwiper = $container.swiper({
      mode: 'vertical'
    });
    $container.find('.next').on('click', function() {
      mySwiper.swipeNext();
    });
    $container.find('.prev').on('click', function() {
      mySwiper.swipePrev();
    });
  });



  //map

  function initialize() {
    var mapOptions = {
      center: { lat: 36.115745, lng: -115.170538},
      zoom: 18,
      scrollwheel: false,
      disableDefaultUI: true
    };
    var image = 'images/marker.png';
    var map = new google.maps.Map(document.getElementById('map'),
      mapOptions);
    var marker = new google.maps.Marker({
      position: { lat: 36.115745, lng: -115.170538},
      map: map,
      icon: image,
      title:"Go sexy"
    });
  }
  google.maps.event.addDomListener(window, 'load', initialize);

  //end map

});