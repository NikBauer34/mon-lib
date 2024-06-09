"use server"

import { CreateEventParams, IEvent } from "@/entities";
import { $api } from "@/shared";
import { revalidatePath } from "next/cache";

export async function createEvent({ event }: CreateEventParams) {
  const data = {...event}
  const res = await $api.post<IEvent>('/event/create', data)
  return res.data

}