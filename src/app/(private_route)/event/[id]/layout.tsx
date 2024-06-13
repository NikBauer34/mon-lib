import CheckoutButton from '@/features/components/CheckOutButton';
import Collection from '@/features/components/Collection';
import { getEvent } from '@/features/api/get-event.action'
import getRelatedEventsByCategory from '@/features/api/get-related-events.action'
import { formatDateTime } from '@/entities/Event/helpers';
import Image from 'next/image';
import Location from '@/shared/icons/location.svg'
import Calendar from '@/shared/icons/calendar.svg'
import By from '@/features/components/By';
import CreatorUpdate from '@/features/components/CreatorUpdate';
import Museum from '@/shared/images/portrait-ancient-roman-palace.jpg'
import { Phone, PhoneCall } from 'lucide-react';
import getUserId from '@/features/api/get-user-id.action';
export type SearchParamProps = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
const EventDetails = async ({ params: { id }, searchParams }: SearchParamProps) => {
  const {event, category} = await getEvent({eventId: id});
  
  // const relatedEvents = await getRelatedEventsByCategory({
  //   category: category,
  //   eventId: event._id,
  //   page: searchParams.page as  string || '1',
  //   limit: 3
  // })

  return (
    <>
    <section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-contain">
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:max-w-7xl">
        <Image 
          src={event.imageURL}
          alt="hero image"
          width={1000}
          height={1000}
          className="h-full min-h-[300px] object-cover object-center"
        />

        <div className="flex w-full flex-col gap-8 p-5 md:p-10">
          <div className="flex flex-col gap-6">
            <h2 className='h2-bold'>{event.title}</h2>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex gap-3">
                <p className="p-bold-20 rounded-full bg-green-500/10 px-5 py-2 text-green-700">
                  {event.isFree ? 'Бесплатно' : `$${event.price}`}
                </p>
                <p className="p-medium-16 rounded-full bg-grey-500/10 px-4 py-2.5 text-grey-500">
                  {category}
                </p>
              </div>

              <By eventId={event._id} />
            </div>
          </div>

          <CheckoutButton event={event} />

          <div className="flex flex-col gap-5">
            <div className='flex gap-2 md:gap-3'>
              <Image src={Calendar} alt="calendar" width={32} height={32} />
              <div className="p-medium-16 lg:p-regular-20 flex flex-wrap items-center">
              {event.days.monday.map((el) =>
                
                <p>
                  {formatDateTime(el.startDate).dateTime} - {' '} {' до '}
                  {formatDateTime(el.endDate).timeOnly}
                </p>
                
              )}
              {event.days.tuesday.map((el) =>
                <p>
                  {formatDateTime(el.startDate).dateOnly} - {' '} {' до '}
                  {formatDateTime(el.endDate).timeOnly}
                </p>
                
              
              )}
              {event.days.wednesday.map((el) =>
                <p>
                  {formatDateTime(el.startDate).dateOnly} - {' '} {' до '}
                  {formatDateTime(el.endDate).timeOnly}
                </p>
                
              
              )}
              {event.days.thursday.map((el) =>
                <p>
                  {formatDateTime(el.startDate).dateOnly} - {' '} {' до '}
                  {formatDateTime(el.endDate).timeOnly}
                </p>
                
              
              )}
              {event.days.friday.map((el) =>
                <p>
                  {formatDateTime(el.startDate).dateOnly} - {' '} {' до '}
                  {formatDateTime(el.endDate).timeOnly}
                </p>
                
              
              )}
              {event.days.saturday.map((el) =>
                <p>
                  {formatDateTime(el.startDate).dateOnly} - {' '} {' до '}
                  {formatDateTime(el.endDate).timeOnly}
                </p>
                
              
              )}
              {event.days.sunday.map((el) =>
                <p>
                  {formatDateTime(el.startDate).dateOnly} - {' '} {' до '}
                  {formatDateTime(el.endDate).timeOnly}
                </p>
                
              
              )}
              </div>
            </div>

            <div className="p-regular-20 flex items-center gap-3">
              <Image src={Location} alt="location" width={32} height={32} />
              <p className="p-medium-16 lg:p-regular-20">{event.location}</p>
            </div>
            <div className="p-regular-20 flex items-center gap-3">
              <PhoneCall width={25} height={25} />
              <p className="p-medium-16 lg:p-regular-20">{event.phone}</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="p-bold-20 text-grey-600">Описание:</p>
            <p className="p-medium-16 lg:p-regular-18">{event.description}</p>
          </div>
          {/* <CreatorUpdate _id={id} /> */}
        </div>
      </div>
    </section>

    {/* EVENTS with the same category */}
    <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
      <h2 className="h2-bold">Также могут понравится</h2>

      <Collection 
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={3}
          category={category}
          eventId={id}
        />
    </section>
    </>
  )
}

export default EventDetails