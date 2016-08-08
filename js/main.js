//Main entry to app -> like app init???? not just world init,
//which shud include business logic main.js and hotspot.js can be changes as required
//TODO: create context for this script

(function(){

	window.App = window.App || {};

	App.init = function() {
		makeNav(API.library.libRecord.collection);
		
  //initialize the scene with the first pano as default
  routie.navigate(API.library.libRecord.collection[0].pathToTexture);  

	}

//nav elements -> to  test api for change pano  
	function makeNav(arg){

	  for(i=0; i<arg.length; i++){

	    var $node =  $('<div class="item" data-index="'+i+'"><div class="col-lg-4 col-xs-4 col-md-4 col-sm-4"><a href="javascript:void(0)" class="thumb-wrap"><img class="img-responsive" src="'+arg[i].pathToTexture+'"/>'+i+'</a></div></div>');
	    $node.bind({
	      click: function(e){
	             
	         //hash route change - 
    		 routie.navigate(API.library.libRecord.collection[e.currentTarget.getAttribute('data-index')].pathToTexture);         
	      }
	    });
	    $('.carousel-inner').append($node);
	  }

	  $('#thumb-slider .item').first().addClass('active')
	  makeCarouselMenu();
	} 

	function makeCarouselMenu(){
		$('#myCarousel').carousel({
		  interval: 40000
		});

		$('.carousel .item').each(function(){
		  var next = $(this).next();
		  if (!next.length) {
		    next = $(this).siblings(':first');
		  }
		  next.children(':first-child').clone().appendTo($(this));

		  if (next.next().length>0) {
		 
		      next.next().children(':first-child').clone().appendTo($(this)).addClass('rightest');
		      
		  }
		  else {
		      $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
		     
		  }
		});
	}
	
	App.init();
})();