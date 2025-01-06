/* eslint-disable no-unused-vars */
// /* eslint-disable react/no-unknown-property */
// import { useState, useRef, Suspense } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Points, PointMaterial, Preload } from "@react-three/drei";
// import * as random from "maath/random/dist/maath-random.esm";

// const Stars = (props) => {
//   const ref = useRef();
//   const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

//   useFrame((state, delta) => {
//     ref.current.rotation.x -= delta / 10;
//     ref.current.rotation.y -= delta / 15;
//   });

//   return (
//     <group rotation={[0, 0, Math.PI / 4]}>
//       <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
//         <PointMaterial
//           transparent
//           color='#f272c8'
//           size={0.002}
//           sizeAttenuation={true}
//           depthWrite={false}
//         />
//       </Points>
//     </group>
//   );
// };

// const StarsCanvas = () => {
//   return (
//     <div className='w-full h-auto absolute inset-0 z-[-1]'>
//       <Canvas camera={{ position: [0, 0, 1] }}>
//         <Suspense fallback={null}>
//           <Stars />
//         </Suspense>

//         <Preload all />
//       </Canvas>
//     </div>
//   );
// };

// export default StarsCanvas;


import React from "react";

const StarryBackground = () => {
  const createStars = () => {
    const stars = [];
    for (let i = 0; i < 100; i++) {
      const style = {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      };
      stars.push(
        <div
          className="w-1 h-1 bg-white rounded-full absolute animate-twinkle"
          style={style}
          key={i}
        />
      );
    }
    return stars;
  };

  return (
    <div className="fixed inset-0 bg-black z-[-1]">
      {createStars()}
    </div>
  );
};

export default StarryBackground;