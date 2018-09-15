$(function(){
	$(document).on('click', '#menu-home', function(e){
		e.preventDefault();
		menu_active(this);
		//console.log('menu-home');
		$("#includedContent").load("pages/home.html");
	});
	$(document).on('click', '#menu-about', function(e){
		e.preventDefault();
		menu_active(this);
		//console.log('menu-about');
		$("#includedContent").load("pages/about.html");
	});
	$(document).on('click', '#menu-contact', function(e){
		e.preventDefault();
		menu_active(this);
		//console.log('menu-contact');
		$("#includedContent").load("pages/contact.html");
	});	  

	function menu_active(menu_el){
		var li_el = $(menu_el).parent().find('li').removeClass('active');
		$(menu_el).addClass('active');
	}	

	$(document).on('submit', '#contact-form', function(e){
		e.preventDefault();
		var name = $(this).parent().find('input[name]').val();
		var form_inputs = $(this).serializeArray();
		console.log(name);
		console.log( form_inputs );
	});  		    	
});



function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

function games_on_element(div_id, games_json){
    nr=1;
    games_json.forEach(function(game){
		var para = document.createElement("div");
		var node = document.createTextNode(nr+'. '+game.description);
		var game_node = game_element(game.description, game.description, game.image);
		//para.appendChild(node);
		para.appendChild(game_node);
		para.className = "col-sm-4";

		var element = document.getElementById(div_id);
		element.appendChild(para);
		nr++;			    	
    });
}

function game_element(title, description, image_url){
	var game_div = document.createElement("div");
	game_div.className = "game";

	var title_div = document.createElement("div");
	var title_node = document.createTextNode(title);
	title_div.appendChild(title_node);	
	title_div.className = "title";

	var image_div = document.createElement("img");
	image_div.src = image_url;
	image_div.className = "image";	

	var description_div = document.createElement("div");
	description_node = document.createTextNode(description);
	description_div.appendChild(description_node);	
	description_div.className = "description";	

	game_div.appendChild(title_div);
	game_div.appendChild(image_div);
	//game_div.appendChild(description_div);

	return game_div;
}