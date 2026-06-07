"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030303, 0.02);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 100;
    scene.add(camera);

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 20000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      const r = 10 + Math.random() * 40;
      const theta = Math.random() * Math.PI * 2;
      posArray[i] = r * Math.cos(theta); // x
      posArray[i + 1] = r * Math.sin(theta); // y
      posArray[i + 2] = (Math.random() - 0.5) * 400; // z corridor
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.2,
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    const clock = new THREE.Clock();
    let animationFrameId: number;

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();
      particlesMesh.rotation.z = elapsedTime * 0.05;
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(tick);
    };
    tick();

    // Scroll Animations
    gsap.to(camera.position, {
      z: -150,
      ease: "none",
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });
    gsap.to(camera.rotation, {
      z: Math.PI / 4,
      ease: "none",
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
      },
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-screen h-screen z-0 pointer-events-none" />;
}
