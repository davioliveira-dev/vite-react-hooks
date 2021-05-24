import React from 'react'
import loading from '../assets/loading.svg'

export const Loading = () => (
  <div className="loading-container flex flex-col items-center w-full h-5/6 my-5">
    <h1 className="font-bold text-white text-3xl my-8 neon-white">
      Loading ...
    </h1>
    <img
      src={loading}
      alt="Loading"
      loading="lazy"
      className="shadow-xl-white w-1/3 h-1/3 max-w-xs rounded-3xl"
    />
  </div>
)
