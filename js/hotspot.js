
//Should plan who will be the owner of makeHotspot -> caller?
//arguments - texture, size and name
//TODO: add Events to hotspot and a context - added by salus sage
function makeHotspot(texture, size, name) {
  var hotspots = [];
  
   for(var i=0; i<API.libCollection.libRecord.length; i++)
   {
     
     hotspots[i] = new THREE.Mesh(new THREE.BoxGeometry(size,size,size),
                   new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load(texture), 
                    transparent:true}));
     hotspots[i].name = name+i;
     world.scene.add(hotspots[i]);
  
     hotspots[i].position.set(API.libCollection.libRecord[i].position.x, 
                              API.libCollection.libRecord[i].position.y,
                                   API.libCollection.libRecord[i].position.z);
  // var linkify = THREEx.Linkify(domEvents, hotspots[i]);

      
    }    
};



