function makeWorldObjects() {
    var testcube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color:0xffffff}));
    world.scene.add(testcube);
    testcube.name ='testcube';
   
    this.axisHelper = new THREE.AxisHelper( 8500 );
    world.scene.add( this.axisHelper );
    
    //s1
    world.s1 = new THREE.Mesh(new THREE.BoxGeometry(394.3,76.6,30.4), new THREE.MeshBasicMaterial({color:0xffffff, wireframe:true}));
    world.scene.add(world.s1);
    world.s1.visible=false;
    world.s1.position.set(201.55, 43.6, 43.1 );
    //world.s1.name = 'object';
    world.s1.rotation.set(0.021975825449691403, -0.014816078383195446, -0.0026511761492486745);
    
    //s2
    world.s2 = new THREE.Mesh(new THREE.BoxGeometry(30.5, 144.9, 90.9 ), new THREE.MeshBasicMaterial({color:0xffffff, wireframe:true}));
    world.scene.add(world.s2);
    world.s2.position.set(-80.9, 72.45, -109  );
    world.s2.rotation.set(0.03423173047789128, 0.11684184547185476, 0.05509180721665479);
    //world.s2.name = 'object';
    world.s2.visible=false;
    
    var s3MaterialBase = new THREE.MeshBasicMaterial({ color:0x00ffff, wireframe:true});
    var s3MaterialSide = new THREE.MeshBasicMaterial({ color:0xff00ff, wireframe:true});
    var s3MaterialBack = new THREE.MeshBasicMaterial({ color:0xffff00, wireframe:true});
    world.s3 = new THREE.Object3D();
    //x is guess work
    var s3Base= new THREE.Mesh(new THREE.BoxGeometry(30, 0.7, 64.3), s3MaterialBase);
    s3Base.position.set(-30/2, 1+0.7, -64.3/2);
    world.s3.add(s3Base);
    var s3Base2 = s3Base.clone();
    s3Base2.position.set(-30/2, 1+27.3+(0.7*2), -64.3/2);
    world.s3.add(s3Base2);
    var s3Base3 = s3Base.clone();
    s3Base3.position.set(-30/2, 1+27.3+31.5+(0.7*3), -64.3/2);
    world.s3.add(s3Base3);
    var s3Base4 = s3Base.clone();
    s3Base4.position.set(-30/2, 1+27.3+31.5+31.4+(0.7*4), -64.3/2);
    world.s3.add(s3Base4);
    var s3Base5 = s3Base.clone();
    s3Base5.position.set(-30/2, 1+27.3+31.5+31.4+31.8+(0.7*5), -64.3/2);
    world.s3.add(s3Base5);
    //x is guess work
    var s3Side = new THREE.Mesh(new THREE.BoxGeometry(30, 126.8, 0.7),s3MaterialSide);
    s3Side.position.set(-30/2,1+(126.8/2),-0.7/2);
    world.s3.add(s3Side);
    var s3Side2 = s3Side.clone();
    s3Side2.position.set(-30/2,1+(126.8/2),-((0.7/2)+64.3));
    world.s3.add(s3Side2);
    var s3Back = new THREE.Mesh(new THREE.BoxGeometry(0.7,126.8, 64.3), s3MaterialBack);
    s3Back.position.set(-0.7/2-(30), 1+(126.8/2), -64.3/2);
    world.s3.add(s3Back);
    world.scene.add(world.s3);
    world.s3.position.set(-53.9,1,-163.6);
    world.s3.rotation.set(0.010000000000000038, -0.6000000000000001, 0.02000000000000001);
    world.s3.visible=false;
    
    //64270A world.s4 = world.s3.clone();
    var s4MaterialBase = new THREE.MeshBasicMaterial({ color:0x6E2505});
    var s4MaterialSide = new THREE.MeshBasicMaterial({ color:0x712703});
    var s4MaterialBack = new THREE.MeshBasicMaterial({ color:0x110800});
    world.s4 = new THREE.Object3D();
    //x is guess work
    var s4Base= new THREE.Mesh(new THREE.BoxGeometry(30, 0.7, 64.3), s4MaterialBase);
    s4Base.position.set(-30/2, 1+0.7, -64.3/2);
    world.s4.add(s4Base);
    var s4Base2 = s4Base.clone();
    s4Base2.position.set(-30/2, 1+27.3+(0.7*2), -64.3/2);
    world.s4.add(s4Base2);
    var s4Base3 = s4Base.clone();
    s4Base3.position.set(-30/2, 1+27.3+31.5+(0.7*3), -64.3/2);
    world.s4.add(s4Base3);
    var s4Base4 = s4Base.clone();
    s4Base4.position.set(-30/2, 1+27.3+31.5+31.4+(0.7*4), -64.3/2);
    world.s4.add(s4Base4);
    var s4Base5 = s4Base.clone();
    s4Base5.position.set(-30/2, 1+27.3+31.5+31.4+31.8+(0.7*5), -64.3/2);
    world.s4.add(s4Base5);
    //x is guess work
    var s4Side = new THREE.Mesh(new THREE.BoxGeometry(30, 126.8, 0.7),s4MaterialSide);
    s4Side.position.set(-30/2,1+(126.8/2),-0.7/2);
    world.s4.add(s4Side);
    var s4Side2 = s4Side.clone();
    s4Side2.position.set(-30/2,1+(126.8/2),-((0.7/2)+64.3));
    world.s4.add(s4Side2);
    var s4Back = new THREE.Mesh(new THREE.BoxGeometry(0.7,126.8, 64.3), s4MaterialBack);
    s4Back.position.set(-0.7/2-(30), 1+(126.8/2), -64.3/2);
    world.s4.add(s4Back);
    world.scene.add(world.s4);
    world.s4.position.set(5,1,-36.5);
    world.s4.rotation.set(0,1.3,0);
    world.s4.name = 's4';
    var phillyFTexture = new THREE.TextureLoader().load( 'objects/books/philly/philly_front.jpg');
    var phillyBTexture = new THREE.TextureLoader().load( 'objects/books/philly/philly_back.jpg');
    var phillySTexture = new THREE.TextureLoader().load( 'objects/books/philly/philly_spine.jpg');
    var phillyMaterialFront = new THREE.MeshBasicMaterial({ map:phillyFTexture});
    var phillyMaterialSpine = new THREE.MeshBasicMaterial({ map:phillySTexture});
    var phillyMaterialBack = new THREE.MeshBasicMaterial({ map:phillyBTexture});
    world.philly = new THREE.Object3D();
    //x is guess work
    var phillyFront= new THREE.Mesh(new THREE.BoxGeometry(0.001, 27.2, 17), phillyMaterialFront);
    phillyFront.position.set(0,27.2/2,-(17/2));
    var phillySpine= new THREE.Mesh(new THREE.BoxGeometry(2.5, 27.2, 0.001), phillyMaterialSpine);
    phillySpine.position.set(-2.5/2,27.2/2,0);
    var phillyBack= new THREE.Mesh(new THREE.BoxGeometry(0.001, 27.2, 17), phillyMaterialBack);
    phillyBack.position.set(-2.5,27.2/2,-(17/2));
    world.philly.add(phillyFront);
    world.philly.add(phillySpine);
    world.philly.add(phillyBack);
    world.scene.add(world.philly);
    //world.philly.position.set(-73,119, -121);
    //world.philly.rotation.set(0.128,1.58,0.02);
    world.philly.position.set(-0.7999999999999992, 95.25,  -39);
    world.philly.rotation.set(0,3.08,0);
    world.philly.name = 'object';
    phillyBack.name = 'object';
    
    /*world.philly_object = new THREE.Mesh(new THREE.BoxGeometry(0.00001,27,17), new THREE.MeshBasicMaterial());
    world.scene.add(world.philly_object);
    world.philly_object.name = 'philly_object';
    world.philly_object.position.set(30,70,-70);
    world.domEvents.addEventListener(philly, 'click', function(event){
      console.log('click');
    }, false)
    */
    //y= 220 = guess
    var lib_mat = new THREE.LineBasicMaterial({
	color: 0xff0000
});
    var lib_geo = new THREE.Geometry();
