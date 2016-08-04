//Main entry to app -> like app init???? not just world init,
//which shud include business logic main.js and hotspot.js can be changes as required
//TODO: create context for this script

(function(){

//nav elements -> to  test api for change pano  
	function makeNav(arg){

	  for(i=0; i<arg.length; i++){
	    var node = '<a href="#" class="btn btn-default btn-sm">'+i+'</a>';
	    var $node =  $(node);
	    $node.bind({
	      click: function(e){
	         world.updateScene(API.library.libRecord, e.currentTarget.text);          
	      }
	    });
	    $('#world-nav').append($node);
	  }
	} 
	makeNav(API.library.libRecord.collection);
})();