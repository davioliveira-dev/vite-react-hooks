import { useEffect, useState } from 'react'
import axios, { AxiosRequestConfig } from 'axios'

interface IProps {
  url: string
  options: AxiosRequestConfig
}

// default api = https://aws.random.cat/meow
// https://www.thecocktaildb.com/api/json/v1/1/random.php

export const useFetch = ({ url, options }: IProps) => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState('')
  const [loading, setloading] = useState(true)

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token')
      if (token && !options.headers.Authorization) {
        options.headers.Authorization = `Bearer ${JSON.parse(token)}`
      }
      const response = await axios(url, options)
      setResponse(response.data)
    } catch (error) {
      setError(error)
    }
    setloading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { response, error, loading }
}
