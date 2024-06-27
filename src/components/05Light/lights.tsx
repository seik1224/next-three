"use client";
import { SpotLight, useHelper } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export const Lights = () => {
  // https://velog.io/@9rganizedchaos/Three.js-journey-%EA%B0%95%EC%9D%98%EB%85%B8%ED%8A%B8-14

  // lightHelper(빛의 위치가 보임) 선언을 도와주는 Hook
  // DirectionalLight Helper

  const lightRef = useRef<THREE.DirectionalLight>(null);
  useHelper(
    lightRef as React.MutableRefObject<THREE.DirectionalLight>,
    THREE.DirectionalLightHelper,
    5,
    0xffff00
  );

  // PointLight Helper
  /*
  const lightRef = useRef<THREE.PointLight>(null);
  useHelper(
    lightRef as React.MutableRefObject<THREE.PointLight>,
    THREE.PointLightHelper,
    5,
    0xffff00
  );
  */

  // HemisphereLight Helper
  /*
  const lightRef = useRef<THREE.HemisphereLight>(null);
  useHelper(
    lightRef as React.MutableRefObject<THREE.HemisphereLight>,
    THREE.HemisphereLightHelper,
    1,
    0xffffff
  );
  */

  // SpotLight Helper
  /*
  const lightRef = useRef<THREE.SpotLight>(null);
  useHelper(
    lightRef as React.MutableRefObject<THREE.SpotLight>,
    THREE.SpotLightHelper,
    0xffffff
  );
  */

  /* Drei의 SpotLight를 제어하기 위한 ref */
  /*
  const targetRef = useRef(null); // spotLight의 lookAt을 컨트롤하기 위한 targetRef
  const [target, setTarget] = useState();
  useEffect(() => {
    if (targetRef.current) setTarget(targetRef.current);
  }, []);
  */

  return (
    <>
      {/* AmbientLight는 scene 내의 모든 object들에 전 방향에서 조명을 비춰준다. */}
      {/* <ambientLight args={[0xffffff, 5]} /> */}

      {/* directionalLight 및 간단한 그림자 설정 */}
      <directionalLight
        ref={lightRef}
        args={[0xffffff, 5]} // 광원의 색상(흰색)과 강도(5)
        position={[4, 4, 4]} // 광원의 위치(x, y, z)
        castShadow // 그림자 생성 활성화
        shadow-camera-left={-25} // 그림자 카메라의 왼쪽 경계 -1하면 그림자 작아짐
        shadow-camera-right={25} // 그림자 카메라의 오른쪽 경계
        shadow-camera-top={25} // 그림자 카메라의 상단 경계
        shadow-camera-bottom={-25} // 그림자 카메라의 하단 경계
        shadow-camera-near={0.1} // 그림자 카메라의 가까운 클리핑 평면
        shadow-camera-far={1000} // 그림자 카메라의 먼 클리핑 평면
        shadow-mapSize-width={4096} // 그림자 맵의 너비 8192는 그림자 좋아짐 512 안좋아짐
        shadow-mapSize-height={4096} // 그림자 맵의 높이 8192는 그림자 좋아짐 512 안좋아짐
      />

      {/* 모든 방향으로 균일하게 퍼지는 빛. */}
      {/* <pointLight
        ref={lightRef}
        args={[0xffffff, 10, 10, 1]}
        position-y={2}
        castShadow
      /> */}

      {/* HemisphereLight는 AmbientLight와 비슷하지만, 
      두 가지 색상을 매개변수로 받는다. 
      첫 번째 매개변수는 하늘을 향하는 면을 비추는 색상, 
      두 번째 매개변수는 바닥을 향하는 면에 비춰지는 색상이다. */}
      {/* <hemisphereLight
        ref={lightRef}
        args={[0x0000ff, 0xf00ff0, 5]}
        position-y={2}
      /> */}

      {/* 촬영장의 직사각형 조명과 비슷하다. 
      방향성조명과 확산조명의 중간 형태라고 볼 수 있다. 
      세 번째 매개변수는 직사각형의 너비, 네 번째 매개변수는 높이이다. 
      Helper가 없음!
      */}
      {/* <rectAreaLight
        args={[0xffffff, 5, 4, 4]}
        position-y={1}
        rotation-x={-Math.PI / 2}
        // rotation-x={Math.PI / 2}
      /> */}

      {/* 손전등. 점에서 시작해 원뿔모양으로 퍼져나간다.
        매개변수는 다음과 같다. (color, intensity, distance, angle, penumbram 빛의 경계그림자 매끄러움, decay 빛이 갈수록 희미해지는 정도) */}
      {/* <spotLight
        ref={lightRef}
        args={[0xffffff, 10, 100, Math.PI / 4, 1, 0.5]}
        castShadow
        position={[3, 3, 3]}
      /> */}

      {/* SpotLight는 drei에서 제공해주는 별도의 SpotLight가 있으면 기능이 더 추가됨 */}
      {/* <SpotLight
        color={0xffffff}
        intensity={10}
        distance={100}
        angle={Math.PI / 4}
        penumbra={1} // 빛의 경계그림자 매끄러움
        decay={0.5} // 빛이 갈수록 희미해지는 정도
        anglePower={100} // 빛의 집중 정도
        attenuation={5} // 빛의 세기가 광원으로 부터의 거리가 멀어질수록 빨리 감소하는 정도
        radiusTop={1} // 조명의 상단 반지름
        radiusBottom={10} // 조명의 하단 반지름
        opacity={1} // 불투명도
        volumetric // 조명을 좀 더 사실적으로 만들어줄지 여부(체적조명 사용 여부)
        debug // 디버그 모드 활성화 여부
        position={[3, 3, 3]}
        target={target}
        // castShadow={false}
      /> */}
      {/* 따로 Helper를 구현하려면 object3D를 불러와야함 */}
      {/* <object3D ref={targetRef} position={[-2, 2, 2]} /> */}
    </>
  );
};
