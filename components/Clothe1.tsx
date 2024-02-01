
import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    clothes001: THREE.Mesh;
  };
  materials: {
    ["CLOTHES.001"]: THREE.MeshStandardMaterial;
  };
};

export function Clothe1(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/GLB/clothe1.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.clothes001.geometry}
        material={materials["CLOTHES.001"]}
      />
    </group>
  );
}

useGLTF.preload("/GLB/clothe1.glb");
