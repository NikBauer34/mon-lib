"use client"
import { IEvent } from '@/entities'
import React, { useEffect, useState } from 'react'
import Card from './Card'
import Pagination from './Pagination'
import { UpdateEvent } from '@/entities/Event/types'
import getRelatedEvents, { FullEvent } from '../api/get-related-events.action'

type CollectionProps = {
  emptyTitle: string,
  emptyStateSubtext: string,
  limit: number,
  totalPages?: number,
  urlParamName?: string,
  collectionType?: 'Events_Organized' | 'My_Tickets' | 'All_Events',
  category: string
  eventId: string
}

const Collection = ({
  category,
  eventId,
  emptyTitle,
  emptyStateSubtext,
  totalPages = 0,
  collectionType,
  urlParamName,
}: CollectionProps) => {
  let [gopage, setPage] = useState(1)
  let [data, setData] = useState<FullEvent[]>([])
  const changePage = async (el: number) => {
    setPage(gopage+=el)
    getData()
  }
  const getData = async () => {
    const relatedEvents = await getRelatedEvents({
      category: category,
      eventId: eventId,
      page: String(gopage),
      limit: 3
    })
    setData(relatedEvents.events)
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      {data.length > 0 ? (
        <div className="flex flex-col items-center gap-10">
          <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {data.map((event) => {
              const hasOrderLink = collectionType === 'Events_Organized';
              const hidePrice = collectionType === 'My_Tickets';

              return (
                <li key={event._id} className="flex justify-center">
                  <Card event={event} hasOrderLink={hasOrderLink} hidePrice={hidePrice} />
                </li>
              )
            })}
          </ul>

          {totalPages > 1 && (
            <Pagination urlParamName={urlParamName} page={gopage} totalPages={totalPages} changePage={(el: number) => changePage(el)} />
          )}
        </div>
      ): (
        <div className="flex-center wrapper min-h-[200px] w-full flex-col gap-3 rounded-[14px] bg-grey-50 py-28 text-center">
          <h3 className="p-bold-20 md:h5-bold">{emptyTitle}</h3>
          <p className="p-regular-14">{emptyStateSubtext}</p>
        </div>
      )} 
    </>
  )
}

export default Collection