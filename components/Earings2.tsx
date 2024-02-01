
import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    earrings002: THREE.Mesh;
  };
  materials: {
    ["GOLD.001"]: THREE.MeshStandardMaterial;
  };
};

export function Earings2(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/GLB/earings2.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.earrings002.geometry}
        material={materials["GOLD.001"]}
      />
    </group>
  );
}

useGLTF.preload("/GLB/earings2.glb");
