"use server"

import { $api } from "@/shared"

export async function DeleteEvent({eventId}: {eventId: string}) {
  const res = await $api.get(`/event/delete/${eventId}`)
  return res.data
}