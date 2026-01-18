// Modern 3D Medical Scene - Dribbble Style
(() => {
    if (typeof THREE === 'undefined') return;

    // Hero 3D Scene
    const heroCanvas = document.getElementById('hero-canvas');
    if (heroCanvas) {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, heroCanvas.clientWidth / heroCanvas.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: heroCanvas, alpha: true, antialias: true });

        renderer.setSize(heroCanvas.clientWidth, heroCanvas.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);

        camera.position.z = 8;
        camera.position.y = 1;

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 5, 5);
        scene.add(directionalLight);

        const pointLight1 = new THREE.PointLight(0x4F46E5, 1, 30);
        pointLight1.position.set(-5, 3, 2);
        scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0x10B981, 1, 30);
        pointLight2.position.set(5, -3, 2);
        scene.add(pointLight2);

        // Create 3D Medical Objects
        const objects = [];

        // 1. Medical Cross
        const crossGroup = new THREE.Group();
        const crossMaterial = new THREE.MeshStandardMaterial({
            color: 0x4F46E5,
            metalness: 0.3,
            roughness: 0.4
        });

        const verticalBar = new THREE.Mesh(
            new THREE.BoxGeometry(0.4, 1.6, 0.4),
            crossMaterial
        );
        const horizontalBar = new THREE.Mesh(
            new THREE.BoxGeometry(1.6, 0.4, 0.4),
            crossMaterial
        );

        crossGroup.add(verticalBar);
        crossGroup.add(horizontalBar);
        crossGroup.position.set(-2, 1, 0);
        scene.add(crossGroup);
        objects.push({ mesh: crossGroup, speed: 0.3 });

        // 2. Pill/Capsule
        const capsuleGroup = new THREE.Group();

        const capsule1Material = new THREE.MeshStandardMaterial({
            color: 0x10B981,
            metalness: 0.4,
            roughness: 0.3
        });

        const capsuleSphere1 = new THREE.Mesh(
            new THREE.SphereGeometry(0.3, 32, 32),
            capsule1Material
        );
        capsuleSphere1.position.y = 0.4;

        const capsuleCylinder = new THREE.Mesh(
            new THREE.CylinderGeometry(0.3, 0.3, 0.8, 32),
            capsule1Material
        );

        const capsule2Material = new THREE.MeshStandardMaterial({
            color: 0xF59E0B,
            metalness: 0.4,
            roughness: 0.3
        });

        const capsuleSphere2 = new THREE.Mesh(
            new THREE.SphereGeometry(0.3, 32, 32),
            capsule2Material
        );
        capsuleSphere2.position.y = -0.4;

        capsuleGroup.add(capsuleSphere1);
        capsuleGroup.add(capsuleCylinder);
        capsuleGroup.add(capsuleSphere2);
        capsuleGroup.position.set(2, -1, 1);
        capsuleGroup.rotation.z = Math.PI / 6;
        scene.add(capsuleGroup);
        objects.push({ mesh: capsuleGroup, speed: 0.4 });

        // 3. Stethoscope (simplified)
        const stethGroup = new THREE.Group();

        const stethMaterial = new THREE.MeshStandardMaterial({
            color: 0x8B5CF6,
            metalness: 0.5,
            roughness: 0.3
        });

        const stethTorus = new THREE.Mesh(
            new THREE.TorusGeometry(0.6, 0.08, 16, 100),
            stethMaterial
        );

        const stethEarpiece1 = new THREE.Mesh(
            new THREE.SphereGeometry(0.12, 16, 16),
            stethMaterial
        );
        stethEarpiece1.position.set(0, 0.6, 0);

        const stethEarpiece2 = new THREE.Mesh(
            new THREE.SphereGeometry(0.12, 16, 16),
            stethMaterial
        );
        stethEarpiece2.position.set(0, -0.6, 0);

        const stethChest = new THREE.Mesh(
            new THREE.CylinderGeometry(0.2, 0.2, 0.1, 32),
            new THREE.MeshStandardMaterial({
                color: 0xD8B4FE,
                metalness: 0.7,
                roughness: 0.2
            })
        );
        stethChest.position.set(0.6, 0, 0);
        stethChest.rotation.z = Math.PI / 2;

        stethGroup.add(stethTorus);
        stethGroup.add(stethEarpiece1);
        stethGroup.add(stethEarpiece2);
        stethGroup.add(stethChest);
        stethGroup.position.set(0, 2, -1);
        scene.add(stethGroup);
        objects.push({ mesh: stethGroup, speed: 0.25 });

        // 4. Heart
        const heartMaterial = new THREE.MeshStandardMaterial({
            color: 0xEF4444,
            metalness: 0.3,
            roughness: 0.4
        });

        const heartSphere = new THREE.Mesh(
            new THREE.SphereGeometry(0.5, 32, 32),
            heartMaterial
        );
        heartSphere.scale.set(1, 0.8, 1);
        heartSphere.position.set(-1, -2, 0);
        scene.add(heartSphere);
        objects.push({ mesh: heartSphere, speed: 0.35, pulse: true });

        // 5. Syringe
        const syringeGroup = new THREE.Group();

        const needleMaterial = new THREE.MeshStandardMaterial({
            color: 0xC0C0C0,
            metalness: 0.8,
            roughness: 0.2
        });

        const needle = new THREE.Mesh(
            new THREE.CylinderGeometry(0.02, 0.02, 1, 16),
            needleMaterial
        );
        needle.position.y = 0.5;

        const barrelMaterial = new THREE.MeshStandardMaterial({
            color: 0xE0F2FE,
            metalness: 0.1,
            roughness: 0.3,
            transparent: true,
            opacity: 0.7
        });

        const barrel = new THREE.Mesh(
            new THREE.CylinderGeometry(0.15, 0.15, 0.8, 32),
            barrelMaterial
        );

        const plunger = new THREE.Mesh(
            new THREE.CylinderGeometry(0.12, 0.12, 0.5, 32),
            new THREE.MeshStandardMaterial({ color: 0x60A5FA })
        );
        plunger.position.y = -0.45;

        syringeGroup.add(needle);
        syringeGroup.add(barrel);
        syringeGroup.add(plunger);
        syringeGroup.position.set(1.5, 1.5, -0.5);
        syringeGroup.rotation.z = -Math.PI / 4;
        scene.add(syringeGroup);
        objects.push({ mesh: syringeGroup, speed: 0.5 });

        // 6. DNA Helix (simplified)
        const dnaGroup = new THREE.Group();
        const dnaMaterial = new THREE.MeshStandardMaterial({
            color: 0x06B6D4,
            metalness: 0.4,
            roughness: 0.4
        });

        for (let i = 0; i < 15; i++) {
            const angle = (i / 15) * Math.PI * 3;
            const y = i * 0.15 - 1;

            const sphere = new THREE.Mesh(
                new THREE.SphereGeometry(0.08, 16, 16),
                dnaMaterial
            );
            sphere.position.set(
                Math.cos(angle) * 0.4,
                y,
                Math.sin(angle) * 0.4
            );
            dnaGroup.add(sphere);
        }

        dnaGroup.position.set(-0.5, 0, 2);
        scene.add(dnaGroup);
        objects.push({ mesh: dnaGroup, speed: 0.2 });

        // Animation
        const clock = new THREE.Clock();
        let mouse = { x: 0, y: 0 };

        window.addEventListener('mousemove', (e) => {
            mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        });

        function animate() {
            requestAnimationFrame(animate);
            const elapsed = clock.getElapsedTime();

            // Camera movement
            camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.05;
            camera.position.y += (mouse.y * 0.5 - camera.position.y) * 0.05;
            camera.lookAt(0, 0, 0);

            // Animate objects
            objects.forEach((obj, i) => {
                obj.mesh.rotation.y += 0.01 * obj.speed;
                obj.mesh.position.y += Math.sin(elapsed * obj.speed + i) * 0.002;

                if (obj.pulse) {
                    const scale = 1 + Math.sin(elapsed * 2) * 0.05;
                    obj.mesh.scale.set(scale, scale * 0.8, scale);
                }
            });

            // Pulse lights
            pointLight1.intensity = 1 + Math.sin(elapsed) * 0.3;
            pointLight2.intensity = 1 + Math.cos(elapsed * 1.5) * 0.3;

            renderer.render(scene, camera);
        }

        animate();

        // Resize
        window.addEventListener('resize', () => {
            camera.aspect = heroCanvas.clientWidth / heroCanvas.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(heroCanvas.clientWidth, heroCanvas.clientHeight);
        });
    }

    // CTA 3D Scene - Medical Kit
    const ctaCanvas = document.getElementById('cta-canvas');
    if (ctaCanvas) {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, ctaCanvas.clientWidth / ctaCanvas.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: ctaCanvas, alpha: true, antialias: true });

        renderer.setSize(ctaCanvas.clientWidth, ctaCanvas.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);

        camera.position.set(0, 2, 5);
        camera.lookAt(0, 0, 0);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(3, 4, 3);
        scene.add(directionalLight);

        // Medical Kit
        const kitMaterial = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            metalness: 0.2,
            roughness: 0.4
        });

        const kit = new THREE.Mesh(
            new THREE.BoxGeometry(2.5, 1.5, 1.5),
            kitMaterial
        );

        const crossMaterial = new THREE.MeshStandardMaterial({
            color: 0xEF4444,
            metalness: 0.3,
            roughness: 0.4
        });

        const crossV = new THREE.Mesh(
            new THREE.BoxGeometry(0.3, 1, 0.1),
            crossMaterial
        );
        const crossH = new THREE.Mesh(
            new THREE.BoxGeometry(1, 0.3, 0.1),
            crossMaterial
        );

        crossV.position.set(0, 0, 0.76);
        crossH.position.set(0, 0, 0.76);

        kit.add(crossV);
        kit.add(crossH);
        scene.add(kit);

        // Animation
        function animateCTA() {
            requestAnimationFrame(animateCTA);
            kit.rotation.y += 0.01;
            kit.rotation.x = Math.sin(Date.now() * 0.001) * 0.1;
            renderer.render(scene, camera);
        }

        animateCTA();

        window.addEventListener('resize', () => {
            camera.aspect = ctaCanvas.clientWidth / ctaCanvas.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(ctaCanvas.clientWidth, ctaCanvas.clientHeight);
        });
    }
})();
