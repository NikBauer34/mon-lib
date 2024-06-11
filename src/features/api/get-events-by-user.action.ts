"use server"

import { ICategory, IEvent } from "@/entities"
import { IUser } from "@/entities/User/types"
import { $api } from "@/shared"
import { FullEvent } from "./get-related-events.action"

export async function getEventsByUser({
  userId,
  page
} : {
  userId: string,
  page: number
}) {
  const res = await $api.post<{data: {el: IEvent, organizer: IUser, category: ICategory}[], totalPages: number}>(`/event/events-by-user`, {userId, page, limit: 3})
  let events: FullEvent[] = []
  for (let i in res.data.data) {
    events.push({...res.data.data[i].el, organizer: res.data.data[i].organizer, category: res.data.data[i].category})
  }
  console.log(events)
  return {events, totalPages: res.data.totalPages}
}