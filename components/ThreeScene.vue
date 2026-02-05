<template>
  <div ref="containerRef" class="three-container"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'

const containerRef = ref<HTMLDivElement | null>(null)

let scene: THREE.Scene | null = null
let camera: THREE.PerspectiveCamera | null = null
let renderer: THREE.WebGLRenderer | null = null
let shapes: THREE.Mesh[] = []
let mouseX = 0
let mouseY = 0
let animationId: number | null = null

function initThree() {
  if (!containerRef.value) return

  const width = window.innerWidth
  const height = window.innerHeight

  // Scene
  scene = new THREE.Scene()

  // Camera
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
  camera.position.z = 30

  // Renderer
  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
  })
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  containerRef.value.appendChild(renderer.domElement)
}

function createShapes() {
  if (!scene) return

  const geometries = [
    new THREE.IcosahedronGeometry(1, 0),
    new THREE.OctahedronGeometry(1, 0),
    new THREE.TetrahedronGeometry(1, 0),
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.TorusGeometry(0.7, 0.3, 8, 16)
  ]

  const colors = [
    0x8b5cf6, // Purple
    0x6366f1, // Indigo
    0x0066ff, // Blue
    0x06b6d4, // Cyan
    0x4000ac  // Deep purple (matching matrix)
  ]

  // Create 12 floating shapes
  for (let i = 0; i < 12; i++) {
    const geometry = geometries[Math.floor(Math.random() * geometries.length)]
    const material = new THREE.MeshBasicMaterial({
      color: colors[Math.floor(Math.random() * colors.length)],
      wireframe: true,
      transparent: true,
      opacity: 0.15 + Math.random() * 0.15
    })

    const mesh = new THREE.Mesh(geometry, material)

    // Random position spread across the screen
    mesh.position.x = (Math.random() - 0.5) * 50
    mesh.position.y = (Math.random() - 0.5) * 30
    mesh.position.z = (Math.random() - 0.5) * 20 - 10

    // Random scale
    const scale = 0.5 + Math.random() * 1.5
    mesh.scale.set(scale, scale, scale)

    // Store animation parameters
    mesh.userData = {
      rotationSpeed: {
        x: (Math.random() - 0.5) * 0.005,
        y: (Math.random() - 0.5) * 0.005,
        z: (Math.random() - 0.5) * 0.005
      },
      floatSpeed: 0.0005 + Math.random() * 0.001,
      floatOffset: Math.random() * Math.PI * 2,
      originalY: mesh.position.y
    }

    shapes.push(mesh)
    scene.add(mesh)
  }
}

function animate() {
  animationId = requestAnimationFrame(animate)

  if (!scene || !camera || !renderer) return

  const time = Date.now() * 0.001

  // Animate each shape
  shapes.forEach(shape => {
    // Rotation
    shape.rotation.x += shape.userData.rotationSpeed.x
    shape.rotation.y += shape.userData.rotationSpeed.y
    shape.rotation.z += shape.userData.rotationSpeed.z

    // Floating motion
    shape.position.y = shape.userData.originalY +
      Math.sin(time * shape.userData.floatSpeed * 100 + shape.userData.floatOffset) * 2
  })

  // Subtle camera movement following mouse
  camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.02
  camera.position.y += (-mouseY * 0.5 - camera.position.y) * 0.02
  camera.lookAt(scene.position)

  renderer.render(scene, camera)
}

function onResize() {
  if (!camera || !renderer) return

  const width = window.innerWidth
  const height = window.innerHeight

  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
}

function onMouseMove(event: MouseEvent) {
  mouseX = (event.clientX / window.innerWidth) * 2 - 1
  mouseY = (event.clientY / window.innerHeight) * 2 - 1
}

function cleanup() {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
  if (renderer) {
    renderer.dispose()
  }
  shapes.forEach(shape => {
    shape.geometry.dispose()
    if (shape.material instanceof THREE.Material) {
      shape.material.dispose()
    }
  })
  shapes = []
}

onMounted(() => {
  initThree()
  createShapes()
  animate()
  window.addEventListener('resize', onResize)
  window.addEventListener('mousemove', onMouseMove)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
  window.removeEventListener('mousemove', onMouseMove)
  cleanup()
})
</script>

<style lang="scss" scoped>
.three-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  pointer-events: none;
}
</style>
