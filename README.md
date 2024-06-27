## 필요라이브러리 설치

npx create-next-app@latest ./
npm i three @react-three/drei @react-three/fiber

---

## React Three Fiber

https://docs.pmnd.rs/react-three-fiber/getting-started/introduction

1. React 친화적
2. .jsx 문법 사용 가능
3. 같은 기능 구현할 때, 작성할 코드양이 비교적 적음

---

## gltfjsx

https://github.com/pmndrs/gltfjsx
glb파일을 jsx파일로 만들어주는 라이브러리

사용법 :: npx gltfjsx public/dancer.glb -o src/components/Dancer.jsx

## postprocessing

https://docs.pmnd.rs/react-postprocessing/effect-composer

npm i @react-three/postprocessing
