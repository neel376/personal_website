$(document).ready(function(){

	init();

	
	
  
  function init(){
  	$( ".method" ).hide();
	$( ".overview" ).hide();
	$( ".tech" ).hide();
	$('#bgvid').get(0).pause();
	animate();
	
  }
  function animate(){
  	$( ".method" ).fadeIn( 1000, function() {
  	});
  	$( ".overview" ).fadeIn( 1000, function() {
  	});
  	$(".tech").hide().show("slide", { direction: "left" }, 1500, function(){
  		$('#bgvid').get(0).play();

  	});
  }
})