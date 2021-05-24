import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { apiUrl } from '../services/api'
import { Loading } from './Loading'

interface IResponse {
  error: any
  loading: boolean
  response: {
    file: string
  }
}

export const Error = () => {
  const { error, loading, response } = useFetch({
    url: apiUrl.error,
    options: {
      method: 'GET',
    },
  }) as unknown as IResponse

  return (
    <div className="error-container flex flex-col justify-around items-center h-full">
      <h1 className="font-bold text-white text-3xl mt-12 neon-white">
        Forgive me, I couldn&apos;t make your drink :(
      </h1>
      <h2 className="text-center font-bold text-white text-3xl neon-white">
        Stay here with this cute cat
      </h2>
      {loading ? (
        <Loading />
      ) : error ? (
        <h1 className="text-center font-bold text-white text-5xl neon-white">
          Forgive me, I couldn&apos;t show the cat :(
        </h1>
      ) : (
        <img
          src={response?.file}
          loading="lazy"
          className="shadow-xl-white w-1/2 h-1/2 max-w-xs rounded-3xl"
        />
      )}
    </div>
  )
}
