import {
  FirstPersonControls,
  FlyControls,
  OrbitControls,
  PointerLockControls,
  TrackballControls,
} from "@react-three/drei";

export const Controls = () => {
  return (
    <>
      {/* Drei로 컴포넌트화 된 OrbitControls */}
      <OrbitControls
        enableDamping // 기본적으로 true : 속과 마찰의 공식을 활용해 애니메이션을 스무스하게 만들어주는 역할을 하는 속성
        dampingFactor={0.03} // 댐핑의 강도
        enableZoom // 기본적으로 true : 스크롤 zoom막음
        enablePan // 기본적으로 true : 우클릭 카메라 움직임막음
        // autoRotate // 자동회전
        // autoRotateSpeed={10} // 자동회전 스피드
        // maxPolarAngle={Math.PI / 2} // 아래 Math.PI / 2도까지만 카메라 회전
        // minPolarAngle={Math.PI / 4} // // 위로 Math.PI / 4도까지만 카메라 회전
        maxAzimuthAngle={Math.PI / 2} // 수평
        minAzimuthAngle={-Math.PI / 2} // 수평
      />

      {/* 새가 날아다니는듯한 뷰 */}
      {/* <FlyControls
        movementSpeed={1}
        rollSpeed={Math.PI / 20} 
        autoForward={false} // 자동으로 나아감
      /> */}

      {/* 1인칭 뷰 wasd로 움직임 */}
      {/* <FirstPersonControls
        lookSpeed={0.1}
        movementSpeed={1}
        lookVertical={false} // 수직으로 안움직이게
      /> */}

      {/* FPS 저격총 클릭ESC */}
      {/* <PointerLockControls /> */}

      {/* OrbitControls와 비슷하지만 특정타겟을 중심으로 */}
      {/* <TrackballControls
        rotateSpeed={2}
        zoomSpeed={1.5}
        panSpeed={0.5}
        noRotate={false}
        noZoom={false}
        noPan={false}
        staticMoving={false} // 댐핑이 일어나지 않게 true
        dynamicDampingFactor={0.05}
        // target={[10, 0, 0]}
      /> */}
    </>
  );
};
