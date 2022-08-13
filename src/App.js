import {Suspense, useRef  } from 'react'
import {Canvas , useFrame } from '@react-three/fiber'
import {OrbitControls, useGLTF , useAnimations} from '@react-three/drei'
import './index.css';



function Model(props) {
  const { nodes, materials } = useGLTF('/Mercedesn.glb')
  return (
    <group  {...props} dispose={null}>
      <mesh geometry={nodes.Plane_1.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Plane_2.geometry} material={materials['Material.002']} />
      <mesh geometry={nodes.Plane_3.geometry} material={materials.Material} />
      <mesh geometry={nodes.Plane_4.geometry} material={materials['Material.003']} />
      <mesh geometry={nodes.Plane_5.geometry} material={materials['Material.004']} />
      <mesh geometry={nodes.Plane_6.geometry} material={materials['Material.005']} />
      <mesh geometry={nodes.Plane_7.geometry} material={materials['Material.006']} />
      <mesh geometry={nodes.Plane_8.geometry} material={materials['Material.007']} />
      <group position={[0, -0.01, 0]}>
        <mesh geometry={nodes.Cylinder001_1.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Cylinder001_2.geometry} material={materials['Material.004']} />
      </group>
      <group position={[0, -0.01, 0]}>
        <mesh geometry={nodes.Cylinder003.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Cylinder003_1.geometry} material={materials['Material.004']} />
      </group>
      <mesh geometry={nodes.Circle_1.geometry} material={materials['Material.004']} />
      <mesh geometry={nodes.Circle_2.geometry} material={materials['Material.003']} />
      <mesh geometry={nodes.Plane004_1.geometry} material={materials['Material.003']} />
      <mesh geometry={nodes.Plane004_2.geometry} material={materials['Material.004']} />
      <mesh geometry={nodes.Plane004_3.geometry} material={materials['Material.006']} />
      <mesh geometry={nodes.Cube.geometry} material={materials['Material.008']} position={[0, 0.42, -0.09]} rotation={[0.46, 0, 0]} scale={0.04} />
      <mesh geometry={nodes.Plane003_1.geometry} material={materials['Material.004']} />
      <mesh geometry={nodes.Plane003_2.geometry} material={materials['Material.006']} />
      <mesh geometry={nodes.Plane003_3.geometry} material={materials['Material.009']} />
      <mesh geometry={nodes.Circle001.geometry} material={materials['Material.006']} position={[0.29, 0.63, 0.07]} />
      <mesh geometry={nodes.Circle002.geometry} material={materials['Material.006']} position={[0.29, 0.53, -0.03]} rotation={[-0.16, 0, 0]} />
      <group position={[0, 0.41, 1.58]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Torus003_1.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.Torus003_2.geometry} material={materials['Material.003']} />
      </group>
      <mesh geometry={nodes.Torus.geometry} material={materials['Material.006']} position={[0.29, 0.54, -0.08]} rotation={[1.82, 0, -Math.PI]} scale={0.19} />
      <mesh geometry={nodes.Torus003.geometry} material={materials['Material.006']} position={[0.29, 0.54, -0.08]} rotation={[1.82, 0, -Math.PI]} scale={0.19} />
      <mesh geometry={nodes.Torus002.geometry} material={materials['Material.001']} position={[0.29, 0.54, -0.09]} rotation={[1.82, 0, -Math.PI]} scale={0.19} />
      <group position={[0.29, 0.54, -0.08]} rotation={[1.82, 0, -Math.PI]} scale={0.19}>
        <mesh geometry={nodes.Torus001_1.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Torus001_2.geometry} material={materials['Material.003']} />
      </group>
      <mesh geometry={nodes.Cube003.geometry} material={materials['Material.007']} />
      <mesh geometry={nodes.Cube003_1.geometry} material={materials['Material.003']} />
      <mesh geometry={nodes.Torus006.geometry} material={materials['Material.001']} position={[0, 0.63, -1.52]} rotation={[1.81, 0, -Math.PI]} scale={0.19} />
    </group>
  )
}

// useGLTF.preload('/astronaut.glb')


function App() {
  return (
    <div className="wrapper">
      <Canvas  camera={{ fov:100, position: [5,5,-5]}}>
        <Suspense fallback={null}>
          <ambientLight />
          <directionalLight intensity={2} position={[1,1,1]} />
          <Model />
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />

        </Suspense>

      </Canvas>

    </div>
  );
}

export default App;
