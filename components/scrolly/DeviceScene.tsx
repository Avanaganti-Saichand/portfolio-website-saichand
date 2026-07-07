"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import type { MotionValue } from "framer-motion";

/* ---------- math helpers ---------- */
const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const smooth = (a: number, b: number, x: number) => {
  const t = clamp01((x - a) / (b - a));
  return t * t * (3 - 2 * t);
};
const bump = (c: number, w: number, x: number) =>
  smooth(c - w, c - w * 0.35, x) * (1 - smooth(c + w * 0.35, c + w, x));
const lerp = THREE.MathUtils.lerp;

export interface Pointer {
  x: number;
  y: number;
}

/* ---------- canvas textures (no network assets) ---------- */
function makeScreenTexture() {
  const c = document.createElement("canvas");
  c.width = 512;
  c.height = 1024;
  const g = c.getContext("2d")!;
  g.fillStyle = "#07070d";
  g.fillRect(0, 0, 512, 1024);
  // status bar
  g.fillStyle = "rgba(255,255,255,0.55)";
  g.font = "600 26px monospace";
  g.fillText("9:41", 40, 58);
  // header card
  const grad = g.createLinearGradient(40, 100, 470, 300);
  grad.addColorStop(0, "#164e63");
  grad.addColorStop(1, "#4c1d95");
  g.fillStyle = grad;
  roundRect(g, 40, 100, 432, 200, 28);
  g.fillStyle = "rgba(255,255,255,0.9)";
  g.font = "700 34px sans-serif";
  g.fillText("Hello, Saichand", 70, 170);
  g.fillStyle = "rgba(255,255,255,0.5)";
  g.font = "400 24px sans-serif";
  g.fillText("Fabric · 60fps · New Arch", 70, 215);
  // list cards
  for (let i = 0; i < 4; i++) {
    const y = 340 + i * 140;
    g.fillStyle = "rgba(255,255,255,0.06)";
    roundRect(g, 40, y, 432, 110, 22);
    g.fillStyle = "rgba(34,211,238,0.85)";
    g.beginPath();
    g.arc(95, y + 55, 26, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = "rgba(255,255,255,0.35)";
    roundRect(g, 150, y + 30, 240, 16, 8);
    g.fillStyle = "rgba(255,255,255,0.16)";
    roundRect(g, 150, y + 62, 160, 14, 7);
  }
  // tab bar
  g.fillStyle = "rgba(255,255,255,0.07)";
  roundRect(g, 40, 920, 432, 70, 30);
  for (let i = 0; i < 4; i++) {
    g.fillStyle = i === 0 ? "#22d3ee" : "rgba(255,255,255,0.3)";
    g.beginPath();
    g.arc(120 + i * 92, 955, 12, 0, Math.PI * 2);
    g.fill();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function makeNativeTexture() {
  const c = document.createElement("canvas");
  c.width = 512;
  c.height = 1024;
  const g = c.getContext("2d")!;
  // diagonal split: swift orange / kotlin violet
  g.fillStyle = "#3b1c0f";
  g.fillRect(0, 0, 512, 1024);
  g.fillStyle = "#c2410c";
  g.beginPath();
  g.moveTo(0, 0);
  g.lineTo(512, 0);
  g.lineTo(0, 1024);
  g.closePath();
  g.fill();
  g.fillStyle = "#5b21b6";
  g.beginPath();
  g.moveTo(512, 0);
  g.lineTo(512, 1024);
  g.lineTo(0, 1024);
  g.closePath();
  g.fill();
  g.fillStyle = "rgba(255,255,255,0.85)";
  g.font = "700 52px monospace";
  g.fillText("Swift", 60, 220);
  g.fillText("Kotlin", 250, 850);
  g.font = "400 26px monospace";
  g.fillStyle = "rgba(255,255,255,0.55)";
  g.fillText("AVFoundation · Keychain", 60, 270);
  g.fillText("Camera2 · Keystore", 250, 900);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function makePcbTexture() {
  const c = document.createElement("canvas");
  c.width = 512;
  c.height = 1024;
  const g = c.getContext("2d")!;
  g.fillStyle = "#08130d";
  g.fillRect(0, 0, 512, 1024);
  g.strokeStyle = "rgba(52,211,153,0.35)";
  g.lineWidth = 3;
  let seed = 7;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  for (let i = 0; i < 46; i++) {
    let x = rnd() * 512;
    let y = rnd() * 1024;
    g.beginPath();
    g.moveTo(x, y);
    for (let s = 0; s < 3; s++) {
      if (rnd() > 0.5) x += (rnd() - 0.5) * 220;
      else y += (rnd() - 0.5) * 220;
      g.lineTo(x, y);
    }
    g.stroke();
    g.fillStyle = "rgba(52,211,153,0.5)";
    g.beginPath();
    g.arc(x, y, 5, 0, Math.PI * 2);
    g.fill();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function makeLabelTexture(text: string, color: string) {
  const c = document.createElement("canvas");
  c.width = 512;
  c.height = 128;
  const g = c.getContext("2d")!;
  g.clearRect(0, 0, 512, 128);
  g.font = "600 44px monospace";
  g.fillStyle = color;
  g.textBaseline = "middle";
  g.fillText(text, 16, 56);
  g.fillStyle = color;
  g.globalAlpha = 0.6;
  g.fillRect(16, 92, g.measureText(text).width, 3);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function roundRect(
  g: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  g.beginPath();
  g.moveTo(x + r, y);
  g.arcTo(x + w, y, x + w, y + h, r);
  g.arcTo(x + w, y + h, x, y + h, r);
  g.arcTo(x, y + h, x, y, r);
  g.arcTo(x, y, x + w, y, r);
  g.closePath();
  g.fill();
}

/* ---------- star field ---------- */
function Stars() {
  const ref = useRef<THREE.Points>(null);
  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const n = 500;
    const pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const r = 16 + Math.random() * 26;
      const th = Math.random() * Math.PI * 2;
      const ph = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(ph) * Math.cos(th);
      pos[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th);
      pos[i * 3 + 2] = r * Math.cos(ph);
    }
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return g;
  }, []);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.012;
  });
  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial size={0.06} color="#64748b" transparent opacity={0.55} sizeAttenuation />
    </points>
  );
}

/* ---------- the device ---------- */
const LAYER_BASE = { screen: 0.24, bridge: 0.12, native: 0, silicon: -0.12, back: -0.24 };
const SPREAD = 9.5;

function Device({
  progress,
  pointer,
}: {
  progress: MotionValue<number>;
  pointer: React.MutableRefObject<Pointer>;
}) {
  const group = useRef<THREE.Group>(null);
  const screenRef = useRef<THREE.Group>(null);
  const bridgeRef = useRef<THREE.Group>(null);
  const nativeRef = useRef<THREE.Group>(null);
  const siliconRef = useRef<THREE.Group>(null);
  const backRef = useRef<THREE.Group>(null);
  const chipMat = useRef<THREE.MeshStandardMaterial>(null);
  const screenMat = useRef<THREE.MeshStandardMaterial>(null);
  const bridgeMat = useRef<THREE.MeshPhysicalMaterial>(null);
  const particles = useRef<THREE.Mesh[]>([]);
  const labels = useRef<THREE.Sprite[]>([]);
  const { camera } = useThree();

  const screenTex = useMemo(makeScreenTexture, []);
  const nativeTex = useMemo(makeNativeTexture, []);
  const pcbTex = useMemo(makePcbTexture, []);
  const labelTexs = useMemo(
    () => [
      makeLabelTexture("REACT UI", "#22d3ee"),
      makeLabelTexture("JSI BRIDGE", "#a78bfa"),
      makeLabelTexture("SWIFT / KOTLIN", "#fb923c"),
      makeLabelTexture("TF LITE · NPU", "#f472b6"),
    ],
    []
  );

  useFrame((state) => {
    const p = progress.get();
    const t = state.clock.elapsedTime;
    const g = group.current;
    if (!g) return;

    const reassemble = smooth(0.84, 0.965, p);
    const explodeBase = smooth(0.09, 0.28, p) * (1 - reassemble);
    const weights = [
      bump(0.2, 0.11, p),
      bump(0.38, 0.11, p),
      bump(0.56, 0.11, p),
      bump(0.74, 0.11, p),
    ];
    const focus = Math.max(...weights);

    // choreography
    const px = pointer.current.x;
    const py = pointer.current.y;
    g.rotation.y = -0.95 * explodeBase + 0.1 * Math.sin(t * 0.22) + px * 0.14 + p * 0.0;
    g.rotation.x = 0.42 * explodeBase + 0.04 * Math.sin(t * 0.17) + py * 0.1;
    g.position.x = lerp(0, 1.55, smooth(0.06, 0.2, p)) * (1 - smooth(0.86, 0.97, p));
    g.position.y = 0.15 * Math.sin(t * 0.6) * (1 - explodeBase * 0.6) - 0.2;

    camera.position.z = 8.6 - 1.1 * focus;
    camera.lookAt(g.position.x * 0.55, 0, 0);

    // layer separation (staggered cascade)
    const set = (
      ref: React.RefObject<THREE.Group>,
      base: number,
      order: number
    ) => {
      if (!ref.current) return;
      const e = smooth(0.09 + order * 0.02, 0.28 + order * 0.02, p) * (1 - reassemble);
      ref.current.position.z = base * (1 + SPREAD * e);
    };
    set(screenRef, LAYER_BASE.screen, 0);
    set(bridgeRef, LAYER_BASE.bridge, 1);
    set(nativeRef, LAYER_BASE.native, 2);
    set(siliconRef, LAYER_BASE.silicon, 3);
    set(backRef, LAYER_BASE.back, 4);

    // focus scaling per layer
    const scaleFor = (ref: React.RefObject<THREE.Group>, w: number) => {
      if (!ref.current) return;
      const s = 1 + 0.05 * w;
      ref.current.scale.setScalar(s);
    };
    scaleFor(screenRef, weights[0]);
    scaleFor(bridgeRef, weights[1]);
    scaleFor(nativeRef, weights[2]);
    scaleFor(siliconRef, weights[3]);

    if (screenMat.current)
      screenMat.current.emissiveIntensity = 0.75 + 1.3 * weights[0];
    if (bridgeMat.current) {
      bridgeMat.current.opacity = 0.22 + 0.3 * weights[1] + 0.1 * explodeBase;
      bridgeMat.current.emissiveIntensity = 0.3 + 2.2 * weights[1];
    }
    if (chipMat.current)
      chipMat.current.emissiveIntensity =
        0.9 + 2.4 * weights[3] + 0.35 * Math.sin(t * 3.2) * (0.4 + weights[3]);

    // bridge data packets: travel between screen and native z positions
    const zTop = LAYER_BASE.screen * (1 + SPREAD * explodeBase);
    const zBot = LAYER_BASE.native * (1 + SPREAD * explodeBase) - 0.4;
    particles.current.forEach((m, i) => {
      if (!m) return;
      const cyc = (t * (0.25 + (i % 5) * 0.07) + i * 0.13) % 1;
      const dir = i % 2 === 0;
      m.position.z = lerp(zBot, zTop + 0.4, dir ? cyc : 1 - cyc);
      const mat = m.material as THREE.MeshBasicMaterial;
      mat.opacity = explodeBase * (0.25 + 0.75 * weights[1]) * Math.sin(cyc * Math.PI);
    });

    // labels fade with explosion
    labels.current.forEach((s, i) => {
      if (!s) return;
      (s.material as THREE.SpriteMaterial).opacity =
        explodeBase * (0.35 + 0.65 * (weights[i] ?? 0));
    });
  });

  const packetSeeds = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        x: ((i * 37) % 100) / 100 * 1.5 - 0.75,
        y: (((i * 61) % 100) / 100) * 3.4 - 1.7,
      })),
    []
  );

  return (
    <group ref={group} scale={1.12}>
      {/* SCREEN */}
      <group ref={screenRef}>
        <mesh>
          <boxGeometry args={[2.06, 4.36, 0.05]} />
          <meshStandardMaterial
            ref={screenMat}
            map={screenTex}
            emissive="#ffffff"
            emissiveMap={screenTex}
            emissiveIntensity={0.8}
            roughness={0.35}
            metalness={0.1}
          />
        </mesh>
        <sprite
          ref={(el) => { if (el) labels.current[0] = el; }}
          position={[2.4, 1.6, 0]}
          scale={[1.9, 0.48, 1]}
        >
          <spriteMaterial map={labelTexs[0]} transparent opacity={0} depthWrite={false} />
        </sprite>
      </group>

      {/* BRIDGE */}
      <group ref={bridgeRef}>
        <mesh>
          <boxGeometry args={[2.0, 4.28, 0.035]} />
          <meshPhysicalMaterial
            ref={bridgeMat}
            color="#67e8f9"
            emissive="#22d3ee"
            emissiveIntensity={0.3}
            transparent
            opacity={0.22}
            roughness={0.1}
            metalness={0}
          />
        </mesh>
        {/* glowing rim */}
        <mesh>
          <boxGeometry args={[2.04, 4.32, 0.02]} />
          <meshBasicMaterial color="#22d3ee" transparent opacity={0.12} />
        </mesh>
        <sprite
          ref={(el) => { if (el) labels.current[1] = el; }}
          position={[2.5, 0.5, 0]}
          scale={[2.1, 0.5, 1]}
        >
          <spriteMaterial map={labelTexs[1]} transparent opacity={0} depthWrite={false} />
        </sprite>
      </group>

      {/* NATIVE */}
      <group ref={nativeRef}>
        <mesh>
          <boxGeometry args={[2.02, 4.3, 0.06]} />
          <meshStandardMaterial
            map={nativeTex}
            emissiveMap={nativeTex}
            emissive="#ffffff"
            emissiveIntensity={0.25}
            roughness={0.5}
            metalness={0.35}
          />
        </mesh>
        <sprite
          ref={(el) => { if (el) labels.current[2] = el; }}
          position={[2.75, -0.5, 0]}
          scale={[2.5, 0.52, 1]}
        >
          <spriteMaterial map={labelTexs[2]} transparent opacity={0} depthWrite={false} />
        </sprite>
      </group>

      {/* SILICON */}
      <group ref={siliconRef}>
        <mesh>
          <boxGeometry args={[1.98, 4.24, 0.05]} />
          <meshStandardMaterial
            map={pcbTex}
            emissiveMap={pcbTex}
            emissive="#34d399"
            emissiveIntensity={0.35}
            roughness={0.6}
            metalness={0.25}
          />
        </mesh>
        {/* NPU chip */}
        <mesh position={[0, 0.4, 0.05]}>
          <boxGeometry args={[0.66, 0.66, 0.05]} />
          <meshStandardMaterial
            ref={chipMat}
            color="#1c1917"
            emissive="#f472b6"
            emissiveIntensity={1}
            roughness={0.3}
            metalness={0.6}
          />
        </mesh>
        <sprite
          ref={(el) => { if (el) labels.current[3] = el; }}
          position={[2.55, -1.4, 0]}
          scale={[2.2, 0.5, 1]}
        >
          <spriteMaterial map={labelTexs[3]} transparent opacity={0} depthWrite={false} />
        </sprite>
      </group>

      {/* BACK SHELL */}
      <group ref={backRef}>
        <mesh>
          <boxGeometry args={[2.14, 4.44, 0.07]} />
          <meshStandardMaterial color="#171923" roughness={0.35} metalness={0.85} />
        </mesh>
        {/* camera bump */}
        <mesh position={[-0.62, 1.65, -0.055]}>
          <boxGeometry args={[0.62, 0.62, 0.04]} />
          <meshStandardMaterial color="#0d0f16" roughness={0.3} metalness={0.9} />
        </mesh>
      </group>

      {/* data packets across the stack */}
      {packetSeeds.map((s, i) => (
        <mesh
          key={i}
          ref={(el) => { if (el) particles.current[i] = el; }}
          position={[s.x, s.y, 0]}
        >
          <sphereGeometry args={[0.035, 8, 8]} />
          <meshBasicMaterial color={i % 3 === 0 ? "#a78bfa" : "#22d3ee"} transparent opacity={0} />
        </mesh>
      ))}
    </group>
  );
}

/* ---------- exported canvas ---------- */
export default function DeviceScene({
  progress,
  pointer,
}: {
  progress: MotionValue<number>;
  pointer: React.MutableRefObject<Pointer>;
}) {
  return (
    <Canvas
      camera={{ position: [0, 0, 8.6], fov: 38 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[6, 6, 7]} intensity={1.4} color="#e0f2fe" />
      <pointLight position={[-6, -3, -5]} intensity={14} color="#7c3aed" />
      <pointLight position={[4, -4, 6]} intensity={8} color="#0891b2" />
      <Stars />
      <Device progress={progress} pointer={pointer} />
    </Canvas>
  );
}
