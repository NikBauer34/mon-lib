"use server"

import { LoginData } from "@/entities"
import { $api } from "@/shared"

export default async function register(username: string, password: string): Promise<LoginData | string> {
  try {
    const res = await $api.post(`/auth/registration`, {username, password})
    return res.data as LoginData
  } catch (e: any) {
    return e?.response?.data?.message
  }
}