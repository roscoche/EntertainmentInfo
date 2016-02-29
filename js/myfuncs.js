function getDescription(type) {

	var name=document.getElementById(type+"input").value;
	var xhttp = new XMLHttpRequest();
	var url='http://www.omdbapi.com/?t='+name+'&plot=full&r=xml&type='+type;
	
	$.ajax({
		url : url,
		dataType : "xml",
		beforeSend : function(){
			console.log('Retrieving');
			},
		success : function(xml){
			console.log(xml);
			buildTable(xml,type);
		}
	});
	
}



function buildTable(xml,type) {
	  var i;
	  var xmlDoc = xml;
	  
	  var content="";
	  var collapsible="";
	  var x = xmlDoc.getElementsByTagName("movie");
	  console.log(x);
	  if(x.length!=0){
		content+="<b>Title:</b> "+x[0].getAttribute('title');
		content+="<br/><b>Year:</b> "+x[0].getAttribute('year');
		content+="<br/><b>Rated:</b> "+x[0].getAttribute('rated');
		content+="<br/><b>Released:</b> "+x[0].getAttribute('released');
		content+="<br/><b>Awards:</b> "+x[0].getAttribute('awards');
		content+="<br/><b>IMDB Rating:</b> "+x[0].getAttribute('imdbRating');
		content+="<br/><b>IMDB Votes:</b> "+x[0].getAttribute('imdbVotes');
		content+="<br/><b>Metascore:</b> "+x[0].getAttribute('metascore');
		content+="<br/><center><img src='"+x[0].getAttribute('poster')+"' width='200'target='_blank'/></center>";
		
		collapsible+="<b>Plot:</b> "+x[0].getAttribute('plot');
		collapsible+="<br/><b>Actors:</b> "+x[0].getAttribute('actors');
		collapsible+="<br/><b>Writer:</b> "+x[0].getAttribute('writer');
		collapsible+="<br/><b>Director:</b> "+x[0].getAttribute('director');
		collapsible+="<br/><b>Genre:</b> "+x[0].getAttribute('genre');
		collapsible+="<br/><b>Runtime:</b> "+x[0].getAttribute('runtime');
		collapsible+="<br/><b>Language:</b> "+x[0].getAttribute('language');
		collapsible+="<br/><b>Country:</b> "+x[0].getAttribute('country');
		
		  $("#result"+type).html(content);
		  $("#description"+type).html(collapsible);
		  $("#teste"+type).css("display","inline");
		  console.log(content);
		  console.log(collapsible);
	  }
	  else {
		  $("#result"+type).html("<h2>No results found!</h2>");
		  $("#teste"+type).css("display","none");
	  }
}
function setActive(whichnav){
	$(whichnav).addClass("ui-btn-active");
	
}
	 
	 