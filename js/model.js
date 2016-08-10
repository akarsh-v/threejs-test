/*API data for the Skybox texture, camera position, sphere rotation
	Hotspot and more objects to be added  */


(function() {
window.API = {};

API.library = 
{
	
	hotspot: {
		pathToTexture: "images/here.png",
		size: 10,
		name: 'hotspot'
	},

	libRecord:{
		type: "equirectangular",
		collection: [
			{
				pathToTexture: "/panoramas/esg_26-7-16/1.jpg",
				rotation: new THREE.Vector3( -3.0515,1.57,-0.10999999999999999),
				position: new THREE.Vector3(121.9,118.2,-108.6)
			},
			{	
				pathToTexture: "/panoramas/esg_26-7-16/2.jpg",
				rotation: new THREE.Vector3( -3.191592653589792,2.33,0.07),
				position:  new THREE.Vector3(-46.9, 68.7, 83.4)
			},
			{
				pathToTexture: "/panoramas/esg_26-7-16/3.jpg",
				rotation: new THREE.Vector3( -3.191592653589792,2.740000000000002,0.060000000000000095),
				position:  new THREE.Vector3(-46.9, 103, 83.4)
			},
			{
				pathToTexture: "/panoramas/esg_26-7-16/4.jpg",
				rotation: new THREE.Vector3( -2.261592653589812,1.4500000000000002,-0.8300000000000005),
				position:  new THREE.Vector3(-40.5, 133.8, 80.6)
			},
			{
				pathToTexture: "/panoramas/esg_26-7-16/5.jpg",
				rotation: new THREE.Vector3(-3.2015926535898074,2.9300000000000015,0.029999999999999555),
				position:  new THREE.Vector3(-40.5, 101.3, 80.6)
			},
			{
				pathToTexture: "/panoramas/esg_26-7-16/6.jpg",
				rotation: new THREE.Vector3(-3.141592653589793,-3.2000000000000015,0),
				position:  new THREE.Vector3(-39, 137.9, 87.5)
			},
			{
				pathToTexture: "/panoramas/esg_26-7-16/7.jpg",
				rotation: new THREE.Vector3(-3.191592653589792,3.099999999999978,3.469446951953614e-18),
				position:  new THREE.Vector3(-41.9, 136.3, 101.3)
			},
			{
				pathToTexture: "/panoramas/esg_26-7-16/8.jpg",
				rotation: new THREE.Vector3(-3.141592653589793,-0.15999999999999917,-0.04),
				position:  new THREE.Vector3(-41.9, 167.8, 101.3)
			},
			{
				pathToTexture: "/panoramas/esg_26-7-16/9.jpg",
				rotation: new THREE.Vector3( -3.0515,1.57,-0.10999999999999999),
				position:  new THREE.Vector3(-41.9, 167.8, 117.1)
			},
			{
				pathToTexture: "/panoramas/esg_26-7-16/10.jpg",
				rotation: new THREE.Vector3( -3.0515,1.57,-0.10999999999999999),
				position:  new THREE.Vector3(-36.8, 136.2, 116.5)
			},
			{
				pathToTexture: "/panoramas/esg_26-7-16/11.jpg",
				rotation: new THREE.Vector3( -3.0515,1.57,-0.10999999999999999),
				position:  new THREE.Vector3(-43.1, 102, 133.4)
			},
			{
				pathToTexture: "/panoramas/esg_26-7-16/12.jpg",
				rotation: new THREE.Vector3( -3.0515,1.57,-0.10999999999999999),
				position:  new THREE.Vector3(-11, 104.3, 164.1)
			},
			{
				pathToTexture: "/panoramas/esg_26-7-16/13.jpg",
				rotation: new THREE.Vector3( -3.0515,1.57,-0.10999999999999999),
				position:  new THREE.Vector3(-11, 134.7, 164.1)
			},
			{
				pathToTexture: "/panoramas/esg_26-7-16/14.jpg",
				rotation: new THREE.Vector3( -3.0515,1.57,-0.10999999999999999),
				position:  new THREE.Vector3(73.3, 134.6, 279-61.4)
			},
			{
				pathToTexture: "/panoramas/esg_26-7-16/15.jpg",
				rotation:  new THREE.Vector3( -3.0515,1.57,-0.10999999999999999),
				position:  new THREE.Vector3(73.3, 101.1, 279-61.4)
			},
			{
				pathToTexture: "/panoramas/esg_26-7-16/16.jpg",
				rotation: new THREE.Vector3( -3.0515,1.57,-0.10999999999999999),
				position:  new THREE.Vector3(69.6, 68, 216.8)
			}
		]
	}
}


})();
