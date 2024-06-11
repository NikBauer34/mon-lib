"use server"

import { $api } from "@/shared"

export default async function createOrder({event, buyer}: {event: string, buyer: string}) {
  const res = await $api.post('/order/create', {event, buyer})
  return res.data
}