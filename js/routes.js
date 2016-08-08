routie('*/:name?', function(name) {

    world.updateScene(API.library.libRecord,
    				 _.findIndex(API.library.libRecord.collection,  {pathToTexture: name})); 
});