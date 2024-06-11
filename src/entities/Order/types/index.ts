import { IEvent } from "@/entities/Event/types"
import { IUser } from "@/entities/User/types"

export interface IOrder {
  event: string,
  buyer: string,
  _id: string
}
export interface FullOrder {
  event: IEvent
  buyer: IUser
}