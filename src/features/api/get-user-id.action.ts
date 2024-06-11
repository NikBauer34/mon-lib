"use server"

import { $api } from "@/shared";
import { JWT } from "next-auth/jwt";

export default async function getUserId(access: JWT | undefined) {
  const res = await $api.get<string>('/user/get-id', {
    headers: {
      Authorization: access as unknown as string || ''
    }
  })
  return res.data
}