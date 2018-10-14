//////index.js
////JS, jquery & jQuery UI
$(document).ready(function(){
  
	// When the user clicks on the button, scroll to the top of the document
	$('#scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},1000);
		return false;
	});
  
  
  //filtering services by county
  $('.filter-cameron').click(function(){
    if ($('.filter-cameron').hasClass('active')) {
      return;
    } else {
      $('.cameron').slideDown();
      
      $('.hidalgo').slideUp();
      $('.other').slideUp();
      
      $('.filter-option').removeClass('active');
      $('.filter-cameron').addClass('active');
    }
	});
  
  $('.filter-hidalgo').click(function(){
    if ($('.filter-hidalgo').hasClass('active')) {
      return;
    } else {
      $('.hidalgo').slideDown();
      
      $('.cameron').slideUp();
      $('.other').slideUp();
      
      $('.filter-option').removeClass('active');
      $('.filter-hidalgo').addClass('active');
    }
	});
  
  $('.filter-all').click(function(){
    $('.cameron').slideDown();
    $('.hidalgo').slideDown();
    $('.other').slideDown();

    $('.filter-option').removeClass('active');
    $('.filter-all').addClass('active');
	});

});


////switching content sections/pages
function navigate(destination) {
  var that = destination.id;

  if ($('article[id="' + that + '"]').hasClass('current')) {
    return false;
  } else {
    $("a:not([data-title='" + that +"'])").removeClass('active');
    $("a[data-title='" + that +"']").addClass('active');
    
    $('article:not([id="' + that + '"])').slideUp(600);
    $('article:not([id="' + that + '"])').removeClass('current');

    $('article[id="' + that + '"]').slideDown(1000);
		$('article[id="' + that + '"]').addClass('current');

    var url = "/" + that + ".html";
    history.pushState(null, null, url);

    return false;
  }
}