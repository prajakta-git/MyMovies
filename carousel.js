$(document).ready(function(){
$('.carouselVOD').carousel({
  interval: false
});

(function(){
  $('.carousel .item').each(function(){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i=0;i<2;i++) {
      next=next.next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }

      next.children(':first-child').clone().appendTo($(this));
    }
  });
})();




/*
$(document).ready(function(){
    $('.carousel-VOD .item').each(function(){
      var itemToClone = $(this);

      for (var i=1;i<6;i++) {
        itemToClone = itemToClone.next();
$(this).addClass('active');
        // wrap around if at end of item collection
        if (!itemToClone.length) {
          itemToClone = $(this).siblings(':first');
        }

        // grab item, clone, add marker class, add to collection
        itemToClone.children(':first-child').clone()
          .addClass("cloneditem-"+(i))
          .appendTo($(this));
      }
    });
  });
*/

  $('.launch-modal').on('click', function(e){
  		e.preventDefault();
  		$( '#' + $(this).data('modal-id') ).modal();
  	});

});
