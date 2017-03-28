// Chalk - EECS 368's library for teaching and understanding JavaScript
// Version 20170308
//
var chalk = {
    print: function(str) {
            $("#chalk").append(str.replace(/&/g, '&amp;')
                                  .replace(/</g, '&lt;')
                                  .replace(/>/g, '&gt;'));
    },
    newline: function() {
            $("#chalk").append("<BR/>");
    },
    hr: function() {
            $("#chalk").append("<hr/>");
    },
    println: function(str) {
			str=str.toString(); //EDIT 2/7/2017
            chalk.print(str);
            chalk.newline();
    },
    canvas: function(w,h) {
	var canvas = $("<canvas/>");
	$("#chalk").append(canvas);
	$("#chalk").append("<BR>");
	canvas.css("border","1pt solid black");
	canvas.css("background","white");
	canvas.attr("width",w);
	canvas.attr("height",h);
	return canvas[0].getContext("2d");
    },
    entrybox: function() {
	return new Promise(function (fulfill, reject){
		var input = $("<input/>");
		$("#chalk").append(input);
                $("#chalk").append("<BR>");
                input.attr("size",72);
                input.css("color","red");
                input.focus();
                input.on('keyup',function(e) {
                        if (e.keyCode == 13) {
                            input.off();
                            var str = input.val();
                            input.attr("disabled",true);
			    input.css("color","gray");
                            input.css("background","#f8f8f8");
                            fulfill(str);
                        }
                        if (e.keyCode == 27) {
                            input.off();
                            var str = input.val();
                            input.attr("disabled",true);
			    input.css("color","gray");
                            input.css("background","#FF8800");
                            reject(str);
                        }
                    });
	    })
    },
    delay: function(time) {
	return new Promise(function (fulfill) {
		setTimeout(fulfill, time);
	    });
    }
}


// Do this when document is ready
$(function(){
        $("#chalk").css("border","solid black 1px");
        $("#chalk").css("background","#eeeeee");
        main();
});        

