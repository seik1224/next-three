import {
  Box,
  Circle,
  Cone,
  Cylinder,
  Plane,
  Sphere,
  Torus,
  TorusKnot,
} from "@react-three/drei";
import * as THREE from "three";

export const Meshes = () => {
  return (
    <>
      {/* Plane형태를 구현하고자 할 때 bufferGeometry를 활용하여 만들어진 컴포넌트 / 벽을 꼭 90도로 회전해줘야 바닥으로 쓸수있음 / receiveShadow 해당 메쉬가 다른 객체로부터 그림자를 받아들일 수 있도록 설정*/}
      <Plane args={[40, 40]} rotation-x={-Math.PI / 2} receiveShadow>
        {/* meshStandardMaterial이어야 그림자 받을 수 있음 */}
        <meshStandardMaterial />
      </Plane>

      {/* 매번 mesh안에 box와 material을 선언하기 번거로우므로 drei에서 편리하게 제공 */}
      <mesh position={[0, 0, 0]}>
        {/* 3D 객체를 정의하는 메쉬 : position값(x,y,z)을 정할 수 있음 */}
        <boxGeometry args={[1, 1, 1]} /> {/* 1x1x1 크기의 박스 지오메트리 */}
        <meshBasicMaterial color={0xff0000} />{" "}
        {/* // 빨간색 표준 재질(material). 이 재질은 물리 기반 렌더링(PBR)을 지원하여, 실제 세계의 빛과 재질의 상호작용을 모방 */}
      </mesh>

      {/* Box형태를 구현하고자 할 때 bufferGeometry를 활용하여 만들어진 컴포넌트, 기본 material은 meshBasicMaterial */}
      <Box
        args={[1, 2, 1]} // Box의 크기를 가로 1, 세로 2, 깊이 1로 설정
        material-color={0x00ff00} // 재질의 색상을 녹색으로 설정
        position={[2, 1, 0]} // Box의 위치를 x=2, y=1, z=0으로 설정
        castShadow // Box가 그림자를 생성하도록 설정
        position-y={0.5} // Box의 y축 위치를 추가로 0.5만큼 올림
      />

      <Box args={[1, 1, 1]} castShadow position-x={-2} position-y={0.5}>
        <meshStandardMaterial color={0xffff00} />
      </Box>

      {/* Sphere */}
      <Sphere args={[1]} position={[0, 1, 3]} material-color={0xffff00} />

      {/* Circle */}
      {/* 아래 두 코드는 동일하다 */}
      <Circle
        args={[1]}
        position={[0, 1, -3]}
        material-color={"violet"}
        material-side={THREE.DoubleSide}
      />
      {/* <Circle
          args={[1]}
          position={[0, 1, -3]}
          // material-color={"violet"}
          // material-side={THREE.DoubleSide}
        >
          <meshBasicMaterial color={"violet"} side={THREE.DoubleSide} />
        </Circle> */}

      {/* Cone */}
      <Cone args={[1, 2]} position={[3, 1, 3]} material-color={"brown"} />

      {/* Cylinder */}
      <Cylinder
        args={[2, 1, 2]}
        position={[3, 1, -3]}
        material-color={"pink"}
      />

      {/* Torus */}
      <Torus
        args={[1, 0.2]}
        position={[-3, 1.2, -3]}
        material-color={"hotpink"}
      />

      {/* TorusKnot */}
      <TorusKnot
        args={[1, 0.2, 128, 128, 2, 3]}
        position={[-3, 1.6, 0]}
        material-color={"teal"}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          color={0xff0000} // 기본 색상: 빨간색
          roughness={0.5} // 거칠기: 0.5
          metalness={1} // 금속성: 1
        />
      </TorusKnot>
      <TorusKnot
        args={[1, 0.2]}
        position={[-7, 1.6, 0]}
        material-color={"teal"}
        castShadow
        receiveShadow
      >
        <meshLambertMaterial
          color={0x0abff0} // 기본 색상: 청록색
          emissive={0xff0000} // 발광 색상: 빨간색
          emissiveIntensity={0.5} // 발광 강도: 0.5
        />
      </TorusKnot>
      <TorusKnot
        args={[1, 0.2]}
        position={[-11, 1.6, 0]}
        material-color={"teal"}
        castShadow
        receiveShadow
      >
        <meshPhongMaterial
          color={0xff0000} // 기본 색상: 빨간색
          emissive={0x00ff00} // 발광 색상: 초록색
          emissiveIntensity={0.2} // 발광 강도: 0.2
          specular={0x0000ff} // 반사광 색상: 파란색
          shininess={100} // 광택 정도: 100
        />
      </TorusKnot>
      <TorusKnot
        args={[1, 0.2]}
        position={[-15, 1.6, 0]}
        material-color={"teal"}
        castShadow
        receiveShadow
      >
        {/* 투명도가 0.5인 깊이 재질을 사용 */}
        <meshDepthMaterial opacity={0.5} />
      </TorusKnot>
    </>
  );
};
