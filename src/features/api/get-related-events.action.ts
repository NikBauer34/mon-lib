"use server"

import { ICategory, IEvent } from "@/entities"
import { IUser } from "@/entities/User/types"
import { $api } from "@/shared"
export type FullEvent = {
  _id: string
  title: string;
        description: string;
        location: string;
        imageURL: string;
        startDate: Date;
        endDate: Date;
        category: ICategory;
        price: string;
        isFree: boolean;
        siteURL: string;
        organizer: IUser
}
export default async function getRelatedEvents({
  category,
  eventId,
  limit,
  page
} : {
  category: string,
  eventId: string,
  limit: number,
  page: string
}) {
  const res = await $api.post<{data: {el: IEvent, organizer: IUser, category: ICategory}[], totalPages: number}>(`/event/get_related`, {category, eventId, page, limit})
  let events: FullEvent[] = []
  for (let i in res.data.data) {
    events.push({...res.data.data[i].el, organizer: res.data.data[i].organizer, category: res.data.data[i].category})
  }
  console.log(events)
  return {events, totalPages: res.data.totalPages}
}