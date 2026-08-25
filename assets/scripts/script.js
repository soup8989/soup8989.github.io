import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';



// Canvas
const canvas = document.querySelector('canvas.webgl')
console.log(canvas)

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */

const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20),
    new THREE.MeshStandardMaterial()
)
floor.rotation.x = -Math.PI * 0.5
scene.add(floor)

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshStandardMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// Camera
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
const aspectRatio = sizes.width/sizes.height
const camera = new THREE.PerspectiveCamera(90, aspectRatio, 0.1, 100)
camera.position.set(3, 3, 3)
camera.lookAt(mesh.position)

scene.add(camera)

/**
 * Lights
 */

const ambientLight = new THREE.AmbientLight('0xffffff', 1)
const directionalLight = new THREE.DirectionalLight('0xffffff', 0.3)
scene.add(ambientLight, directionalLight)



// Render
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)

/**
 * Controls
 */
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true


const timer = new THREE.Timer()

const tick = () => {

    timer.update()
    controls.update()

    mesh.rotation.y += 0.5 * timer.getDelta()

    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()