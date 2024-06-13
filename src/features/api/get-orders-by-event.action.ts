"use server"

import { FullOrder, IOrder } from "@/entities/Order/types"
import { $api } from "@/shared"

export default async function getOrdersByEvent({eventId, searchString}: {eventId: string, searchString: string}) {
  const res = await $api.post<FullOrder[]>(`/order/get-orders-by-event`, {eventId, searchString})
  return res.data
}