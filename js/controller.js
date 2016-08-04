  
//  ######## ##     ## ######## ##    ## ########  ######  
//  ##       ##     ## ##       ###   ##    ##    ##    ## 
//  ##       ##     ## ##       ####  ##    ##    ##       
//  ######   ##     ## ######   ## ## ##    ##     ######  
//  ##        ##   ##  ##       ##  ####    ##          ## 
//  ##         ## ##   ##       ##   ###    ##    ##    ## 
//  ########    ###    ######## ##    ##    ##     ######  
// all event handlers of the 3D world
//Events and handlers
(function(){
  
 world.controller = function(){
 window.worldController = {}; 

   function bind(scope, func) {
    return function bound() {
      func.apply(scope, arguments);
    };
  }
   // attach event handlers to world
    // TODO: Refactor of controllers pending, world.eventHandlers is undefined - added by salus sage
    world.controls.addEventListener('change', bind(world, world.render));
    document.getElementById('world-container').addEventListener('mousewheel',bind(world,
                                         world.eventHandlers.onDocumentMouseWheel), false);
    window.addEventListener('keydown',bind(world, world.eventHandlers.onKeydown), false);
    window.addEventListener('resize',bind(world, world.eventHandlers.onWindowResize),false);
  

  var mouse = new THREE.Vector2(), rotSpeed = 0.1;

    
  world.zoom = function (x) {
    if (this.cam.fov >=20 && this.cam.fov <=85 ) {
    if (x == 0) {
      this.cam.fov-=5;
    }
    else {
      this.cam.fov+=5;
    }
    }
    else if(this.cam.fov < 20 ){
	this.cam.fov = 20;
      }
      else if(this.cam.fov > 85 ){
	this.cam.fov = 85;
      }
    
    this.cam.updateProjectionMatrix();
    
 };
 
 world.fullScreen = function (x) {
  
    if (x == 0) {
      document.getElementById('resizef').style.visibility = 'hidden';
      document.getElementById('resizes').style.visibility = 'visible';
      var element = document.getElementById('world-container');
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
	console.log(requestMethod);
    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
    }
    else if (x == 1) {
      document.getElementById('resizef').style.visibility = 'visible';
      document.getElementById('resizes').style.visibility = 'hidden';
      var element = document;
      var requestMethod = element.cancelFullScreen||element.webkitCancelFullScreen||element.mozCancelFullScreen||element.exitFullscreen;
      console.log(requestMethod);
       if (requestMethod) { 
	// Native full screen.
        requestMethod.call(element);
       }
       else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
      
      //document.webkitCancelFullScreen();
    }
    }
 };
 
  world.autoRotate = function (x) {
    if (x == 0) {
      console.log('s');
      document.getElementById('autorotateplay').style.visibility = 'hidden';
      document.getElementById('autorotatepause').style.visibility = 'visible';
      this.controls.autoRotate = true;
    }
    else if (x == 1) {
      document.getElementById('autorotateplay').style.visibility = 'visible';
      document.getElementById('autorotatepause').style.visibility = 'hidden';
      this.controls.autoRotate = false;
    }
  };
}
 world.eventHandlers = {
    onDocumentMouseWheel: function (event) {
      

      // WebKit
      //fov limits = 20 and 85
      if (this.cam.fov >=20 && this.cam.fov <=85 ) {
  
      
      if ( event.wheelDeltaY ) {
  this.cam.fov -= event.wheelDeltaY * 0.005;
      }
      // Opera / Explorer 9
      else if ( event.wheelDelta ) {
  this.cam.fov -= event.wheelDelta * 0.005;
      }
      // Firefox
      else if ( event.detail ) {
  this.cam.fov -= event.detail * 0.05;
      } 
      
      }
      else if(this.cam.fov < 20 ){
  this.cam.fov = 20;
      }
      else if(this.cam.fov > 85 ){
  this.cam.fov = 85;
      }
      this.cam.updateProjectionMatrix();
      console.log(this.cam.fov);
    },
      
    onClick: function (event) {
      event.preventDefault();
      var info;
      
      mouse.set( ( event.clientX / window.innerWidth ) * 2 - 1, - ( event.clientY / window.innerHeight ) * 2 + 1 );
      var raycaster = new THREE.Raycaster();
      raycaster.setFromCamera( mouse, this.cam );
      var intersects = raycaster.intersectObjects( this.scene.children );
      if ( intersects.length > 0 ) {
  for (var i = 0; i < intersects.length; i++) {
   
      if (intersects[i].object.name === 'philly_object') {
        console.log(intersects[i].object.name);
        this.controls.enabled = false;
        this.trans_control.attach(intersects[i].object);
        this.trans_control.enabled = true;
        //display some help info
        info = '<small>Keys | t : translate | y : scale |' +
        ' r : rotate | u : quit </small>';
        document.getElementById('info').innerHTML = info;
        
    
      }
      for(var k=0; k< world.hotspots.length; k++)
      { var name = 'hs'+k;
    if (intersects[i].object.name == name){
      
    sceneNum = k;
    info = 'This is '+ k + ' Pano';
    
    document.getElementById('info').innerHTML = info;
        }
      }
   
  } 
      }
    },

    
    onKeydown: function (event) {
      
      var variable = this.sphere.rotation;
      switch (event.keyCode) {
  
  case 85: // U
    this.trans_control.enabled = false;
    this.controls.enabled = true;
    // is there something to detach this object? confirm it
    this.trans_control.detach(this.trans_control.object);
    document.getElementById('info').innerHTML = '';
    break;
  case 82: // R
    this.trans_control.setMode("rotate");
    break;
  case 89: // Y
    this.trans_control.setMode("scale");
    break;
  case 84: // T
    this.trans_control.setMode("translate");
    break;
  //for rotation of panorama sphere
  case 65: // A
    variable.x-=rotSpeed;
    document.getElementById('info').innerHTML = 'rotation is' +variable.x +',' +variable.y+','+variable.z;
    break;
        case 68: //D
    variable.x+=rotSpeed;
    document.getElementById('info').innerHTML = 'rotation is' +variable.x +',' +variable.y+','+variable.z;
    break;
  case 87: //W
    variable.y+=rotSpeed;
    document.getElementById('info').innerHTML = 'rotation is' +variable.x +',' +variable.y+','+variable.z;
    break;
  case 83: //S
    variable.y-=rotSpeed;
    document.getElementById('info').innerHTML = 'rotation is' +variable.x +',' +variable.y+','+variable.z;
    break;
  case 81: //Q
    variable.z+=rotSpeed;
    document.getElementById('info').innerHTML = 'rotation is' +variable.x +',' +variable.y+','+variable.z;
    break;
  case 69: //E
    
    variable.z-=rotSpeed;
    document.getElementById('info').innerHTML = 'rotation is' +variable.x +',' +variable.y+','+variable.z;


         
        

    break;
  case 90: //Z
   // rotSpeed = 0.1;
   //
  /* var element = document.getElementById('container');
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
console.log(requestMethod);
    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }

   var el = document;
            var requestMethod = el.cancelFullScreen||el.webkitExitFullScreen||el.mozCancelFullScreen||el.exitFullscreen;
            
               if (requestMethod) { // cancel full screen.
    
                requestMethod.call(el);
    console.log(requestMethod);
    
            } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
                var wscript = new ActiveXObject("WScript.Shell");
                if (wscript !== null) {
                    wscript.SendKeys("{F11}");
                }
            }
       
  document.mozCancelFullScreen();
  console.log('s');

 */
  //document.getElementById('container').webkitRequestFullScreen();
  this.controls.enabled = false;
        this.trans_control.attach(this.philly_selector);
        this.trans_control.enabled = true;
        //display some help info
       /* info = '<small>Keys | t : translate | y : scale |' +
        ' r : rotate | u : quit </small>';
        document.getElementById('info').innerHTML = info;*/
        


  
  

    break;
  case 88: //X
    rotSpeed = 0.01;
    break;
    
      
  
      }
    },
    onWindowResize: function (event) {
      this.aspect_ratio = window.innerWidth / window.innerHeight;
      this.cam.aspect = this.aspect_ratio;
      this.cam.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.render();
    }
}
world.controller();
})();