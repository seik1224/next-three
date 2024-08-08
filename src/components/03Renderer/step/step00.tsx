"use client";
import { Canvas, useThree } from "@react-three/fiber";
import { Color } from "three";

export default function MainCanvas() {
  return (
    <>
      {/* https://velog.io/@his/Three.js-R3F-Camera */}
      <Canvas
        gl={{ antialias: true }} // WebGL 렌더러의 안티앨리어싱을 활성화하여 그래픽의 가장자리를 부드럽게 처리 -> 렌더러에 대응 : 끝부분 우글우글 거림
        // shadows // soft와 동일
        // shadows={{ enabled: true, type: THREE.PCFSoftShadowMap }} // soft와 동일
        // shadows={"soft"} // 그림자
        // shadows={"basic"}
        shadows={"percentage"}
        camera={{
          fov: 60, // perspective camera의 시야각 설정
          aspect: window.innerWidth / window.innerHeight, // 카메라 비율 설정
          near: 0.1, // 카메라의 근접 클리핑 평면 설정
          far: 100, // 카메라의 원거리 클리핑 평면 설정
          position: [5, 5, 5], // 카메라의 초기 위치 설정
        }}
        // 매번 리렌더되므로, 지양해야할 패턴
        scene={{
          background: new Color(0x000000), // 배경색을 검정색으로 설정
        }}
      >
        {/* mesh position 이동 */}
        <mesh position={[1, 0, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color={0xff0000} />
        </mesh>
      </Canvas>
    </>
  );
}
