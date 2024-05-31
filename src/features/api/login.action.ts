"use server"

import { IWorker, LoginData } from "@/entities"
import { $api } from "@/shared"
import axios from "axios"

export default async function signin(login: string, password: string): Promise<LoginData | string> {
  try {
    const res = await $api.post(`/auth/login`, {login, password})
    return res.data as LoginData
  } catch (e: any) {
    return e?.response?.data?.message
  }
}