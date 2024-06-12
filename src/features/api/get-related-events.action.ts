"use server"

import { ICategory, IEvent } from "@/entities"
import { IMuseum } from "@/entities/Museum/types"
import { IUser } from "@/entities/User/types"
import { $api } from "@/shared"
export type FullEvent = {
  _id: string
  title: string;
        description: string;
        location: string;
        imageURL: string;
        category: ICategory;
        price: string;
        isFree: boolean;
        organizer: IMuseum
        phone: string
        days: {
          monday: {startDate: Date, endDate: Date}[], 
          tuesday: {startDate: Date, endDate: Date}[], 
          wednesday: {startDate: Date, endDate: Date}[], 
          thursday: {startDate: Date, endDate: Date}[], 
          friday: {startDate: Date, endDate: Date}[], 
          saturday: {startDate: Date, endDate: Date}[], 
          sunday: {startDate: Date, endDate: Date}[]}
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
  const res = await $api.post<{data: {el: IEvent, organizer: IMuseum, category: ICategory}[], totalPages: number}>(`/event/get_related`, {category, eventId, page, limit})
  let events: FullEvent[] = []
  for (let i in res.data.data) {
    events.push({...res.data.data[i].el, organizer: res.data.data[i].organizer, category: res.data.data[i].category})
  }
  console.log(events)
  return {events, totalPages: res.data.totalPages}
}