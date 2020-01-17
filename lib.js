$(function () {
  // URL navigation implementing
  window.addEventListener("hashchange", hashchanged, false);
  // Trigger the event (useful on page load).
  hashchanged();
  $('.card').append('<button class="copyToCart">Add to my Cart</button>')
  $('.copyToCart').click(function(){
		$(this).closest('.card').clone().appendTo('#cartList');	
  })
});   
function addToCart(el) {
	
}
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
	  }

	  else if(hash.search('slice1') != -1) {
	  	$('body').addClass('slice1');
		  window.document.title = "Slice1";
	  }
	  else if(hash.search('slice2') != -1) {
	  	$('body').addClass('slice2');
		  window.document.title = "Slice2";
	   
	  }
	  else if(hash.search('slice3') != -1) {
	  	$('body').addClass('slice3');
		  window.document.title = "Slice3";
	   
	  }
  }
}