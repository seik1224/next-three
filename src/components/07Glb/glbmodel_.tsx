"use client";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export const GLBModel = () => {
  const ref = useRef<THREE.Object3D>(null);

  /*
  React Three Fiber(R3F)에서 제공하는 훅으로, 현재 렌더링 상태를 가져오는 데 사용됩니다. 이 훅을 통해 카메라, 씬, 렌더러 등 Three.js의 핵심 객체들에 접근할 수 있습니다.    
  */
  //   const three = useThree();
  //   console.log("three", three); // useFrame의 state와 동일

  //   const gltf = useGLTF("/dancer.glb");
  //   console.log(gltf);
  const { scene, animations } = useGLTF("/dancer.glb");
  console.log(scene);

  /*
    @react-three/drei 라이브러리에서 제공하는 기능으로, GLTF 모델의 애니메이션을 쉽게 제어할 수 있게 해줍니다. 이 훅은 GLTF 파일에서 추출한 애니메이션 클립을 관리하고, 이를 Three.js 객체에 적용할 수 있는 다양한 메서드를 제공합니다.
    useAnimations 훅은 두 개의 인자를 받습니다:
        1. animations: GLTF 파일에서 추출한 애니메이션 클립 배열.
        2. ref: 애니메이션을 적용할 Three.js 객체의 참조.
    useAnimations 훅은 애니메이션을 제어할 수 있는 객체를 반환합니다. 이 객체는 다음과 같은 속성을 포함합니다:
        actions: 애니메이션 클립을 재생, 중지, 일시 정지 등의 작업을 할 수 있는 메서드들이 포함된 객체.
        mixer: 애니메이션 믹서 객체로, 애니메이션의 업데이트와 관련된 다양한 메서드를 제공합니다.
  */
  // const anim = useAnimations(animations, ref);
  // console.log("anim", anim);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    /*
        traverse는 Three.js에서 제공하는 메서드로, 씬 그래프(scene graph)를 순회(traverse)하면서 각 객체에 대해 특정 작업을 수행할 수 있게 해줍니다. 이 메서드는 씬의 모든 자식 객체를 재귀적으로 방문합니다.
        예를 들어, scene.traverse를 사용하여 씬 내의 모든 객체를 순회하면서 각 객체에 대해 그림자 설정을 할 수 있습니다.
    */
    scene.traverse((object: THREE.Object3D) => {
      if ((object as THREE.Mesh).isMesh) {
        (object as THREE.Mesh).castShadow = true;
        (object as THREE.Mesh).receiveShadow = true;
      }
    });
    if (actions && actions["wave"]) {
      actions["wave"].play();
    }
  }, [scene]);

  // R3F에서 제공하는 Hook으로, 매 프레임마다 호출됩니다. 이 Hook을 사용하여 애니메이션이나 프레임 단위의 업데이트를 수행할 수 있습니다.
  useFrame((state, delta) => {
    // console.log("state", state); // state: 현재 렌더링 상태를 나타내며, 카메라, 씬, gl 등의 정보를 포함합니다.
    // console.log("delta", delta); // delta: 이전 프레임과 현재 프레임 사이의 시간 간격을 나타냅니다.
    if (ref.current) {
      ref.current.rotation.y += 0.02;
    }
  });

  return (
    <>
      {/*  React Three Fiber(R3F)에서 제공하는 컴포넌트로, Three.js 객체를 직접 렌더링할 수 있게 해줍니다. object 속성에 Three.js 객체를 전달하면 해당 객체가 씬에 추가됩니다. */}
      <primitive
        ref={ref}
        scale={0.01} // 객체 크기
        object={scene} // 불러올 객체 전달
        position-y={0.8} // 위치
      />
    </>
  );
};
