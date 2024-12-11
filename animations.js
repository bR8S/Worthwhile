// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
    /*
    const heroImgWrapper = document.querySelector('.hero-img-wrapper')

    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 1, 100);
    camera.position.set(0, 0, 4);

    let renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(innerWidth, innerHeight);
    heroImgWrapper.appendChild(renderer.domElement);

    scene.background = new THREE.Color(0x090D2D);

    scene.add(new THREE.Mesh(new THREE.SphereGeometry(1.995, 36, 18), new THREE.MeshBasicMaterial({color: 0x090D2D})));

    let g = new THREE.SphereGeometry(2, 36, 18);
    SphereToQuads(g);

    let m = new THREE.LineBasicMaterial({color: "#F8E813", linewidth: 10});
    let o = new THREE.LineSegments(g, m);

    o.rotation.z = -0.0025;
    o.rotation.x = 254;
    
    scene.add(o);

    function animate() {
        requestAnimationFrame(animate);
        o.rotation.y += 0.0015;
  
        // Render the scene
        renderer.render(scene, camera);
    }
  
    animate();

    // Handle window resizing
    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });
  

    function SphereToQuads(g) {
        let p = g.parameters;
        let segmentsX = p.widthSegments;
        let segmentsY = p.heightSegments-2;
        let mainShift = segmentsX + 1;
        let indices = [];
        for (let i = 0; i < segmentsY + 1; i++) {
            let index11 = 0;
            let index12 = 0;
            for (let j = 0; j < segmentsX; j++) {
                index11 = (segmentsX + 1) * i + j;
                index12 = index11 + 1;
                let index21 = index11;
                let index22 = index11 + (segmentsX + 1);
                indices.push(index11 + mainShift, index12 + mainShift);
                if (index22 < ((segmentsX + 1) * (segmentsY + 1) - 1)) {
                    indices.push(index21 + mainShift, index22 + mainShift);
                }
            }
            if ((index12 + segmentsX + 1) <= ((segmentsX + 1) * (segmentsY + 1) - 1)) {
                indices.push(index12 + mainShift, index12 + segmentsX + 1 + mainShift);
            }
        }
    
        let lastIdx = indices[indices.length - 1] + 2;
        
        // poles
        for(let i = 0; i < segmentsX; i++){
            //top
            indices.push(i, i + mainShift, i, i + mainShift + 1);
            
            // bottom
            let idx = lastIdx + i;
            let backShift = mainShift + 1;
            indices.push(idx, idx - backShift, idx, idx - backShift + 1);
        }
        
        g.setIndex(indices);
    }
    */

    gsap.registerPlugin(ScrollTrigger)

    const aboutMoneyIcons = document.querySelectorAll('.about-money')
    const contactStarIcons = document.querySelectorAll('.bg-star')
    const curvedText = document.querySelector('.plan-text-money-icon__text')
    const curvedTextIcon = document.querySelector('.plan-text-money-icon')
    const wheelText = document.querySelector('.plan-wheel-icon__wheel')
    const wheelTextIcon = document.querySelector('.plan-wheel-icon')
    const aboutImgWrapper = document.querySelector('.about-img-wrapper')

    aboutMoneyIcons.forEach((icon, index) => {
        gsap.to(icon, {
            scrollTrigger: {
                trigger: icon,
                scrub: 1,
                toggleActions: "play pause reverse reset"
            },
            y: -100,
            opacity: 1
        })

        const even = index % 2 == 0

        if(even){
            const t = gsap.timeline({ repeat: -1 })
            t.fromTo(icon, { rotate: 0 }, { duration: 2.25, rotate: 5 })
            t.fromTo(icon, { rotate: 5 }, { duration: 2.25, rotate: 14 })
            t.fromTo(icon, { rotate: 14 }, { duration: 2.25, rotate: 7 })
            t.fromTo(icon, {rotate: 7 }, { duration: 2.25, rotate: 0 })
        }
        else {
            const t = gsap.timeline({ repeat: -1 })
            t.fromTo(icon, { rotate: 0 }, { duration: 2.25, rotate: -5 })
            t.fromTo(icon, { rotate: -5 }, { duration: 2.25, rotate: -12 })
            t.fromTo(icon, { rotate: -12 }, { duration: 2.25, rotate: -7 })
            t.fromTo(icon, { rotate: -7 }, { duration: 2.25, rotate: 0 })
        }
    })

    contactStarIcons.forEach((icon, index) => {
        gsap.to(icon, {
            scrollTrigger: {
                trigger: icon,
                scrub: 1,
                toggleActions: "play pause reverse reset"
            },
            y: -100,
            scale: 0.85,
        })

        const even = index % 2 == 0

        if(even){
            const tl = gsap.timeline({ repeat: -1 })
            tl.fromTo(icon, { scale: 1, rotate: 0 }, { duration: 3.25, scale: 0.75, rotate: 17 })
            tl.fromTo(icon, { scale: 0.75, rotate: 17 }, { duration: 3.25, scale: 1, rotate: 26 })
            tl.fromTo(icon, { scale: 1, rotate: 26 }, { duration: 3.25, scale: 0.85, rotate: 19 })
            tl.fromTo(icon, { scale: 0.85, rotate: 19 }, { duration: 3.25, scale: 1, rotate: 0 })
        }
        else {
            const tl = gsap.timeline({ repeat: -1 })
            tl.fromTo(icon, { scale: 1, rotate: 0 }, { duration: 3.25, scale: 0.75, rotate: -12 })
            tl.fromTo(icon, { scale: 0.75, rotate: -12 }, { duration: 3.25, scale: 1, rotate: -22 })
            tl.fromTo(icon, { scale: 1, rotate: -22 }, { duration: 3.25, scale: 0.85, rotate: -15 })
            tl.fromTo(icon, { scale: 0.85, rotate: -15 }, { duration: 3.25, scale: 1, rotate: 0 })
        }
    })

    gsap.fromTo(curvedText, { rotate: 0 }, { duration: 20, rotate: 360, repeat: -1, ease: "linear" })

    gsap.to(curvedTextIcon, {
        scrollTrigger: {
            trigger: curvedTextIcon,
            scrub: 1,
            toggleActions: "play pause reverse reset"
        },
        y: -120,
    })

    gsap.to(aboutImgWrapper, {
        scrollTrigger: {
            trigger: aboutImgWrapper,
            scrub: 1,
            toggleActions: "play pause reverse reset"
        },
        y: -70,
    })

    gsap.fromTo(wheelText, { rotate: 0 }, { duration: 20, rotate: 360, repeat: -1, ease: "linear" })

    gsap.to(wheelTextIcon, {
        scrollTrigger: {
            trigger: wheelTextIcon,
            scrub: 1,
            toggleActions: "play pause reverse reset"
        },
        y: -120,
    })

    const planDot = document.querySelectorAll('.plan-dot')
    const planStar =  document.querySelector('.plan-star')
    
    planDot.forEach(dot => {
        dot.addEventListener('click', function() {
            const elementRect = this.getBoundingClientRect();
            const scrollToPosition = window.scrollY + elementRect.top - (window.innerHeight / 2 - elementRect.height / 2);

            gsap.to(window, {
                duration: 1, 
                scrollTo: scrollToPosition,
                ease: 'power2.out'
            });
        })
    })

    planStar.addEventListener('click', function() {
        const elementRect = this.getBoundingClientRect();
        const scrollToPosition = window.scrollY + elementRect.top - (window.innerHeight / 2 - elementRect.height / 2);

        gsap.to(window, {
            duration: 1, 
            scrollTo: scrollToPosition,
            ease: 'power2.out'
        });
    })

    const planCard = document.querySelectorAll('.plan-card')

    planCard.forEach(card => {
        gsap.to(card, {
            scrollTrigger: {
                trigger: card,
                scrub: 1,
                toggleActions: "play pause reverse reset",
                start: "top 60%",
                end: "bottom 70%"

            },
            opacity: 1,
            rotate: 0,
            top: 0
        })
    })

    const planTimelineStep = document.querySelectorAll('.plan-timeline-step')

    planTimelineStep.forEach(step => {
        gsap.to(step, {
            scrollTrigger: {
                trigger: step,
                scrub: 1,
                toggleActions: "play pause reverse reset",
                start: "top 80%",
                end: "bottom center"
            },
            opacity: 1,
        })
    })

});