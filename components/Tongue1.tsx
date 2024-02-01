import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    tongue001: THREE.Mesh;
  };
  materials: {
    ["SKIN FACE BODY LIGHT"]: THREE.MeshStandardMaterial;
  };
};

export function Tongue1(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/GLB/tongue1.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tongue001.geometry}
        material={materials["SKIN FACE BODY LIGHT"]}
      />
    </group>
  );
}

useGLTF.preload("/GLB/tongue1.glb");
