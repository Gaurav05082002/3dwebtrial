/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Mercedesn2.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[4.45, 0.05, 0.95]}>
        <mesh geometry={nodes.Plane_1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Plane_2.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Plane_3.geometry} material={materials.Material} />
        <mesh geometry={nodes.Plane_4.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Plane_5.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Plane_6.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Plane_7.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Plane_8.geometry} material={materials['Material.007']} />
      </group>
      <group position={[4.45, 0.05, 0.58]}>
        <mesh geometry={nodes.Cylinder001_1.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Cylinder001_2.geometry} material={materials['Material.004']} />
      </group>
      <group position={[4.45, 0.05, 0.58]}>
        <mesh geometry={nodes.Cylinder003.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Cylinder003_1.geometry} material={materials['Material.004']} />
      </group>
      <group position={[4.45, 0.05, 0.58]}>
        <mesh geometry={nodes.Circle_1.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Circle_2.geometry} material={materials['Material.003']} />
      </group>
      <group position={[4.45, 0.05, 0.58]}>
        <mesh geometry={nodes.Plane004_1.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Plane004_2.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Plane004_3.geometry} material={materials['Material.006']} />
      </group>
      <mesh geometry={nodes.Cube.geometry} material={materials['Material.008']} position={[4.45, 0.47, 0.49]} rotation={[0.46, 0, 0]} scale={0.04} />
      <group position={[4.45, 0.05, 0.58]}>
        <mesh geometry={nodes.Plane003_1.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Plane003_2.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Plane003_3.geometry} material={materials['Material.009']} />
      </group>
      <mesh geometry={nodes.Circle001.geometry} material={materials['Material.006']} position={[4.75, 0.68, 0.65]} />
      <mesh geometry={nodes.Circle002.geometry} material={materials['Material.006']} position={[4.75, 0.58, 0.55]} rotation={[-0.16, 0, 0]} />
      <group position={[4.45, 0.47, 2.16]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Torus003_1.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.Torus003_2.geometry} material={materials['Material.003']} />
      </group>
      <mesh geometry={nodes.Torus.geometry} material={materials['Material.006']} position={[4.75, 0.59, 0.5]} rotation={[1.82, 0, -Math.PI]} scale={0.19} />
      <mesh geometry={nodes.Torus003.geometry} material={materials['Material.006']} position={[4.75, 0.59, 0.5]} rotation={[1.82, 0, -Math.PI]} scale={0.19} />
      <mesh geometry={nodes.Torus002.geometry} material={materials['Material.001']} position={[4.75, 0.59, 0.49]} rotation={[1.82, 0, -Math.PI]} scale={0.19} />
      <group position={[4.75, 0.59, 0.5]} rotation={[1.82, 0, -Math.PI]} scale={0.19}>
        <mesh geometry={nodes.Torus001_1.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Torus001_2.geometry} material={materials['Material.003']} />
      </group>
      <group position={[4.45, 0.05, 0.58]}>
        <mesh geometry={nodes.Cube003.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Cube003_1.geometry} material={materials['Material.003']} />
      </group>
      <mesh geometry={nodes.Torus006.geometry} material={materials['Material.001']} position={[4.45, 0.68, -0.94]} rotation={[1.81, 0, -Math.PI]} scale={0.19} />
    </group>
  )
}

useGLTF.preload('/Mercedesn2.glb')
