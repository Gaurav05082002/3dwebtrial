import {Suspense, useRef} from 'react'
import {Canvas , useFrame} from '@react-three/fiber'
import {OrbitControls, useGLTF} from '@react-three/drei'
import './index.css';



function Model(props) {
  const { nodes, materials } = useGLTF('/astronaut.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[82.24, -322.9, -102]} scale={1}>
        <mesh geometry={nodes.node_id31.geometry} material={materials['48']} position={[-0.01, -256.03, 246.31]} scale={2.52} />
        <mesh geometry={nodes.node_id33.geometry} material={materials['49']} position={[-0.01, -256.03, 246.31]} scale={2.52} />
      </group>
    </group>
  )
}

// useGLTF.preload('/astronaut.glb')


function App() {
  return (
    <div className="wrapper">
      <Canvas  camera={{ fov:70, position: [10,10,65]}}>
        <Suspense fallback={null}>
          <ambientLight />
          <directionalLight intensity={2} position={[0,0,50]} />
          <Model />
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />

        </Suspense>

      </Canvas>

    </div>
  );
}

export default App;
