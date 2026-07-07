"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function makeConcreteTexture() {
  const c = document.createElement("canvas");
  c.width = 256;
  c.height = 256;
  const g = c.getContext("2d")!;
  g.fillStyle = "#cfcabf";
  g.fillRect(0, 0, 256, 256);
  let seed = 13;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  // speckle
  for (let i = 0; i < 2600; i++) {
    const v = 150 + Math.floor(rnd() * 60);
    g.fillStyle = `rgba(${v},${v - 4},${v - 12},${0.25 + rnd() * 0.4})`;
    g.fillRect(rnd() * 256, rnd() * 256, 1 + rnd() * 2, 1 + rnd() * 2);
  }
  // pour lines
  g.strokeStyle = "rgba(90,86,78,0.12)";
  for (let i = 0; i < 7; i++) {
    g.beginPath();
    g.moveTo(0, 30 + i * 34 + rnd() * 10);
    g.lineTo(256, 30 + i * 34 + rnd() * 10);
    g.stroke();
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

function Dust() {
  const ref = useRef<THREE.Points>(null);
  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const n = 110;
    const pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 6;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 6;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return g;
  }, []);
  useFrame((state) => {
    const p = ref.current;
    if (!p) return;
    p.rotation.y = state.clock.elapsedTime * 0.02;
    const arr = (p.geometry.getAttribute("position") as THREE.BufferAttribute).array as Float32Array;
    for (let i = 1; i < arr.length; i += 3) {
      arr[i] += 0.0018;
      if (arr[i] > 3) arr[i] = -3;
    }
    (p.geometry.getAttribute("position") as THREE.BufferAttribute).needsUpdate = true;
  });
  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial size={0.025} color="#8d887d" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

function Sculpture() {
  const group = useRef<THREE.Group>(null);
  const tex = useMemo(makeConcreteTexture, []);
  const pointer = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    const g = group.current;
    if (!g) return;
    const t = state.clock.elapsedTime;
    pointer.current.x += (state.pointer.x - pointer.current.x) * 0.05;
    pointer.current.y += (state.pointer.y - pointer.current.y) * 0.05;
    g.rotation.y = t * 0.16 + pointer.current.x * 0.35;
    g.rotation.x = 0.06 + pointer.current.y * -0.18;
    g.position.y = 0.08 * Math.sin(t * 0.7);
  });

  return (
    <group ref={group}>
      {/* main slab */}
      <mesh>
        <boxGeometry args={[1.35, 2.15, 0.5]} />
        <meshStandardMaterial map={tex} color="#f0ece2" roughness={0.95} metalness={0.02} />
      </mesh>
      {/* offset block */}
      <mesh position={[0.62, -0.78, 0.3]} rotation={[0, 0.35, 0]}>
        <boxGeometry args={[0.85, 0.85, 0.85]} />
        <meshStandardMaterial map={tex} color="#ddd7ca" roughness={0.95} metalness={0.02} />
      </mesh>
      {/* floating slice */}
      <mesh position={[-0.55, 0.95, 0.42]} rotation={[0, -0.25, 0.08]}>
        <boxGeometry args={[0.7, 0.34, 0.34]} />
        <meshStandardMaterial map={tex} color="#e6e1d5" roughness={0.95} metalness={0.02} />
      </mesh>
      {/* cobalt bar — the staircase */}
      <mesh position={[0.05, 0.18, 0.42]} rotation={[0, 0, -0.35]}>
        <boxGeometry args={[2.5, 0.075, 0.075]} />
        <meshStandardMaterial color="#1f3fd8" emissive="#1f3fd8" emissiveIntensity={0.35} roughness={0.4} />
      </mesh>
      {/* burnt orange cube — the cushion */}
      <mesh position={[-0.72, -0.95, 0.45]} rotation={[0.3, 0.5, 0]}>
        <boxGeometry args={[0.26, 0.26, 0.26]} />
        <meshStandardMaterial color="#bc4a0a" roughness={0.6} />
      </mesh>
      <Dust />
    </group>
  );
}

export default function Monolith() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.55], fov: 34 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={1.35} color="#f5f2ea" />
      <directionalLight position={[-4, 6, 6]} intensity={1.9} color="#ffffff" />
      <pointLight position={[3, -3, 4]} intensity={4} color="#1f3fd8" />
      <Sculpture />
    </Canvas>
  );
}
