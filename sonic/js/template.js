$(document).ready(function(){
	// $(".methodText").hide();
	// $(".overviewText").show();
	// $(".jumbotron").hide();
	// $("#bgvid").hide();

	$(".overview").on("click", function(){
		$(".methodText").hide();
		$(".overviewText").show();
	});
	$(".method").on("click", function(){
		$(".overviewText").hide();
		$(".methodText").show();
	});
 });