lib_geo.vertices.push(
	new THREE.Vector3( 0,0,0 ),
	new THREE.Vector3( 0,0,61.2 ),
        new THREE.Vector3( 479.9,0,61.2),
        new THREE.Vector3(479.9,0,-41.6),
        new THREE.Vector3(375.3,0,-41.6),
        new THREE.Vector3(375.3,0,-299.6),
        new THREE.Vector3(0,0,-299.6),
        new THREE.Vector3(0,0,-238.5),
        new THREE.Vector3(-40.133, 0, -238.5),
        new THREE.Vector3(-100.7, 0, -160.27),
        new THREE.Vector3(-100.7,0, -80),
        new THREE.Vector3(-40.133,0,0),
        new THREE.Vector3(0,0,0),
        
        new THREE.Vector3( 0,301.9,0 ),
	new THREE.Vector3( 0,301.9,61.2 ),
        new THREE.Vector3( 479.9,301.9,61.2),
        new THREE.Vector3( 479.9,0,61.2),
        new THREE.Vector3( 479.9,301.9,61.2),
        new THREE.Vector3(479.9,301.9,-41.6),
         new THREE.Vector3(479.9,0,-41.6),
          new THREE.Vector3(479.9,301.9,-41.6),
        new THREE.Vector3(375.3,301.9,-41.6),
        new THREE.Vector3(375.3,0,-41.6),
        new THREE.Vector3(375.3,301.9,-41.6),
        new THREE.Vector3(375.3,301.9,-299.6),
        new THREE.Vector3(375.3,0,-299.6),
        new THREE.Vector3(375.3,301.9,-299.6),
        new THREE.Vector3(0,301.9,-299.6),
        new THREE.Vector3(0,0,-299.6),
        new THREE.Vector3(0,301.9,-299.6),
        new THREE.Vector3(0,301.9,-238.5),
        new THREE.Vector3(0,220,-238.5),
        new THREE.Vector3(0,0,-238.5),
        new THREE.Vector3(0,220,-238.5),
        new THREE.Vector3(-40.133, 220, -238.5),
        new THREE.Vector3(-40.133, 0, -238.5),
        new THREE.Vector3(-40.133, 220, -238.5),
        new THREE.Vector3(-100.7, 220, -160.27),
        new THREE.Vector3(-100.7, 0, -160.27),
        new THREE.Vector3(-100.7, 220, -160.27),
        new THREE.Vector3(-100.7,220, -80),
        new THREE.Vector3(-100.7,0, -80),
        new THREE.Vector3(-100.7,220, -80),
        new THREE.Vector3(-100.7,0, -80),
        new THREE.Vector3(-100.7,220, -80),
        new THREE.Vector3(-40.133,220,0),
        new THREE.Vector3(-40.133,0,0),
        new THREE.Vector3(-40.133,220,0),
        new THREE.Vector3(0,220,0)
       
        
);//19.1 65.7
    world.esg_library = new THREE.Line( lib_geo, lib_mat );
    world.scene.add(world.esg_library);
    world.esg_library.visible = false;
    
    var loader = new THREE.JSONLoader();
    console.log('loaded');
        loader.load("objects/esg_maps6.js", function(geometry, material) {
            geometry.center();
            var scale = 100;
            world.esg_map = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(material));
            world.esg_map.rotation.set(0, -0.9300000000000006, 0);
            world.esg_map.scale.set(scale, scale, scale);
            world.scene.add(world.esg_map);
            world.esg_map.position.set(-810,  320, 4060);
            world.esg_map.visible = false;
        });
};