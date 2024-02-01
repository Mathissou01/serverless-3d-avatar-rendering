import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    clothes003: THREE.Mesh;
  };
  materials: {
    ["CLOTHES.003"]: THREE.MeshStandardMaterial;
  };
};

export function Clothe3(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/GLB/clothe3.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.clothes003.geometry}
        material={materials["CLOTHES.003"]}
      />
    </group>
  );
}

useGLTF.preload("/GLB/clothe3.glb");
