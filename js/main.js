                                                                                                       
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


/*Vlib core for all threejs and vlib 
 *
 *Three.js-r77
 *
 */


(function () {
  "use strict";
  //World object -> decide on world's properties
//  window.world = window.world || {};
  var domEvents;
 // window.sceneNo=0, window.sceneNum = 0;
  //var defaultData, trans_obj;
  var mouse = new THREE.Vector2(), rotSpeed = 0.1;
  world.scene = {};
  //what is this?
  function bind(scope, func) {
    return function bound() {
      func.apply(scope, arguments);
    };
  }
  
//  #### ##    ## #### ######## 
//   ##  ###   ##  ##     ##    
//   ##  ####  ##  ##     ##    
//   ##  ## ## ##  ##     ##    
//   ##  ##  ####  ##     ##    
//   ##  ##   ###  ##     ##    
//  #### ##    ## ####    ##  

   //INIT is the OWNER
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

//makeWorld is the owner
  function clearCanvas() {  //update scne depend on clearCanvas
    world.scene.remove(world.sphere);
    return null;
  }


  world.init = function () {

  // Renderer Initialization
  checkBrowserSupport();

  //set camera properties
  setCamProps();

  
  // Set Camera Controls initialization -> should be able to pass arguments like
  //Rotation speed and ...?
  setControls();

  this.renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('world-container').appendChild(this.renderer.domElement);
  
  //Scene initialization
  this.scene = new THREE.Scene();
  
  domEvents   = new THREEx.DomEvents(this.cam, this.renderer.domElement);

 
  //this.updateScene();

  };
  
//  ##     ## ########  ########     ###    ######## ######## 
//  ##     ## ##     ## ##     ##   ## ##      ##    ##       
//  ##     ## ##     ## ##     ##  ##   ##     ##    ##       
//  ##     ## ########  ##     ## ##     ##    ##    ######   
//  ##     ## ##        ##     ## #########    ##    ##       
//  ##     ## ##        ##     ## ##     ##    ##    ##       
//   #######  ##        ########  ##     ##    ##    ########

 // ** Bhanu - Removed from update scene function **
 //Problem what is panoType?? array of 1's and 0's looks very cryptic
    //Change Skyboxes -> which currently depends on user input,
    //which updates a global state variable sceneNo or sceneNum
    // var panoType = [1,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,1];

    // Solution: add a "type" property to data structure values Equirectangural or cubic
    //makepanorama will be function to deal both types
    /*if(panoType[sceneNo] == 0)
    { 
      this.makeSkyBox();
      this.scene.remove(world.sphere1);
    }
    else
    {
     this.makeSphericalPano();
     this.scene.remove(world.panoMesh);
    }*/
    

// This is run everytime the scene has to change.
//who will be the owner of scene change? -> some user interaction -> Controller!!
//So update scene boils down to makeWorld -> worldly Functions 

  world.updateScene = function (type, texture, rotation, position) {
    //this.renderer.clear( true, false );
    //this.currentSkybox = this.skyboxs[sceneNo];
    //hardcoding arguments for testing purpose

    world.makeWorld(type, texture, rotation, position);


  };


  
//     ###    ##    ## #### ##     ##    ###    ######## ########       ###    ##    ## ########     ########  ######## ##    ## ########  ######## ########  
//    ## ##   ###   ##  ##  ###   ###   ## ##      ##    ##            ## ##   ###   ## ##     ##    ##     ## ##       ###   ## ##     ## ##       ##     ## 
//   ##   ##  ####  ##  ##  #### ####  ##   ##     ##    ##           ##   ##  ####  ## ##     ##    ##     ## ##       ####  ## ##     ## ##       ##     ## 
//  ##     ## ## ## ##  ##  ## ### ## ##     ##    ##    ######      ##     ## ## ## ## ##     ##    ########  ######   ## ## ## ##     ## ######   ########  
//  ######### ##  ####  ##  ##     ## #########    ##    ##          ######### ##  #### ##     ##    ##   ##   ##       ##  #### ##     ## ##       ##   ##   
//  ##     ## ##   ###  ##  ##     ## ##     ##    ##    ##          ##     ## ##   ### ##     ##    ##    ##  ##       ##   ### ##     ## ##       ##    ##  
//  ##     ## ##    ## #### ##     ## ##     ##    ##    ########    ##     ## ##    ## ########     ##     ## ######## ##    ## ########  ######## ##     ## 
  //IS THIS NECESSARY? 
  world.animate = function () {      
    requestAnimationFrame(world.animate);
    world.controls.update();
    world.render.apply(world, arguments);
  };

  world.render = function () {
    this.renderer.render(this.scene, this.cam);
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

//set up scene - build walls, put curtains
//TODO: add type handling for cubic and equirectangular -> world.makeskybox()
  world.makeWorld = function(type, texture, position, rotation){
    clearCanvas();
    var spheretexture = new THREE.TextureLoader().load('panoramas/'+texture);
    var geometry = new THREE.SphereGeometry(20000,50,50);
    geometry.applyMatrix( new THREE.Matrix4().makeScale( 1, -1, 1 ) );
    world.sphere = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({map:spheretexture,
                   side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: 140}));
    world.sphere.position.set(position.x, position.y, position.z);
    world.sphere.name = 'sphere';
    world.sphere.rotation.set(rotation.x, rotation.y, rotation.z);
      var Spanos = this.scene.children.filter(function(item) {
          return item.name == 'sphere';
    });
    world.scene.add(this.sphere);
    world.worldyFunctions(texture, position, rotation);
  }
//set lights, camera, action
  world.worldyFunctions = function(texture, position, rotation){
  //Set cam position for the particular skybox image
    this.cam.position.set(position.x,
                          position.y,
                          position.z);
    this.cam.updateProjectionMatrix;
    this.scene.add(this.cam);
    //set cam controls -> depend on same campos with offset on x-axis
    this.controls.target.set(position.x - 0.1,
                             position.y,
                             position.z);
    //marker
    this.trans_control = new THREE.TransformControls(this.cam,
                                                     this.renderer.domElement);
    this.trans_control.name = "trans_control";
    this.trans_control.enabled = false;
    this.scene.add(this.trans_control);
    
    
    // action!
    this.animate.apply(this, arguments);

    // attach event handlers
    this.controls.addEventListener('change', bind(this, this.render));
    this.renderer.domElement.addEventListener('mousewheel',bind(this,
                                         this.eventHandlers.onDocumentMouseWheel), false);
    //this.renderer.domElement.addEventListener('mousedown',bind(this,this.eventHandlers.onClick),false);
  // this.renderer.domElement.addEventListener('mousemove',bind(this,this.eventHandlers.onMouseMove),false);
    window.addEventListener('keydown',bind(this, this.eventHandlers.onKeydown), false);
    window.addEventListener('resize',bind(this, this.eventHandlers.onWindowResize),false);

}
    
  world.init();

})();
