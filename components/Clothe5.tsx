import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    clothes005: THREE.Mesh;
  };
  materials: {
    ["CLOTHES.005"]: THREE.MeshStandardMaterial;
  };
};

export function Clothe5(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/GLB/clothe5.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.clothes005.geometry}
        material={materials["CLOTHES.005"]}
      />
    </group>
  );
}

useGLTF.preload("/GLB/clothe5.glb");
