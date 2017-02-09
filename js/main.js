$(document).ready(function(){
	console.log("hi");
});

var newItem = "";

// $(".container").append("<p>").append("content from input field");

$("#formButton").click(function(){
	newItem = $("#stuff").val();
	postNewItem();
});

function postNewItem(){
	$("#mainList").append("<li>" + newItem + "</li>");
	//clear field
	$('#stuff').val('');
	// $("li").fadeOut('click', function(){	
	// });
	// $('li').click('text-decoration', 'line-through');
	$(this).click(function(){
		$(this).css('text-decoration', 'line-through');
	});
}

// $('ul').click(function() {
// 	$(this).children().css('text-decoration', 'line-through');
// });


