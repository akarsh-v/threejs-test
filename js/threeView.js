                                                                                                       
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
    $('#world-container').innerHTML = '<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><h1>You need a WebGL enabled browser to proceed.</h1>';
   
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
  
  function setStats(){
    world.stats = new Stats();
    document.getElementById('world-container').appendChild( world.stats.dom );
  }

  world.init = function () {

  // Renderer Initialization
  checkBrowserSupport();

  //set camera properties
  setCamProps();

  
  // Set Camera Controls initialization 
  setControls();

  //stats
  setStats();

  //TODO: should find a suitable place for this piece of dom functions
  //probablly a rendering context function - added by salus sage
  this.renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('world-container').appendChild(this.renderer.domElement);
  
  //Scene initialization
  this.scene = new THREE.Scene();
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
    world.stats.update();
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
  function clearCanvas(arg, index) {  //update scene depend on clearCanvas
    
    if(arg.type === "equirectangular")
    {
      if (index == 0 && typeof world.sphere == 'undefined')
      {
        makeSkybox(arg, index );
      } 
      else
      {
        world.spheretexture.dispose();
      }
      world.spheretexture = new THREE.TextureLoader().load(arg.collection[index].pathToTexture);
      world.spherematerial.map = world.spheretexture;
      world.spherematerial.needsUpdate = true;
      renderingContext(arg, index);
    };
    return null;
  
  }
  
//set up scene - build walls, put curtains
//TODO: add type handling for cubic and equirectangular -> world.makeskybox()
function makeSkybox(arg){
    
    if(arg.type === "equirectangular")
    {
      world.spheregeometry = new THREE.SphereGeometry(20000,50,50);
      world.spheregeometry.applyMatrix( new THREE.Matrix4().makeScale( 1, -1, 1 ));
      world.spherematerial = new THREE.MeshBasicMaterial({side: THREE.FrontSide})
      world.spherematerial.needsUpdate = true;
      world.sphere = new THREE.Mesh(world.spheregeometry, world.spherematerial);
      world.sphere.name = 'sphere';
    }
    else
    {
      //this is not applicable with current data context
      cubicSkybox();
    }
    
    world.scene.add(world.sphere);
    
  }
//set lights, camera, action - > SCENE
function renderingContext(arg, index){
  //Set cam position for the particular skybox image
    world.cam.position.set(arg.collection[index].position.x,
                           arg.collection[index].position.y,
                           arg.collection[index].position.z);
    world.cam.updateProjectionMatrix;
    world.scene.add(world.cam);
    //set cam controls -> depend on same campos with offset on x-axis
    world.controls.target.set(arg.collection[index].position.x - 0.1,
                              arg.collection[index].position.y,
                              arg.collection[index].position.z);
    world.sphere.position.set(arg.collection[index].position.x, 
                              arg.collection[index].position.y, 
                              arg.collection[index].position.z);
    world.sphere.rotation.set(arg.collection[index].rotation.x, 
                              arg.collection[index].rotation.y, 
                              arg.collection[index].rotation.z);
      
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

  world.updateScene = function (arg, index) {
    clearCanvas(arg, index);
    
};

world.init();
})();
