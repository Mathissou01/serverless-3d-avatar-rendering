import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    clothes002: THREE.Mesh;
  };
  materials: {
    ["CLOTHES.002"]: THREE.MeshStandardMaterial;
  };
};

export function Clothe2(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/GLB/clothe2.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.clothes002.geometry}
        material={materials["CLOTHES.002"]}
      />
    </group>
  );
}

useGLTF.preload("/GLB/clothe2.glb");
