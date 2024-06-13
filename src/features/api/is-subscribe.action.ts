"use server"

import { $api } from "@/shared"

export default async function isSubscribed({access, eventId}: {access: JWT, eventId: string}) {
  const res = await $api.post<null | {date: string}>(`/order/is-subscribed`, {eventId}, {
    headers: {
      Authorization: access
    }
  })
  if (res.data) {
    return {date: new Date(res.data.date)}
  } else return null
}