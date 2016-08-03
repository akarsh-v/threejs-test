
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

function makeNav(arg){

  for(i=0; i<arg.length; i++){
    var node = '<a href="#" class="btn btn-default btn-sm">'+i+'</a>';
    var $node =  $(node);
    $node.bind({
      click: function(e){
         world.updateScene(API.libCollection, e.currentTarget.text);          
      }
    });
    $('#world-nav').append($node);
  }
}

