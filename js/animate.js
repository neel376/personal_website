$(document).ready(function(){
	init();
	anim_board();
});



function init(){
	// $("h1").hide();
	// $("h2").hide();
	// $(".propic").hide();
	// $("button").hide();
	setTimeout(function(){
		anim_pic();
		anim_board();    
	}, 500);
	   
}

function anim_pic(){
	$('.propic').fadeIn(10).animate({
          'top': '150px',
          'opacity': '1'
         }, 750, function() {
         	$(".linked").addClass('scaleUp', function(){
         		setTimeout(function(){
					$(".git").addClass('scaleUp');
         		},250);
         		
         	});
			
        });
	
}
function anim_board(){
	$(".board").animate({

        }, 1 , function(){
        	$("h2").show("slide", { direction: "right" }, 1000, function(){
	 			$("h1").show('slow', function(){
	 				$("h1").addClass('oi');
	 			});
	 			// $("button").click();
			});
        });
}

