"use client"

import { IEvent } from "@/entities"
import { IUser } from "@/entities/User/types"
import { useEffect, useState } from "react"
import getOrganizerData from "../api/get-organizer-data.cation"
import { IMuseum } from "@/entities/Museum/types"
import Link from "next/link"

export default function By({eventId}: {eventId: string}) {
  const [organizerData, setOrganizerData] = useState<IMuseum>({} as IMuseum)
  useEffect(() => {
    const getData = async () => {
      const res = await getOrganizerData({eventId})
      setOrganizerData(res)
    }
    getData()
  }, [])
  return (
    <Link href={`/museum/${organizerData._id}`}>
    <p className="p-medium-18 ml-2 mt-2 sm:mt-0">
                от{' '}
                <span className="text-primary-500">{organizerData.title}</span>
              </p> </Link>
  )
}