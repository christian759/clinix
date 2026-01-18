// ============================================
// Clinix - 3D Scene with Three.js
// Floating Medical Objects Animation
// ============================================

// Wait for Three.js to load
window.addEventListener('DOMContentLoaded', function () {
    if (typeof THREE === 'undefined') {
        console.warn('Three.js not loaded');
        return;
    }

    initHero3DScene();
});

function initHero3DScene() {
    const canvas = document.getElementById('hero-3d-canvas');
    if (!canvas) return;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const pointLight1 = new THREE.PointLight(0x1E88E5, 1, 100);
    pointLight1.position.set(-5, 5, 3);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x0A4D8C, 1, 100);
    pointLight2.position.set(5, -5, 3);
    scene.add(pointLight2);

    // Medical objects array
    const medicalObjects = [];

    // Create 3D Medical Objects

    // 1. Stethoscope (simplified as torus + sphere)
    const stethoscopeGroup = new THREE.Group();
    const torusGeometry = new THREE.TorusGeometry(0.5, 0.1, 16, 100);
    const torusMaterial = new THREE.MeshPhongMaterial({
        color: 0x0A4D8C,
        shininess: 100,
        transparent: true,
        opacity: 0.9
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    stethoscopeGroup.add(torus);

    const sphereGeometry = new THREE.SphereGeometry(0.15, 32, 32);
    const sphereMaterial = new THREE.MeshPhongMaterial({
        color: 0x1E88E5,
        shininess: 100
    });
    const sphere1 = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere1.position.set(0, 0.5, 0);
    const sphere2 = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere2.position.set(0, -0.5, 0);
    stethoscopeGroup.add(sphere1);
    stethoscopeGroup.add(sphere2);

    stethoscopeGroup.position.set(-3, 2, -2);
    scene.add(stethoscopeGroup);
    medicalObjects.push({ mesh: stethoscopeGroup, speed: 0.3, axis: 'y' });

    // 2. Medical Cross
    const crossGroup = new THREE.Group();
    const barGeometry = new THREE.BoxGeometry(1.5, 0.3, 0.3);
    const crossMaterial = new THREE.MeshPhongMaterial({
        color: 0x28A745,
        shininess: 100
    });
    const horizontalBar = new THREE.Mesh(barGeometry, crossMaterial);
    const verticalBar = new THREE.Mesh(barGeometry, crossMaterial);
    verticalBar.rotation.z = Math.PI / 2;
    crossGroup.add(horizontalBar);
    crossGroup.add(verticalBar);
    crossGroup.position.set(3, -2, -1);
    scene.add(crossGroup);
    medicalObjects.push({ mesh: crossGroup, speed: 0.4, axis: 'z' });

    // 3. Pills/Capsules
    const capsuleGeometry = new THREE.CapsuleGeometry(0.2, 0.6, 4, 8);
    const capsuleMaterial1 = new THREE.MeshPhongMaterial({
        color: 0xFF6B6B,
        shininess: 100
    });
    const capsule1 = new THREE.Mesh(capsuleGeometry, capsuleMaterial1);
    capsule1.position.set(2, 3, -3);
    capsule1.rotation.set(0.5, 0.5, 0);
    scene.add(capsule1);
    medicalObjects.push({ mesh: capsule1, speed: 0.5, axis: 'x' });

    const capsuleMaterial2 = new THREE.MeshPhongMaterial({
        color: 0x4ECDC4,
        shininess: 100
    });
    const capsule2 = new THREE.Mesh(capsuleGeometry, capsuleMaterial2);
    capsule2.position.set(-2, -3, -2);
    capsule2.rotation.set(-0.3, 0.8, 0);
    scene.add(capsule2);
    medicalObjects.push({ mesh: capsule2, speed: 0.6, axis: 'y' });

    // 4. Heart shape (simplified as sphere with deformation)
    const heartGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const heartMaterial = new THREE.MeshPhongMaterial({
        color: 0xFF4757,
        shininess: 100,
        transparent: true,
        opacity: 0.9
    });
    const heart = new THREE.Mesh(heartGeometry, heartMaterial);
    heart.position.set(-4, 0, -2);
    heart.scale.set(1, 0.8, 0.6);
    scene.add(heart);
    medicalObjects.push({ mesh: heart, speed: 0.35, axis: 'y', pulse: true });

    // 5. DNA Helix (simplified as spiral)
    const helixGroup = new THREE.Group();
    const helixMaterial = new THREE.MeshPhongMaterial({
        color: 0x9B59B6,
        shininess: 100
    });

    for (let i = 0; i < 20; i++) {
        const angle = (i / 20) * Math.PI * 4;
        const radius = 0.5;
        const height = i * 0.1 - 1;

        const sphere = new THREE.Mesh(
            new THREE.SphereGeometry(0.08, 8, 8),
            helixMaterial
        );
        sphere.position.set(
            Math.cos(angle) * radius,
            height,
            Math.sin(angle) * radius
        );
        helixGroup.add(sphere);
    }

    helixGroup.position.set(4, 1, -3);
    scene.add(helixGroup);
    medicalObjects.push({ mesh: helixGroup, speed: 0.25, axis: 'y' });

    // 6. Floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 100;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 15;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.03,
        color: 0x1E88E5,
        transparent: true,
        opacity: 0.6
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Mouse interaction
    const mouse = { x: 0, y: 0 };
    const targetMouse = { x: 0, y: 0 };

    window.addEventListener('mousemove', (event) => {
        targetMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        targetMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    // Resize handler
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Animation loop
    const clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);

        const elapsedTime = clock.getElapsedTime();

        // Smooth mouse follow
        mouse.x += (targetMouse.x - mouse.x) * 0.05;
        mouse.y += (targetMouse.y - mouse.y) * 0.05;

        // Update camera position based on mouse
        camera.position.x = mouse.x * 0.5;
        camera.position.y = mouse.y * 0.5;
        camera.lookAt(scene.position);

        // Animate medical objects
        medicalObjects.forEach((obj, index) => {
            const { mesh, speed, axis, pulse } = obj;

            // Rotation
            if (axis === 'x') mesh.rotation.x += 0.01 * speed;
            if (axis === 'y') mesh.rotation.y += 0.01 * speed;
            if (axis === 'z') mesh.rotation.z += 0.01 * speed;

            // Float animation
            mesh.position.y += Math.sin(elapsedTime * speed + index) * 0.001;

            // Pulse effect for heart
            if (pulse) {
                const scale = 1 + Math.sin(elapsedTime * 2) * 0.1;
                mesh.scale.set(scale, scale * 0.8, scale * 0.6);
            }
        });

        // Rotate particles
        particlesMesh.rotation.y = elapsedTime * 0.05;
        particlesMesh.rotation.x = Math.sin(elapsedTime * 0.1) * 0.1;

        // Pulse point lights
        pointLight1.intensity = 1 + Math.sin(elapsedTime * 2) * 0.3;
        pointLight2.intensity = 1 + Math.cos(elapsedTime * 1.5) * 0.3;

        renderer.render(scene, camera);
    }

    animate();

    // Hide canvas when scrolling past hero
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        const heroHeight = document.querySelector('.hero').offsetHeight;

        if (scrollPosition > heroHeight * 0.8) {
            canvas.style.opacity = Math.max(0, 1 - (scrollPosition - heroHeight * 0.8) / 200);
        } else {
            canvas.style.opacity = 1;
        }
    });
}

// Add 3D tilt effect to cards
document.addEventListener('DOMContentLoaded', function () {
    const tiltCards = document.querySelectorAll('.service-card, .doctor-card, .testimonial-card');

    tiltCards.forEach(card => {
        card.addEventListener('mousemove', handleTilt);
        card.addEventListener('mouseleave', resetTilt);
    });

    function handleTilt(e) {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 10;
        const rotateY = ((centerX - x) / centerX) * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        card.style.transition = 'transform 0.1s ease';
    }

    function resetTilt(e) {
        const card = e.currentTarget;
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        card.style.transition = 'transform 0.3s ease';
    }
});
