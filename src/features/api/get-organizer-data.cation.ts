"use server"

import { IUser } from "@/entities/User/types"
import { $api } from "@/shared"

export default async function getOrganizerData({eventId}: {eventId: string}) {
  const res = await $api.get<IUser>(`/event/organizer_data/${eventId}`)
  return res.data
}