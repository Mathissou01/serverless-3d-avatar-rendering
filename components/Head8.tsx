
import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    head008: THREE.Mesh;
  };
  materials: {
    ["SKIN FACE BODY LIGHT"]: THREE.MeshStandardMaterial;
  };
};

export function Head8(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/GLB/head8.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.head008.geometry}
        material={materials["SKIN FACE BODY LIGHT"]}
      />
    </group>
  );
}

useGLTF.preload("/GLB/head8.glb");
