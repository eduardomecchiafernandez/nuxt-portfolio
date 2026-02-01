<template>
    <div ref="container" class="three-container"></div>
</template>

<script>
import * as THREE from 'three';

export default {
    name: 'ThreeScene',
    data() {
        return {
            scene: null,
            camera: null,
            renderer: null,
            shapes: [],
            mouseX: 0,
            mouseY: 0,
            animationId: null
        }
    },
    mounted() {
        this.initThree();
        this.createShapes();
        this.animate();
        window.addEventListener('resize', this.onResize);
        window.addEventListener('mousemove', this.onMouseMove);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize);
        window.removeEventListener('mousemove', this.onMouseMove);
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        if (this.renderer) {
            this.renderer.dispose();
        }
    },
    methods: {
        initThree() {
            const container = this.$refs.container;
            const width = window.innerWidth;
            const height = window.innerHeight;

            // Scene
            this.scene = new THREE.Scene();

            // Camera
            this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
            this.camera.position.z = 30;

            // Renderer
            this.renderer = new THREE.WebGLRenderer({ 
                alpha: true, 
                antialias: true 
            });
            this.renderer.setSize(width, height);
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            container.appendChild(this.renderer.domElement);
        },

        createShapes() {
            const geometries = [
                new THREE.IcosahedronGeometry(1, 0),
                new THREE.OctahedronGeometry(1, 0),
                new THREE.TetrahedronGeometry(1, 0),
                new THREE.BoxGeometry(1, 1, 1),
                new THREE.TorusGeometry(0.7, 0.3, 8, 16)
            ];

            const colors = [
                0x8b5cf6, // Purple
                0x6366f1, // Indigo
                0x0066ff, // Blue
                0x06b6d4, // Cyan
                0x4000ac  // Deep purple (matching matrix)
            ];

            // Create 12 floating shapes
            for (let i = 0; i < 12; i++) {
                const geometry = geometries[Math.floor(Math.random() * geometries.length)];
                const material = new THREE.MeshBasicMaterial({
                    color: colors[Math.floor(Math.random() * colors.length)],
                    wireframe: true,
                    transparent: true,
                    opacity: 0.15 + Math.random() * 0.15
                });

                const mesh = new THREE.Mesh(geometry, material);

                // Random position spread across the screen
                mesh.position.x = (Math.random() - 0.5) * 50;
                mesh.position.y = (Math.random() - 0.5) * 30;
                mesh.position.z = (Math.random() - 0.5) * 20 - 10;

                // Random scale
                const scale = 0.5 + Math.random() * 1.5;
                mesh.scale.set(scale, scale, scale);

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
                };

                this.shapes.push(mesh);
                this.scene.add(mesh);
            }
        },

        animate() {
            this.animationId = requestAnimationFrame(this.animate);

            const time = Date.now() * 0.001;

            // Animate each shape
            this.shapes.forEach(shape => {
                // Rotation
                shape.rotation.x += shape.userData.rotationSpeed.x;
                shape.rotation.y += shape.userData.rotationSpeed.y;
                shape.rotation.z += shape.userData.rotationSpeed.z;

                // Floating motion
                shape.position.y = shape.userData.originalY + 
                    Math.sin(time * shape.userData.floatSpeed * 100 + shape.userData.floatOffset) * 2;
            });

            // Subtle camera movement following mouse
            this.camera.position.x += (this.mouseX * 0.5 - this.camera.position.x) * 0.02;
            this.camera.position.y += (-this.mouseY * 0.5 - this.camera.position.y) * 0.02;
            this.camera.lookAt(this.scene.position);

            this.renderer.render(this.scene, this.camera);
        },

        onResize() {
            const width = window.innerWidth;
            const height = window.innerHeight;

            this.camera.aspect = width / height;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(width, height);
        },

        onMouseMove(event) {
            this.mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            this.mouseY = (event.clientY / window.innerHeight) * 2 - 1;
        }
    }
}
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
