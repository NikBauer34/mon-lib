"use client"

import { IEvent } from "@/entities"
import { IUser } from "@/entities/User/types"
import { useEffect, useState } from "react"
import getOrganizerData from "../api/get-organizer-data.cation"

export default function By({eventId}: {eventId: string}) {
  const [organizerData, setOrganizerData] = useState<IUser>({} as IUser)
  useEffect(() => {
    const getData = async () => {
      const res = await getOrganizerData({eventId})
      setOrganizerData(res)
    }
    getData()
  }, [])
  return (
    <p className="p-medium-18 ml-2 mt-2 sm:mt-0">
                by{' '}
                <span className="text-primary-500">{organizerData.username}</span>
              </p>
  )
}