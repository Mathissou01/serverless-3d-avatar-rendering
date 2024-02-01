
import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    glass002: THREE.Mesh;
    frame002: THREE.Mesh;
  };
  materials: {
    ["GLASS.002"]: THREE.MeshPhysicalMaterial;
    ["FRAME.002"]: THREE.MeshStandardMaterial;
  };
};

export function Glass2(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/GLB/glass2.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.glass002.geometry}
        material={materials["GLASS.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.frame002.geometry}
        material={materials["FRAME.002"]}
      />
    </group>
  );
}

useGLTF.preload("/GLB/glass2.glb");
