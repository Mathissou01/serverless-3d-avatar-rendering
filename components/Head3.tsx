/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    head003: THREE.Mesh;
  };
  materials: {
    ["SKIN FACE BODY LIGHT"]: THREE.MeshStandardMaterial;
  };
};

export function Head3(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/GLB/head3.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.head003.geometry}
        material={materials["SKIN FACE BODY LIGHT"]}
      />
    </group>
  );
}

useGLTF.preload("/GLB/head3.glb");
