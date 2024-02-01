import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    clothes004: THREE.Mesh;
  };
  materials: {
    ["CLOTHES.004"]: THREE.MeshStandardMaterial;
  };
};

export function Clothe4(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/GLB/clothe4.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.clothes004.geometry}
        material={materials["CLOTHES.004"]}
      />
    </group>
  );
}

useGLTF.preload("/GLB/clothe4.glb");
