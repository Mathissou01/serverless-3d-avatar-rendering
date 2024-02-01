
import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    necklace002: THREE.Mesh;
  };
  materials: {
    ["NECKLACE.002"]: THREE.MeshStandardMaterial;
  };
};

export function Necklace2(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/GLB/necklace2.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.necklace002.geometry}
        material={materials["NECKLACE.002"]}
      />
    </group>
  );
}

useGLTF.preload("/GLB/necklace2.glb");
