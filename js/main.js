                                                                                                       
//              ,--,                                    ,----,     ,----..        ,---,                    
//            ,--.'|     ,--,     ,---,               .'   .' \   /   /   \    ,`--.' |    ,---.           
//            |  | :   ,--.'|   ,---.'|             ,----,'    | /   .     :  /    /  :   /     \          
//       .---.:  : '   |  |,    |   | :             |    :  .  ;.   /   ;.  \:    |.' '  /    / '          
//     /.  ./||  ' |   `--'_    :   : :             ;    |.'  /.   ;   /  ` ;`----':  | .    ' /           
//   .-' . ' |'  | |   ,' ,'|   :     |,-.          `----'/  ; ;   |  ; \ ; |   '   ' ;'    / ;            
//  /___/ \: ||  | :   '  | |   |   : '  |            /  ;  /  |   :  | ; | '   |   | ||   :  \            
//  .   \  ' .'  : |__ |  | :   |   |  / :           ;  /  /-, .   |  ' ' ' :   '   : ;;   |   ``.         
//   \   \   '|  | '.'|'  : |__ '   : |: |          /  /  /.`| '   ;  \; /  |   |   | ''   ;      \        
//    \   \   ;  :    ;|  | '.'||   | '/ :        ./__;      :  \   \  ',  /    '   : |'   |  .\  |        
//     \   \ ||  ,   / ;  :    ;|   :    |        |   :    .'    ;   :    /     ;   |.'|   :  ';  :        
//      '---"  ---`-'  |  ,   / /    \  /         ;   | .'        \   \ .'      '---'   \   \    /         
//                      ---`-'  `-'----'          `---'            `---`                 `---`--`          



/*Vlib 2016 is a project to render libraries in 360 panoramas with interactive books and a book reader.
 *
 *Three.js-r77
 *
 */
//trying to add bookreader

