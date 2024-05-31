import axios from 'axios'
import { redirect } from 'next/navigation'

const $api = axios.create({
  withCredentials: true,
  baseURL: process.env.API_URL
})


$api.interceptors.response.use((config) => {
  return config
}, async (error) => {
  const originalRequest = error.config
  if (error.response_status == 401 && error.config && !error.config._isRetry) {
    originalRequest._isRetry = true
    redirect('/sign-in?session_over=true')
  }
  throw error
})
export default $api