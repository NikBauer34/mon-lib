"use server"

import { LoginData } from "@/entities"
import { $api } from "@/shared"

export default async function signin(username: string, password: string): Promise<LoginData | string> {
  try {
    console.log('There')
    const res = await $api.post(`/auth/login`, {username, password})
    console.log('Why')
    return res.data as LoginData
  } catch (e: any) {
    return e?.response?.data?.message
  }
}