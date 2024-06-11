"use client"

import { useSession } from "next-auth/react"
import { useMemo, useState } from "react"
import isOrganizer from "../api/is_organizer.action"
import Link from "next/link"
import Image from 'next/image'
import Edit from '@/shared/icons/edit.svg'
export default function CreatorUpdate({_id}: {_id: string}) {
  let [isEventCreator, setEventCreator] = useState(false)
  const {data, status} = useSession()
  const getIsOrganized = async () => {
    console.log('here')
    const res = await isOrganizer({_id, access: data?.user?.refreshToken})
    setEventCreator(res.is_organizer)
  }
  const setup = useMemo(() => {
    if (status == 'authenticated') {
      getIsOrganized()
    }
    console.log(status)
  }, [status])
  return (
    <>
      {isEventCreator && (
          <Link href={`/event/update/${_id}`}>
            <Image src={Edit} alt="edit" width={20} height={20} />
          </Link>
      )}
    </>
  )
}