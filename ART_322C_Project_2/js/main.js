

import * as THREE from './three.module.js';
import { FBXLoader } from './FBXLoader.js';


function GetPageHeight() {
	return Math.max(document.body.scrollHeight, document.body.offsetHeight,
		document.documentElement.clientHeight, document.documentElement.scrollHeight,
		document.documentElement.offsetHeight);
}

function WindowScrollNormalPosition() {
	return window.scrollY / (GetPageHeight() - window.innerHeight);
}

function lerp(start, end, amt) {
	return (1 - amt) * start + amt * end
}

function inverseLerp(start, end, amt) {
	return (amt - start) / (end - start);
}

function clamp(num, min, max) {
	return Math.min(Math.max(num, min), max);
};

function randomRange(min, max) {
	return Math.random() * (max - min) + min;
}

function randomRangeInt(min, max) {
	return Math.round(randomRange(min, max));
}

function setLeafPos(leaf) {

	leaf.position.x = randomRange(-1000, 100);
	leaf.position.y = 750;
	//leaf.position.y = randomRange(-1000, 1000);
	leaf.position.z = randomRange(-500, 500);


	//leaf.scale.x = leaf.scale.y = leaf.scale.z = randomRange(.75, 1.75);
}

console.log(THREE);


let groundLevel = -75;

let scene = new THREE.Scene();

let environment = new THREE.CubeTextureLoader()
	.setPath("./imgs/")
	.load([
		'left.png',
		'right.png',
		'top.png',
		'bottom.png',
		'back.png',
		'front.png',
	]);


scene.background = environment;


let camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 2000);

camera.position.z = 5;


let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


let manager = new THREE.LoadingManager();
let loader = new FBXLoader(manager);

//let leafMesh = new THREE.BoxGeometry(10, 2, 5);
let leafs = [];
let leafMesh = null;
let leafCount = 250;
let leafColorRange = [
	0xFBBF07,
	0xF49004,
	0xE35704,
	0xA92A0A,
	0xF8B005
];

let shadows = [];


loader.load("./models/leaf_0.fbx", function(group) {

	console.log(group);
	leafMesh = group.children[0].geometry;


	for (let i = 0; i < leafCount; i++) {


		let currentColor = leafColorRange[randomRangeInt(0, leafColorRange.length - 1)];
		let leafMaterial = new THREE.MeshBasicMaterial({ color: new THREE.Color(currentColor) });
		leafMaterial.transparent = true;
		let newLeaf = group.children[0].clone(true);
		newLeaf.material = leafMaterial;

		leafs.push(newLeaf);

		scene.add(newLeaf);

		setLeafPos(newLeaf);

		newLeaf.position.y = randomRange(-25, 750);
		//console.log(newLeaf.position.y)

		let scale = randomRange(.01, .02);

		newLeaf.scale.x *= scale;
		newLeaf.scale.y *= scale;
		newLeaf.scale.z *= scale;

		newLeaf.rotation.z = randomRange(0, 2 * Math.PI);



		//NOTE: SHADOWS

		let shadowMaterial = new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 0, .005) });
		shadowMaterial.transparent = true;
		let currentShadow = new THREE.Mesh(new THREE.CircleGeometry(1), shadowMaterial);
		shadowMaterial.opacity = 0;
		currentShadow.position.y = groundLevel - 10;
		currentShadow.rotation.x = -Math.PI / 2;


		scene.add(currentShadow);
		shadows.push(currentShadow);


	}

});


//let geometry = new THREE.BoxGeometry(1, 1, 1);
//let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//let cube = new THREE.Mesh(geometry, material);
//scene.add(cube);




function OnWindowResize(e) {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(window.innerWidth, window.innerHeight);

}

function OnScroll(e) {
	let scrollStart = Math.PI / 2;
	let scrollEnd = -Math.PI / 2;

	let currentPos = WindowScrollNormalPosition();


	let currentRotation = lerp(scrollStart, scrollEnd, currentPos);

	camera.rotation.x = currentRotation;

}

let prevFrameTime = 0;

function animate(time) {

	let deltaTime = (time - prevFrameTime) / 1000;
	prevFrameTime = time;

	let fallSpeed = 10;
	let forwardSpeed = 5;
	let horizontalSpeed = 3;
	let rotationSpeed = Math.PI / 24;
	let scales = [1, 1.05, 1.1, 1.5, .8];
	let opacitySpeed = 1;
	for (let i = 0; i < leafs.length; i++) {

		let currentLeaf = leafs[i];
		let currentShadow = shadows[i];
		let currentScale = scales[i % scales.length];



		if (currentLeaf.position.y <= groundLevel) {

			currentLeaf.material.opacity -= (opacitySpeed * currentScale * deltaTime);
			currentShadow.material.opacity -= (opacitySpeed * currentScale * deltaTime) / 2;

			if (currentLeaf.material.opacity <= 0) {

				setLeafPos(currentLeaf);

			}

		} else {

			if (currentLeaf.material.opacity < 1) {
				currentLeaf.material.opacity += (opacitySpeed * deltaTime);
			}


			currentLeaf.position.y -= fallSpeed * currentScale * deltaTime;
			currentLeaf.position.z -= forwardSpeed * currentScale * deltaTime;
			currentLeaf.position.x += horizontalSpeed * currentScale * deltaTime;

			currentLeaf.rotation.z += rotationSpeed * currentScale * deltaTime;

			currentShadow.position.x = currentLeaf.position.x;
			currentShadow.position.y = groundLevel - .5;
			currentShadow.position.z = currentLeaf.position.z;

			let shadowDistance = currentLeaf.position.y - groundLevel;
			let shadowLerp = clamp(1 - inverseLerp(0, 75, shadowDistance), 0, 1)
			let shadowScale = lerp(0, 1, shadowLerp);


			currentShadow.scale.x = currentShadow.scale.y = shadowScale;


			let shadowOpacity = clamp(shadowLerp, 0, .5);

			currentShadow.scale.x = currentShadow.scale.y = shadowScale;
			currentShadow.material.opacity = shadowOpacity;


		}

	}

	renderer.render(scene, camera);


	requestAnimationFrame(animate);
}



window.addEventListener("resize", OnWindowResize);
window.addEventListener("scroll", OnScroll);

OnScroll();
animate(0);
