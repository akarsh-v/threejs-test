                                                                                                       
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
//This code should be concerned with Mesh, Material, Geometry

(function () {
  "use strict";
//Should figure the domEvents role, when needed and it may be a part of the controller
  //var domEvents;

  
//  #### ##    ## #### ######## 
//   ##  ###   ##  ##     ##    
//   ##  ####  ##  ##     ##    
//   ##  ## ## ##  ##     ##    
//   ##  ##  ####  ##     ##    
//   ##  ##   ###  ##     ##    
//  #### ##    ## ####    ##  

   //INIT is the OWNER
  /*
   * init scene, setup camera, and
   draw 3D objects
   */

  //Check browser compatibility and initialize renderer or fallback for unsupported
  //browsers
  function checkBrowserSupport() {
  if (Detector.webgl) {
    world.renderer = new THREE.WebGLRenderer({antialias: true});
  }
  else {
    document.getElementById('world-container').innerHTML = '<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><h1>You need a WebGL enabled browser to proceed.</h1>';
   
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
  //Scene camera and control can go to rendering context function, with
  //an argument container element - which is the html node,
  //were #world-container is the container element

   function bind(scope, func) {
    return function bound() {
      func.apply(scope, arguments);
    };
  }
 
  function setControls(){  
    world.controls = new THREE.OrbitControls(world.cam, world.renderer.domElement);
    //this.controls.enabled = false;
    world.controls.autoRotateSpeed = 0.3;
    world.controls.addEventListener('change', bind(world, world.render));
}


  world.init = function () {

  // Renderer Initialization
  checkBrowserSupport();

  //set camera properties
  setCamProps();

  
  // Set Camera Controls initialization 
  setControls();

  //TODO: should find a suitable place for this piece of dom functions
  //probablly a rendering context function - added by salus sage
  this.renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('world-container').appendChild(this.renderer.domElement);
  
  //Scene initialization
  this.scene = new THREE.Scene();

  //initialize the scene with the first pano as default
  this.updateScene(this.libCollection.type, this.libCollection.libRecord[0].pathToTexture,
                   this.libCollection.libRecord[0].position, 
                   this.libCollection.libRecord[0].rotation);

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
    this.renderer.render(this.scene, this.cam);
  };
  


  
//   ######  ##    ## ##    ## ########   #######  ##     ## 
//  ##    ## ##   ##   ##  ##  ##     ## ##     ##  ##   ##  
//  ##       ##  ##     ####   ##     ## ##     ##   ## ##   
//   ######  #####       ##    ########  ##     ##    ###    
//        ## ##  ##      ##    ##     ## ##     ##   ## ##   
//  ##    ## ##   ##     ##    ##     ## ##     ##  ##   ##  
//   ######  ##    ##    ##    ########   #######  ##     ##

//makeWorld is the owner
  function clearCanvas() {  //update scene depend on clearCanvas
    world.scene.remove(world.sphere);
    return null;
  }

//set up scene - build walls, put curtains
//TODO: add type handling for cubic and equirectangular -> world.makeskybox()
function makeSkybox(type, texture, position, rotation){
    clearCanvas();
    if(type === "equirectangular"){
        var spheretexture = new THREE.TextureLoader().load('panoramas/'+texture);
        var geometry = new THREE.SphereGeometry(20000,50,50);
        geometry.applyMatrix( new THREE.Matrix4().makeScale( 1, -1, 1 ) );
        world.sphere = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({map:spheretexture,
                   side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: 140}));
        world.sphere.position.set(position.x, position.y, position.z);
        world.sphere.name = 'sphere';
        world.sphere.rotation.set(rotation.x, rotation.y, rotation.z);
      
      } else {
        //this is not applicable with current data context
        cubicSkybox();
      }
    world.scene.add(world.sphere);
    renderingContext(texture, position, rotation);
  }
//set lights, camera, action - > SCENE
function renderingContext(texture, position, rotation){
  //Set cam position for the particular skybox image
    world.cam.position.set(position.x,
                          position.y,
                          position.z);
    world.cam.updateProjectionMatrix;
    world.scene.add(world.cam);
    //set cam controls -> depend on same campos with offset on x-axis
    world.controls.target.set(position.x - 0.1,
                             position.y,
                             position.z);

    // action!
    world.animate.apply(world, arguments);
}

// create Cubic Panorama 
//TODO: this needs more cleaning up to make dynamic - > need test data - added by salus sage
// 
  function cubicSkybox() {
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


  
//  ##     ## ########  ########     ###    ######## ######## 
//  ##     ## ##     ## ##     ##   ## ##      ##    ##       
//  ##     ## ##     ## ##     ##  ##   ##     ##    ##       
//  ##     ## ########  ##     ## ##     ##    ##    ######   
//  ##     ## ##        ##     ## #########    ##    ##       
//  ##     ## ##        ##     ## ##     ##    ##    ##       
//   #######  ##        ########  ##     ##    ##    ########


 
//Change Skyboxes -> which currently depends on user input,
 
// This is run everytime the scene has to change.
//who will be the owner of scene change? -> some user interaction -> Controller!!
//So update scene is entry to makeWorld -> worldly Functions with arguments
//type, texture, position and rotation in the same order

  world.updateScene = function (type, texture, position, rotation) {
    makeSkybox(type, texture, position, rotation);
};


    
  world.init();

})();
