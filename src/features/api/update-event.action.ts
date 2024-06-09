"use server"

import { CreateEventParams, IEvent } from "@/entities";
import { $api } from "@/shared";
import { revalidatePath } from "next/cache";

export async function updateEvent({ userId, event, path}: CreateEventParams) {
  const data = {...event, organizer: userId, category: event.categoryId}
  const res = await $api.post<IEvent>('/event/update', data)
  revalidatePath(path)
  return res.data

}