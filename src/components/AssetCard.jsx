import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment } from '@react-three/drei'

// function Model3D() {
//   const gltf = useGLTF('public/sphere/scene.gltf')
//   const modelRef = useRef()

//   useFrame((state) => {
//     const time = state.clock.getElapsedTime()
//     modelRef.current.rotation.y = Math.sin(time / 2) * 0.1
//   })

//   return <primitive object={gltf.scene} ref={modelRef} scale={[8, 8, 8]} />
// }

function Model3D({ url }) {
  const gltf = useGLTF(url)
  return <primitive object={gltf.scene} scale={[1, 1, 1]} />
}

const AssetCard = ({ asset }) => {
  return (
    <div className='bg-[var(--color-primary)] w-[300px] rounded-2xl p-0 border-solid border-2 border-[var(--color-tertiary)]'>

      <div className="relative w-full overflow-hidden rounded-t-2xl h-52 bg-gradient-to-bl from-[var(--color-primary)]  to-[var(--color-tertiary)]">
        <Canvas camera={{ position: [0, 0, 2.5], fov: 50 }}>
          <ambientLight intensity={1} />
          <spotLight position={[10, 10, 10]} angle={0} penumbra={1} />
          <Model3D url={asset.url} />
          <OrbitControls enablePan={true} enableZoom={false} enableRotate={true} />
          <Environment preset="city" background={false} />
        </Canvas>
      </div>

      <div className='px-4'>

        <h2 className='py-2 text-xl text-[var(--color-secondary)] font-bold'>{asset.name}</h2>
        <p className='text-sm text-[var(--color-secondary)] opacity-80'>{asset.description}</p>

        <ul className='flex flex-wrap gap-2 py-2 text-xs text-[var(--color-primary)]'>
          {asset.hashtags.map((hashtag, index) => (<li key={index} className='px-3 bg-[var(--color-tertiary)] opacity-40 rounded py-[2px]'>{hashtag}</li>))}
        </ul>

        <div className='flex items-center justify-between pb-3'>
          <p className='text-xl font-bold text-[var(--color-accent)]'>₹{asset.price}</p>
          <button className='px-3 py-1 text-sm font-bold text-[var(--color-primary)] bg-[var(--color-accent)] rounded-full'>Buy Now</button>
        </div>

      </div>

    </div>
  )
}

export default AssetCard

// https://www.realtimecolors.com/?colors=070212-f9f7fe-571ce4-f089f1-ea4db9&fonts=Inter-Inter

// https://www.realtimecolors.com/?colors=01021b-f3f3ff-1d26f6-fa7aa8-f86c53&fonts=Inter-Inter

// https://www.realtimecolors.com/?colors=080604-f9f6f4-aa8760-accfa5-7bb992&fonts=Inter-Inter