(function () {
  "use strict";
  //World object -> decide on world's properties
  window.world = window.world || {};

  

var domEvents;
  window.sceneNo=0, window.sceneNum = 0;
  var defaultData, trans_obj;
  var mouse = new THREE.Vector2(), rotSpeed = 0.1, s1,s2,s3,s4, 
  philly, philly_object, esg_library, esg_map; //should figure if we can use mouse variable
  var layoutFlag = 0;
  var layoutCamPos= new THREE.Vector3(0,0,0), layoutCamRot;
//gui = new dat.GUI();
  world.scene = {};
  // list of panoramas available in the world
 
  //textures of books
  
  world.book3= new THREE.Object3D();
  function bind(scope, func) {
    return function bound() {
      func.apply(scope, arguments);
    };
  }
  
//  ########     ###    ########    ###    
//  ##     ##   ## ##      ##      ## ##   
//  ##     ##  ##   ##     ##     ##   ##  
//  ##     ## ##     ##    ##    ##     ## 
//  ##     ## #########    ##    ######### 
//  ##     ## ##     ##    ##    ##     ## 
//  ########  ##     ##    ##    ##     ##
//Loading Default Position values for objects
//below three variable of arrays should be a array of objects 
//with properties camPos, span offset, skyboxes
var camPos  = [
    new THREE.Vector3(121.9,118.2,-108.6),
    new THREE.Vector3(-46.9, 68.7, 83.4),
    new THREE.Vector3(-46.9, 103, 83.4),
    new THREE.Vector3(-40.5, 133.8, 80.6),
    new THREE.Vector3(-40.5, 101.3, 80.6),
    new THREE.Vector3(-39, 137.9, 87.5),
    new THREE.Vector3(-41.9, 136.3, 101.3),
    new THREE.Vector3(-41.9, 167.8, 101.3),
    new THREE.Vector3(-41.9, 167.8, 117.1),
    new THREE.Vector3(-36.8, 136.2, 116.5),
    new THREE.Vector3(-43.1, 102, 133.4),
    new THREE.Vector3(-11, 104.3, 164.1),
    new THREE.Vector3(-11, 134.7, 164.1),
    new THREE.Vector3(73.3, 134.6, 279-61.4),
    new THREE.Vector3(73.3, 101.1, 279-61.4),
    new THREE.Vector3(69.6, 68, 216.8),
    new THREE.Vector3(319.3, 102.6, 215.9)
  ],
  SpanoOffset = [
    new THREE.Vector3( -3.0515,1.57,-0.10999999999999999),
    new THREE.Vector3( -3.191592653589792,2.33,0.07),
    new THREE.Vector3( -3.191592653589792,2.740000000000002,0.060000000000000095),
    new THREE.Vector3( -2.261592653589812,1.4500000000000002,-0.8300000000000005),
    new THREE.Vector3(-3.2015926535898074,2.9300000000000015,0.029999999999999555),
    new THREE.Vector3(-3.141592653589793,-3.2000000000000015,0),
    new THREE.Vector3(-3.191592653589792,3.099999999999978,3.469446951953614e-18),
    new THREE.Vector3(-3.141592653589793,-0.15999999999999917,-0.04),
    new THREE.Vector3( -3.0515,1.57,-0.10999999999999999),
    new THREE.Vector3( -3.0515,1.57,-0.10999999999999999),
    new THREE.Vector3( -3.0515,1.57,-0.10999999999999999),
    new THREE.Vector3( -3.0515,1.57,-0.10999999999999999),
    new THREE.Vector3( -3.0515,1.57,-0.10999999999999999),
    new THREE.Vector3( -3.0515,1.57,-0.10999999999999999),
    new THREE.Vector3( -3.0515,1.57,-0.10999999999999999),
    new THREE.Vector3( -3.0515,1.57,-0.10999999999999999)
  ];
  var panoType = [1,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,1];
  world.skyboxs = [
    'esg_26-7-16/1',
    'esg_26-7-16/2',
    'esg_26-7-16/3',
    'esg_26-7-16/4',
    'esg_26-7-16/5',
    'esg_26-7-16/6',
    'esg_26-7-16/7',
    'esg_26-7-16/8',
    'esg_26-7-16/9',
    'esg_26-7-16/10',
    'esg_26-7-16/11',
    'esg_26-7-16/12',
    'esg_26-7-16/13',
    'esg_26-7-16/14',
    'esg_26-7-16/15',
    'esg_26-7-16/16'
  ];
   var hsTexture = new THREE.TextureLoader().load( 'images/background-home.jpg');
  /* world.books_tex = [
    'objects/books/a_farewell_to_arms.jpg',
    'objects/books/fcover.png',
    'objects/books/bookDiffuse.png'
  ];*/
  //hot spots can be a object with properties positions an array and
  //hot spot height and hot spot size
  
   world.hotspots = [];
   var hotspotpos = new Array;
    hotspotpos[0] = [320,20,0];
    hotspotpos[1] = [205,20,0];
    hotspotpos[2] = [117,20,0];
    hotspotpos[3] = [54.5,20,0];
    hotspotpos[4] = [-35,75,-112];
    hotspotpos[5] = [-35,120,-112];
    hotspotpos[6] = [-35,156,-112];
    hotspotpos[7] = [141,106,-122.5];
    hotspotpos[8] = [320,20,0];
    hotspotpos[9] = [205,20,0];
    hotspotpos[10] = [117,20,0];
    hotspotpos[11] = [54.5,20,0];
    hotspotpos[12] = [-35,75,-112];
    hotspotpos[13] = [-35,120,-112];
    hotspotpos[14] = [-35,156,-112];
    hotspotpos[15] = [141,106,-122.5];
    
   var hotspotHeight = 0;
   var hotspotSize = 10;
   
    
    
 //what is default data??  
   defaultData = {
    "book1": {
      "position": { "x" : -61, "y": 77.5, "z": -109 },
      "rotation": { "x" : 0, "y": (-Math.PI / 2), "z": 0 },
      "scale"   : { "x" : 1, "y": 1, "z": 1 },
      "size"    : { "x" : 22, "y": 3, "z" : 14.5 }
    },
    "book2": {
      "position": { "x" : 80, "y": 77, "z": 70 },
      "rotation": { "x" : 0, "y": (-Math.PI / 2), "z": 0 },
      "scale"	  : { "x" : 1, "y": 1, "z": 1},
      "size"    : { "x" : 22, "y": 3, "z" : 14.5 }
    },
    "book3":{
      "position": { "x":114,"y":75,"z":70 },
      "rotation": { "x" : 0, "y": 0, "z": 0 },
      "scale"	  : { "x" : 1, "y": 1, "z": 1},
      "size"    : { "x" : 1, "y": 1, "z" : 1 }
    }
  };
  
  
//  #### ##    ## #### ######## 
//   ##  ###   ##  ##     ##    
//   ##  ####  ##  ##     ##    
//   ##  ## ## ##  ##     ##    
//   ##  ##  ####  ##     ##    
//   ##  ##   ###  ##     ##    
//  #### ##    ## ####    ##  
  /*
   * init the scene, setup the camera, draw 3D objects and start the game loop
   can be muultiple functions, for each action -> init scene, setup camera, and
   draw 3D objects
   */

  //Check browser compatibility and initialize renderer or fallback for unsupported
  //browsers
  function checkBrowserSupport() {
  if (Detector.webgl) {
    world.renderer = new THREE.WebGLRenderer({antialias: true});
  }
  else {
    document.getElementById('container').innerHTML = '<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><h1>You need a WebGL enabled browser to proceed.</h1>';
   
  }
}
/////////////////////////////////
   //Camera Properties Initialization
  function setCamProps() {
    var fov = 40, aspect_ratio = window.innerWidth / window.innerHeight,
      near = 0.1, far = 50000;
    world.cam = new THREE.PerspectiveCamera(fov, aspect_ratio, near, far);
  }
  
  //Camera Controls initialization
  function setControls(){  
    world.controls = new THREE.OrbitControls(world.cam, world.renderer.domElement);
    //this.controls.enabled = false;
    world.controls.autoRotateSpeed = 0.3;
    world.controls.addEventListener('change', bind(world, world.render));
}
  world.init = function () {

  //set camera properties
  setCamProps();

  // Renderer Initialization
  checkBrowserSupport();

  // Set Camera Controls initialization -> should be able to pass arguments like
  //Rotation speed and ...?
  setControls();

  this.renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('world-container').appendChild(this.renderer.domElement);
  
  //Scene initialization
  this.scene = new THREE.Scene();
  
  domEvents   = new THREEx.DomEvents(this.cam, this.renderer.domElement);

  //this.makeHotspot()
  this.updateScene();

  //Whatever makeworld is doing, this doesnt seem to be the place for it.
  //coz, by now the world with a mesh is created -> are we making world objects
  //in make world?
  //makeWorld();
  
  //This should be handled by make world
  /*
  this.makeBooks();
   THREEx.Linkify(domEvents, this.philly_selector);
    THREEx.Linkify(domEvents, this.LandForHousing_selector);
    */
  
  };
  
//  ##     ## ########  ########     ###    ######## ######## 
//  ##     ## ##     ## ##     ##   ## ##      ##    ##       
//  ##     ## ##     ## ##     ##  ##   ##     ##    ##       
//  ##     ## ########  ##     ## ##     ##    ##    ######   
//  ##     ## ##        ##     ## #########    ##    ##       
//  ##     ## ##        ##     ## ##     ##    ##    ##       
//   #######  ##        ########  ##     ##    ##    ########

// This is run everytime the scene has to change.
  world.updateScene = function () {
    //this.renderer.clear( true, false );
    this.currentSkybox = this.skyboxs[sceneNo];
    // what is panoType?? array of 1's and 0's looks very cryptic
    //Change Skyboxes -> which currently depends on user input,
    //which updates a global state variable sceneNo or sceneNum
    if(panoType[sceneNo] == 0)
    {	
      this.makeSkyBox();
      this.scene.remove(world.sphere1);
    }
    else
    {
     this.makeSphericalPano();
     this.scene.remove(world.panoMesh);
    }
    
    //Set cam position for the particular skybox image
    this.cam.position.set(camPos[sceneNo].x,
                          camPos[sceneNo].y,
                          camPos[sceneNo].z);
    this.cam.updateProjectionMatrix;
    this.scene.add(this.cam);
    //set cam controls -> depend on same campos with offset on x-axis
    this.controls.target.set(camPos[sceneNo].x - 0.1,
                             camPos[sceneNo].y,
                             camPos[sceneNo].z);
    //marker
    this.trans_control = new THREE.TransformControls(this.cam,
                                                     this.renderer.domElement);
    this.trans_control.name = "trans_control";
    this.trans_control.enabled = false;
    this.scene.add(this.trans_control);
    
    // attach event handlers
    this.controls.addEventListener('change', bind(this, this.render));
    this.renderer.domElement.addEventListener('mousewheel',bind(this, this.eventHandlers.onDocumentMouseWheel), false);
    //this.renderer.domElement.addEventListener('mousedown',bind(this,this.eventHandlers.onClick),false);
  // this.renderer.domElement.addEventListener('mousemove',bind(this,this.eventHandlers.onMouseMove),false);
    window.addEventListener('keydown',bind(this, this.eventHandlers.onKeydown), false);
    window.addEventListener('resize',bind(this, this.eventHandlers.onWindowResize),false);
    
    // action!
    this.animate.apply(this, arguments);
    
   /* if (sceneNo == 0) {
      world.hs1.visible = false;
      world.hs2.visible = true;
    }
    else if (sceneNo == 1) {
      world.hs1.visible = true;
      world.hs2.visible = false;
    }*/
    
    //marker
    //Toggle hotspots visibility and delegate events??
    //guess delegation can happen when they are rendered first,
    // if we are only toggling the visibility here.
    for(var i=0; i<world.hotspots.length; i++)
    {
      if (sceneNo == i) {
	world.hotspots[i].visible = false;
      }
      else {
	world.hotspots[i].visible = true;
      }
    }
    
    domEvents.addEventListener(world.hotspots[0], 'click', function(event){
      sceneNum = 0;
    }, false)
    domEvents.addEventListener(world.hotspots[1], 'click', function(event){
      sceneNum = 1;
    }, false)
    domEvents.addEventListener(world.hotspots[2], 'click', function(event){
      sceneNum = 2;
    }, false)
    domEvents.addEventListener(world.hotspots[3], 'click', function(event){
      sceneNum = 3;
    }, false)
    domEvents.addEventListener(world.hotspots[4], 'click', function(event){
      sceneNum = 4;
    }, false)
    domEvents.addEventListener(world.hotspots[5], 'click', function(event){
      sceneNum = 5;
    }, false)
    domEvents.addEventListener(world.hotspots[6], 'click', function(event){
      sceneNum = 6;
    }, false)
    domEvents.addEventListener(world.hotspots[7], 'click', function(event){
      sceneNum = 7;
    }, false)
    
    
  };
  
//     ###    ##    ## #### ##     ##    ###    ######## ########       ###    ##    ## ########     ########  ######## ##    ## ########  ######## ########  
//    ## ##   ###   ##  ##  ###   ###   ## ##      ##    ##            ## ##   ###   ## ##     ##    ##     ## ##       ###   ## ##     ## ##       ##     ## 
//   ##   ##  ####  ##  ##  #### ####  ##   ##     ##    ##           ##   ##  ####  ## ##     ##    ##     ## ##       ####  ## ##     ## ##       ##     ## 
//  ##     ## ## ## ##  ##  ## ### ## ##     ##    ##    ######      ##     ## ## ## ## ##     ##    ########  ######   ## ## ## ##     ## ######   ########  
//  ######### ##  ####  ##  ##     ## #########    ##    ##          ######### ##  #### ##     ##    ##   ##   ##       ##  #### ##     ## ##       ##   ##   
//  ##     ## ##   ###  ##  ##     ## ##     ##    ##    ##          ##     ## ##   ### ##     ##    ##    ##  ##       ##   ### ##     ## ##       ##    ##  
//  ##     ## ##    ## #### ##     ## ##     ##    ##    ########    ##     ## ##    ## ########     ##     ## ######## ##    ## ########  ######## ##     ## 
  world.animate = function () {
      
      
    requestAnimationFrame(world.animate);
    world.controls.update();
    world.render.apply(world, arguments);
  };

  world.render = function () {
    if (sceneNum !== sceneNo) {
      sceneNo = sceneNum;
      
      this.updateScene();
    }
  this.renderer.render(this.scene, this.cam);
    
    //marker
    /*if (sceneNum < 7) {
      this.philly_object.visible = false;
    }
    if (sceneNum ==7) {
      this.philly_object.visible = true;
    }
    if (sceneNum ==5) {
      this.philly_selector.visible = true;
      this.LandForHousing_selector.visible = false;
    }
    else{
      this.philly_selector.visible = false;
      this.LandForHousing_selector.visible = false;
    }*/
  };
  
//   #######  ########      #######  ########        ## ########  ######  ########  ######  
//  ##     ## ##     ##    ##     ## ##     ##       ## ##       ##    ##    ##    ##    ## 
//         ## ##     ##    ##     ## ##     ##       ## ##       ##          ##    ##       
//   #######  ##     ##    ##     ## ########        ## ######   ##          ##     ######  
//         ## ##     ##    ##     ## ##     ## ##    ## ##       ##          ##          ## 
//  ##     ## ##     ##    ##     ## ##     ## ##    ## ##       ##    ##    ##    ##    ## 
//   #######  ########      #######  ########   ######  ########  ######     ##     ######  
  /* Functions to draw different kinds of objects/system in the scene */
  //who should call make hotspots?
  world.makeHotspot = function () {
    for(var i=0; i<camPos.length; i++)
    {
      world.hotspots[i] = new THREE.Mesh(new THREE.BoxGeometry(hotspotSize,hotspotSize,hotspotSize),
				   new THREE.MeshBasicMaterial({map: hsTexture, transparent:true}));
      world.hotspots[i].name = 'hs'+i;
      this.scene.add(world.hotspots[i]);
     var linkify = THREEx.Linkify(domEvents, world.hotspots[i]);
     
    
      if (hotspotpos.length == 0) {
	if (hotspotHeight == 0) {
	 var y = camPos[i].y;
      }
      else {
	var y = hotspotHeight;
      }
      
      world.hotspots[i].position.set(camPos[i].x,
				      y,
				      camPos[i].z);
   }
   else {
     world.hotspots[i].position.set(hotspotpos[i][0],
                            hotspotpos[i][1],
                            hotspotpos[i][2]);
    
   }
      }

      
    
  };
  
  world.changePano = function (x) {
    sceneNum = x;
 };
 
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
      	 var element = document.getElementById('container');
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
  
  
  
  /*marker
  world.layoutView = function (x){
      console.log(layoutFlag);
      if (x == 0) {
	if (layoutFlag == 0) {
	
	layoutFlag =1;
	layoutCamPos.x = this.cam.position.x;
	layoutCamPos.y = this.cam.position.y;
	layoutCamPos.z = this.cam.position.z;
    layoutCamRot = this.cam.rotation;
    this.s1.visible=true;
    this.s2.visible=true;
    this.s3.visible=true;
    this.esg_library.visible=true;
      this.esg_map.visible=true;
    if(panoType[sceneNo] == 0)
    {	
       this.panoMesh.visible = false;
      
    }
    else if (panoType[sceneNo] == 1)
    {
     
     this.sphere1.visible = false;
    }
     console.log(panoType[sceneNo]);
    //this.sphere1.visible = false;
    //this.panoMesh.visible = false;
    for(var i=0; i<camPos.length; i++){
      world.hotspots[i].visible = false;
     }
      document.getElementById('closelayout').style.visibility='visible';
      this.cam.position.y+=1500;
	}
	else{}
      }
   
   else {
    layoutFlag = 0;
    this.s1.visible=false;
    this.s2.visible=false;
    this.s3.visible=false;
    this.esg_library.visible=false;
    this.esg_map.visible=false;
     if(panoType[sceneNo] == 0)
    {	
       this.panoMesh.visible = true;
      
    }
    else if (panoType[sceneNo] == 1)
    {
     
     this.sphere1.visible = true;
    }
    for(var i=0; i<camPos.length; i++){
      world.hotspots[i].visible = true;
     }
      document.getElementById('closelayout').style.visibility='hidden';
      //this.cam.position.y-=1500;
      this.cam.position.set(layoutCamPos.x, layoutCamPos.y, layoutCamPos.z);
   }
   console.log(layoutCamPos);
    };
    */
    

  world.makeBooks = function () {
    
    var phillyFTexture = new THREE.TextureLoader().load( 'objects/books/philly/philly_front.jpg');
    this.philly_object = new THREE.Mesh(new THREE.BoxGeometry(17,27,0.0001), new THREE.MeshBasicMaterial({map:phillyFTexture}));
    this.scene.add(this.philly_object);
    this.philly_object.name = 'philly_object';
    this.philly_object.position.set(196, 78.7, -122.5);
    this.philly_object.rotation.set(1.5484928768023745, 0.1168387622616975, -1.3365439974407753);
     domEvents.addEventListener(this.philly_object, 'click', function(event){
      console.log('philly');
      world.fullScreen(1);
      world.readerMode(0, 'objects/books/philly/', 20);
    }, false)
     
      this.LandForHousing_selector = new THREE.Mesh(new THREE.BoxGeometry(1,27,4), new THREE.MeshBasicMaterial({transparent:true, opacity:0.3}));
     //this.philly_selector.material.color.set(0xff0000);
    this.scene.add(this.LandForHousing_selector);
    this.LandForHousing_selector.name = 'selector';
    this.LandForHousing_selector.visible = false;
    this.LandForHousing_selector.position.set(-73.96135768050101, 132.04123038206444, -116.34427221280642-2);
    this.LandForHousing_selector.rotation.set(0.207018957659,0,0);
    this.LandForHousing_selector.scale.set(1,1,0.53);
     domEvents.addEventListener(this.LandForHousing_selector, 'click', function(event){
      world.readerMode(0, 'objects/books/LandForHousing/', 40);
    }, false)
     
     
     this.philly_selector = new THREE.Mesh(new THREE.BoxGeometry(1,27,4), new THREE.MeshBasicMaterial({transparent:true, opacity:0.3}));
     //this.philly_selector.material.color.set(0xff0000);
    this.scene.add(this.philly_selector);
    this.philly_selector.name = 'selector';
    
    this.philly_selector.position.set(-73.96135768050101, 132.04123038206444, -116.34427221280642);
    this.philly_selector.rotation.set(0.207018957659,0,0);
    this.philly_selector.scale.set(1,1,0.53);
     domEvents.addEventListener(this.philly_selector, 'click', function(event){
      world.readerMode(0, 'objects/books/philly/', 20);
    }, false)
     
     
    
     
  };
  

  
//   ######  ##    ## ##    ## ########   #######  ##     ## 
//  ##    ## ##   ##   ##  ##  ##     ## ##     ##  ##   ##  
//  ##       ##  ##     ####   ##     ## ##     ##   ## ##   
//   ######  #####       ##    ########  ##     ##    ###    
//        ## ##  ##      ##    ##     ## ##     ##   ## ##   
//  ##    ## ##   ##     ##    ##     ## ##     ##  ##   ##  
//   ######  ##    ##    ##    ########   #######  ##     ##
// Cubic Panorama function
  world.makeSkyBox = function () {
    var url=['panoramas/' + this.currentSkybox + '/posx.jpg',
	    'panoramas/' + this.currentSkybox + '/negx.jpg',
	    'panoramas/' + this.currentSkybox + '/posy.jpg',
	    'panoramas/' + this.currentSkybox + '/negy.jpg',
	    'panoramas/' + this.currentSkybox + '/posz.jpg',
	    'panoramas/' + this.currentSkybox + '/negz.jpg'],
    textureCube = THREE.CubeTextureLoader(url),
    material = new THREE.MeshBasicMaterial({ color: 0xffffff, envMap: textureCube }),
    panoMeshGeo = new THREE.BoxGeometry(-50000, -50000, -50000),
    materialArray = [],
    panoMeshMat,
    i,
    cubeTex;
    for (i = 0; i < 6; i++) {
      var cubeMapTexture = new THREE.TextureLoader().load( url[i])
      materialArray.push(new THREE.MeshBasicMaterial({
			 map: cubeMapTexture,
			 side: THREE.FrontSide
			 }));
    }
    panoMeshMat = new THREE.MeshFaceMaterial(materialArray);
    this.panoMesh = new THREE.Mesh(panoMeshGeo, panoMeshMat);
    this.panoMesh.rotation.set(panoOffset[sceneNo].x,
                               panoOffset[sceneNo].y,
                               panoOffset[sceneNo].z);
    this.panoMesh.position.set(camPos[sceneNo].x,
                               camPos[sceneNo].y,
                               camPos[sceneNo].z);
    this.panoMesh.name = 'Pano Cube';
    var panos = this.scene.children.filter(function(item) {
      return item.name == 'Pano Cube';
    });
    if(panos.length == 0) {
      this.scene.add(this.panoMesh);
    }
    else {
      this.scene.remove(panos[0]);
      this.scene.add(this.panoMesh);
    }
  };
  
  world.makeSphericalPano = function () {
    var spheretexture = new THREE.TextureLoader().load('panoramas/'+this.currentSkybox+'.JPG');
    var geometry3 = new THREE.SphereGeometry(20000,50,50)
    geometry3.applyMatrix( new THREE.Matrix4().makeScale( 1, -1, 1 ) );
    this.sphere1 = new THREE.Mesh(geometry3, new THREE.MeshBasicMaterial({map:spheretexture, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: 140}));
    this.sphere1.position.set(camPos[sceneNo].x, camPos[sceneNo].y, camPos[sceneNo].z);
    this.scene.add(this.sphere1);
    this.sphere1.name = 'sphere1';
    this.sphere1.rotation.set(SpanoOffset[sceneNo].x, SpanoOffset[sceneNo].y, SpanoOffset[sceneNo].z);
      var Spanos = this.scene.children.filter(function(item) {
          return item.name == 'sphere1';
    });
    if(Spanos.length == 0) {
      this.scene.add(this.sphere1);
    }
    else {
      this.scene.remove(Spanos[0]);
      this.scene.add(this.sphere1);
    }
	    
	    };

  trans_obj = ['foobar', 'a farewell to arms', 'bag', 'book3'];
  
//  ######## ##     ## ######## ##    ## ########  ######  
//  ##       ##     ## ##       ###   ##    ##    ##    ## 
//  ##       ##     ## ##       ####  ##    ##    ##       
//  ######   ##     ## ######   ## ## ##    ##     ######  
//  ##        ##   ##  ##       ##  ####    ##          ## 
//  ##         ## ##   ##       ##   ###    ##    ##    ## 
//  ########    ###    ######## ##    ##    ##     ######  
// all event handlers of the 3D world
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
	  //for (var j = 0; j < trans_obj.length; j++) {
	    if (intersects[i].object.name === 'philly_object') {
	      console.log(intersects[i].object.name);
	      this.controls.enabled = false;
	      this.trans_control.attach(intersects[i].object);
	      this.trans_control.enabled = true;
	      //display some help info
	      info = '<small>Keys | t : translate | y : scale |' +
	      ' r : rotate | u : quit </small>';
	      document.getElementById('info').innerHTML = info;
	      
	    //}
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
    /*onMouseMove: function (event) {
      //event.preventDefault();
      var flag = false;
      var intersectsObject;
      mouse.set( ( event.clientX / window.innerWidth ) * 2 - 1, - ( event.clientY / window.innerHeight ) * 2 + 1 );
      var raycaster = new THREE.Raycaster();
      raycaster.setFromCamera( mouse, this.cam );
      var intersects = raycaster.intersectObjects( this.scene.children );
      if ( intersects.length > 0 ) {
	for (var i = 0; i < intersects.length; i++) {
	  for(var k=0; k< world.hotspots.length; k++)
	    { var name = 'hs'+k;
		if (intersects[i].object.name == name){
		intersects[i].object.position.y-=10;
		flag = true;
		intersectsObject = intersects[i].object;
		console.log('1');
		 
		
	      }
	      else {
		if(flag == true){
		intersectsObject.position.y+=10;
		flag = false;
		console.log('2');
		}
		else {console.log('3');}
		
	      }
	    }
	}
      }
	
      
    },*/
    
    onKeydown: function (event) {
      
      var variable = this.sphere1.rotation;
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
	  
	  //variable.z-=rotSpeed;
	  //document.getElementById('info').innerHTML = 'rotation is' +variable.x +',' +variable.y+','+variable.z;

//document.webkitExitFullscreen()
//document.webkitCancelFullScreen();
//document.mozCancelFullScreen();
//console.log('s');
         
        

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
    },
  };

  world.init();
})();
