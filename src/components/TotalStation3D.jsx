import { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Environment, ContactShadows, Html } from '@react-three/drei';
import * as THREE from 'three';

const MODEL_URL = '/models/total-station.glb';

function Model({ scrollProgress }) {
  const { scene } = useGLTF(MODEL_URL);
  const group = useRef();
  const { camera } = useThree();
  const pointer = useRef({ x: 0, y: 0 });

  // Center + normalize the model once, so it always sits nicely on the stage
  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 2.6 / maxDim;

    scene.position.sub(center);
    scene.scale.setScalar(scale);
    scene.position.multiplyScalar(scale);

    scene.traverse((o) => {
      if (o.isMesh) {
        o.castShadow = true;
        o.receiveShadow = true;
        if (o.material) {
          o.material.envMapIntensity = 1.1;
          o.material.needsUpdate = true;
        }
      }
    });
    camera.lookAt(0, 0, 0);
  }, [scene, camera]);

  useEffect(() => {
    const onMove = (e) => {
      pointer.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      pointer.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  useFrame((_, delta) => {
    if (!group.current) return;
    // Scroll drives the turntable; pointer adds a small parallax lean.
    const targetY = scrollProgress.current * Math.PI * 2.2 + pointer.current.x * 0.28;
    const targetX = -0.06 + pointer.current.y * 0.14;

    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetY, 4, delta);
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, targetX, 4, delta);
  });

  return <primitive ref={group} object={scene} />;
}

function Loader() {
  return (
    <Html center>
      <div style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 11,
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: 'rgba(234,243,236,0.5)',
        whiteSpace: 'nowrap',
      }}>
        Memuat instrumen…
      </div>
    </Html>
  );
}

export default function TotalStation3D({ className, style }) {
  const scrollProgress = useRef(0);
  const wrapRef = useRef(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = window.innerHeight + rect.height;
      const seen = window.innerHeight - rect.top;
      scrollProgress.current = Math.min(1, Math.max(0, seen / total));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div ref={wrapRef} className={className} style={{ position: 'relative', ...style }}>
      <Canvas
        shadows
        dpr={[1, 1.75]}
        camera={{ position: [0, 0.4, 6.2], fov: 32 }}
        gl={{ antialias: true, alpha: true }}
        frameloop={reduced ? 'demand' : 'always'}
        resize={{ scroll: false, debounce: { scroll: 0, resize: 60 } }}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      >
        {/* Studio lighting: soft key from upper-left, green rim from lower-right */}
        <ambientLight intensity={0.35} />
        <directionalLight
          position={[-4, 5, 4]}
          intensity={2.1}
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-bias={-0.0004}
        />
        <directionalLight position={[5, -1, -3]} intensity={0.9} color="#8fe6ab" />
        <directionalLight position={[0, 2, -5]} intensity={0.5} color="#cfe8d8" />

        <Suspense fallback={<Loader />}>
          <Model scrollProgress={scrollProgress} />
          <Environment preset="city" />
          <ContactShadows
            position={[0, -1.45, 0]}
            opacity={0.55}
            scale={7}
            blur={2.6}
            far={3}
            color="#020805"
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload(MODEL_URL);
