
//Should plan who will be the owner of makeHotspot -> caller?
//arguments - texture, size and name
//TODO: add Events to hotspot - added by salus sage
function makeHotspot(texture, size, name) {
  var hotspots = [];
  
   for(var i=0; i<world.libCollection.libRecord.length; i++)
   {
     console.log("hotspot", i);
     var hotspotHeight = world.libCollection.libRecord[i].position.y;

     hotspots[i] = new THREE.Mesh(new THREE.BoxGeometry(size,size,size),
                   new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load(texture), 
                    transparent:true}));
     hotspots[i].name = name+i;
     world.scene.add(hotspots[i]);
  
     hotspots[i].position.set(world.libCollection.libRecord[i].position.x, 
                              world.libCollection.libRecord[i].position.y,
                                   world.libCollection.libRecord[i].position.z);
  // var linkify = THREEx.Linkify(domEvents, hotspots[i]);

      
    }    
};
