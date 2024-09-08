import React, { useState } from 'react'
import AssetCard from './AssetCard'
import { assets } from '../utils/3dAssetData'

const MarketPlace = () => {
  const [category, setCategory] = useState("all")

  return (
    <div className="p-4 bg-[var(--color-primary)]">

      <div className='w-full my-10 text-4xl font-bold text-center text-[var(--color-secondary)]'>
        <h1>3D Store</h1>
      </div>

      <div className='flex justify-center w-full py-10 text-xl font-bold text-white bg-slate-800'>
        <button className='flex items-center justify-center w-1/5 gap-3 py-8 mx-2 rounded-lg shadow-[0px_0px_10px_1px] shadow-purple-400 bg-slate-800' type="button" onClick={() => setCategory('high poly')}>
          <img className='w-10 h-10' src="icons/image.png" /> <p className="text-xl font-extrabold text-transparent bg-gradient-to-r from-green-300 to-yellow-300 bg-clip-text">
            High Poly
          </p>
        </button>

        <button className='flex items-center justify-center w-1/5 gap-3 py-8 mx-2 rounded-lg bg-slate-600' type="button" onClick={() => setCategory('high poly')}>
          <img className='w-10 h-10' src="icons/icon (2).png" /> <div>Low Poly</div>
        </button>

        <button className='flex items-center justify-center w-1/5 gap-3 py-8 mx-2 bg-teal-600 rounded-lg' type="button" onClick={() => setCategory('high poly')}>
          <img className='w-10 h-10' src="icons/icon (1).png" /> <div>Character</div>
        </button>

        <button className='flex items-center justify-center w-1/5 gap-3 py-8 mx-2 rounded-lg bg-gradient-to-br from-fuchsia-500 to-cyan-500' type="button" onClick={() => setCategory('high poly')}>
          <img className='w-10 h-10' src="icons/icon (4).png" /> <div>Landscape</div>
        </button>

      </div>

      <div className="grid grid-cols-1 gap-6 p-2 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {assets.map(asset => (
          <AssetCard key={asset.id} asset={asset} />
        ))}
      </div>

      {assets.length === 0 && (
        <p className="mt-8 text-center text-gray-500">No assets found matching your criteria.</p>
      )}

    </div>
  )
}

export default MarketPlace
