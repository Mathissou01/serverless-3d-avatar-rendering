
import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    head011: THREE.Mesh;
  };
  materials: {
    ["SKIN FACE BODY LIGHT"]: THREE.MeshStandardMaterial;
  };
};

export function Head11(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/GLB/head11.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.head011.geometry}
        material={materials["SKIN FACE BODY LIGHT"]}
      />
    </group>
  );
}

useGLTF.preload("/GLB/head11.glb");
