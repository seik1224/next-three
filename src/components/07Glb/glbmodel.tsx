"use client";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export const GLBModel = () => {
  const { scene, animations } = useGLTF("/dancer.glb");
  const ref = useRef<THREE.Object3D>(null);
  const [currentAnimation, setCurrentAnimation] = useState("wave");

  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    scene.traverse((object: THREE.Object3D) => {
      object.castShadow = true;
      object.receiveShadow = true;
    });
  }, [actions, scene]);

  useEffect(() => {
    actions[currentAnimation]?.fadeIn(0.5).play();
    return () => {
      actions[currentAnimation]?.fadeOut(0.5).stop();
    };
  }, [actions, currentAnimation]);
  return (
    <>
      {/* R3F에서는 간단한 애니메이션에 레이캐스터를 사용하지 않고 표현가능! */}
      {/* <primitive> 태그는 Three.js 객체를 R3F 장면에 직접 추가하는 데 사용 */}
      <primitive
        onClick={() => {
          setCurrentAnimation((prev) => {
            if (prev === "wave") return "windmill";
            return "wave";
          });
        }}
        onPointerUp={() => {
          console.log("onPointerUp");
        }}
        onPointerDown={() => {
          console.log("onPointerDown");
        }}
        // 성능문제가 발생할 수 있음
        //   onPointerMove={() => {
        //     console.log("onPointerMove");
        //   }}

        // 그 외 다른 이벤트도 사용 가능함
        ref={ref}
        scale={0.01}
        object={scene}
        position-y={0.8}
      />
    </>
  );
};
