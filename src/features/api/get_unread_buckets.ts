
import { IRole, IWorker } from "@/entities"
import { $api } from "@/shared"
import axios from "axios"
import { redirect } from "next/navigation"

export default async function get_unread_buckets(token: string) {
  try {
    const res = await $api.get<{worker:IWorker, worker_roles: IRole[]}>('/worker/init_data', {headers: {'Authorization': token}})
    console.log(res.data)
    return res.data 
  } catch(e: any) {
    // redirect('/sign-in')
  }
}