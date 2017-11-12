$(document).ready(function(){
	$(".sliding-middle-out").click(function() {
		$(".method").removeClass('active');
		$(".overview").removeClass('active');
   		$(this).addClass('active');
   		// $this.css("font-size", "50px");
 });

	var is_colliding = function( $div1, $div2 ) {
	// Div 1 data
	var d1_offset             = $div1.offset();
	var d1_height             = $div1.outerHeight( true );
	var d1_width              = $div1.outerWidth( true );
	var d1_distance_from_top  = d1_offset.top + d1_height;
	var d1_distance_from_left = d1_offset.left + d1_width;

	// Div 2 data
	var d2_offset             = $div2.offset();
	var d2_height             = $div2.outerHeight( true );
	var d2_width              = $div2.outerWidth( true );
	var d2_distance_from_top  = d2_offset.top + d2_height;
	var d2_distance_from_left = d2_offset.left + d2_width;

	var not_colliding = ( d1_distance_from_top < d2_offset.top || d1_offset.top > d2_distance_from_top || d1_distance_from_left < d2_offset.left || d1_offset.left > d2_distance_from_left );

	// Return whether it IS colliding
	return ! not_colliding;
};
	scale();
	adjust_content();
$( window ).resize(function() {
   	scale();
   	adjust_content();
 });

var timer;
    $(window).bind('mousewheel',function () {
    	// $(".btn-info").animate({opacity: 1}, 1);
    	$(".btn-info").css("opacity", "0.3");
        clearTimeout(timer);
        timer = setTimeout( refresh , 100);
    });
    var refresh = function () { 
        $(".btn-info").css("opacity", "1");
       
    };


	

	function scale(){
		var video_height = $('#bgvid').height();
   		var video_width = $('#bgvid').width();
   		var video_ratio = 2.46706587;
   		var font_size = video_height / 10;
   
   		var js_ratio = 1.78571429;
   		var js_width;
   		var js_height;

   		var ps_ratio = 1.7777777;
   		var ps_width;
   		var ps_height;

   		var un_ratio = 1.7777777;
   		var un_width;
   		var un_height;

  		$(".bgcover").innerHeight($('#bgvid').height());

  		var jumbo_height = $(".bgcover").height(); 	
  		var adjusted_height = video_width / video_ratio;
  		var left_over = jumbo_height - adjusted_height;
  	
  		js_height = left_over;
  		js_width = js_height * js_ratio;
  		js_padding = left_over / 6.05824;

  		ps_height = left_over;
  		ps_width = ps_height * ps_ratio;
  		ps_padding = left_over / 6.05824;

  		um_height = left_over;
  		un_width = un_height * un_ratio;
  		un_padding = left_over / 6.05824;
  	
  	
  		$('#js').height(left_over);
  		$('#js').width(js_width);
  		$('#js').css("padding-top", js_padding);

  		$('#ps').height(left_over);
  		$('#ps').width(ps_width);
  		$('#ps').css("padding-top", ps_padding/1.5);

  		$('#un').height(left_over);
  		$('#un').width(un_width);
  		$('#un').css("padding-top", un_padding/1.5);

  		$("#title").css("font-size", font_size);

	}

	function adjust_content(){
		if(is_colliding($("#theTable"),$("#overviewInfo")) == true){
			$('#theTable').css("top", "20px");

		}
	}

	

  	
});

