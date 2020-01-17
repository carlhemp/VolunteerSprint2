$(function () {
  // URL navigation implementing
  window.addEventListener("hashchange", hashchanged, false);
  // Trigger the event (useful on page load).
  hashchanged();
  $('.card').append('<button class="copyToCart">Add to my Cart</button>')
  $('body').on('click', '.copyToCart', function(){
		$(this).closest('.card').clone().prepend('<button class="removeCard">X</button>').appendTo('#cartList');	
		$('#cartList .copyToCart').remove();
  });
  $('body').on('click','.removeCard', function(){
    $(this).closest('.card').remove();
  });
});
function hashchanged(){
  var hash = location.hash;
  console.log(hash);
  if(window.old_hash == hash){
    return
  }
  //if blank - should have to do nothing
  if(hash == ''){
   $('body').attr('class','home');
   window.document.title = "Volunteer";
  }
    //if we're on an activity view
  else if(hash.search('#activities') != -1) {
  	$('body').attr('class','activities');
  	
  	if(hash.search('cart') != -1){
	  	$('body').addClass('cart');
		  window.document.title = "Cart";
	  }

	  else if(hash.search('slice1') != -1) {
	  	$('body').addClass('slice1');
		  window.document.title = "Events";
	  }
	  else if(hash.search('slice2') != -1) {
	  	$('body').addClass('slice2');
		  window.document.title = "Discipleship";
	   
	  }
	  else if(hash.search('slice3') != -1) {
	  	$('body').addClass('slice3');
		  window.document.title = "Hospitality";
	   
	  }
  }
}