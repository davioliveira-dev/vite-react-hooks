import React from 'react'
import { Loading } from './components/Loading'
import { Error } from './components/Error'
import { useFetch } from './hooks/useFetch'
import { apiUrl } from './services/api'

export const App = () => {
  const { error, loading, response } = useFetch({
    url: apiUrl.default,
    options: {
      method: 'GET',
    },
  })

  console.log(response)

  return (
    <div className="App flex flex-col justify-center items-center h-screen">
      <main className="w-full h-full bg-blue-900 p-5 flex flex-col justify-center items-center">
        {loading ? <Loading /> : error ? <Error /> : <h1>Oi</h1>}
      </main>
    </div>
  )
}
