import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    clothes006: THREE.Mesh;
  };
  materials: {
    ["CLOTHES.006"]: THREE.MeshStandardMaterial;
  };
};

export function Clothe6(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/GLB/clothe6.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.clothes006.geometry}
        material={materials["CLOTHES.006"]}
      />
    </group>
  );
}

useGLTF.preload("/GLB/clothe6.glb");
