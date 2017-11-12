$(document).ready(function(){
	var refreshScroll;
	//add_text(string)
	$('button').on('click', function(){
		  add_text(cstr);
	});
	function add_text(str){
   		Typed.new('#typed', {
       		strings: [str],
        	typeSpeed: -500   
    	});
    	Typed.new('#typed2', {
       		strings: [str],
        	typeSpeed: -500   
    	});

    	refreshScroll = setInterval("updateScroll()",100);
	}
	$('.type-wrap').bind('mousewheel DOMMouseScroll', function (e) {
   		clearInterval(refreshScroll);
	});
	$('.type-wrap2').bind('mousewheel DOMMouseScroll', function (e) {
   		clearInterval(refreshScroll);
	});
});



function updateScroll(){
	var element = document.getElementById("data");
    element.scrollTop = element.scrollHeight;
    var element2 = document.getElementById("data2");
    element2.scrollTop = element2.scrollHeight;
    
}



var s = "hi";

 var string  = "<span style='color:#B02A59;'>public class</span> HelloWorld{\n "
 	+" \t <span style='color:#B02A59;'>public static</span> <span style='color:#1ad1ff;'>void</span> " +
 	"<span style='color:#009900;'>main</span>(String args[]){\n \t " +
 		"<span style='color:#1ad1ff;'>System</span>.out.println(<span style='color:e6e600;''>'Hello World'</span>);\n \t}\n };";

var string2 = "<em style='color:#1ad1ff;'>function</em> <span style='color: #7FFF00;'>add_text</span>(){ \n \t" +
    			"Typed.<span style='color:#DC143C;'>new</span>('#typed', {\n \t" +
       			"\t strings: [str], \n \t" +
        		"\t typeSpeed: <span style='color: #8A2BE2;'>0</span>   \n \t" + 
    		"}); \n" +
		"};"

var cstr =   "<span style='color:#B02A59;'>public class</span> HelloWorld{\n "
 	+" \t <span style='color:#B02A59;'>public static</span> <span style='color:#1ad1ff;'>void</span> " +
 	"<span style='color:#009900;'>main</span>(String args[]){\n \t " +
 		"<span style='color:#1ad1ff;'>System</span>.out.println(<span style='color:e6e600;''>'Hello World'</span>);\n \t}\n }; \n" +
 		"<em style='color:#1ad1ff;'>function</em> <span style='color: #7FFF00;'>add_text</span>(){ \n \t" +
    			"Typed.<span style='color:#DC143C;'>new</span>('#typed', {\n \t" +
       			"\t strings: [str], \n \t" +
        		"\t typeSpeed: <span style='color: #8A2BE2;'>0</span>   \n \t" + 
    		"}); \n" +
		"};" + '\n' + string2 + '\n\n' + string + '\n\n' + string;