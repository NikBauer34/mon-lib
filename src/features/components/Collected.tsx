import { ICategory } from "@/entities";
import { IUser } from "@/entities/User/types";
import Card from "./Card";
import Pagination from "./Pagination";

export default function Collected() {
  type FullEvent = {
    _id: string
    title: string;
          description: string;
          location: string;
          imageURL: string;
          startDate: Date;
          endDate: Date;
          category: ICategory;
          price: string;
          isFree: boolean;
          siteURL: string;
          organizer: IUser
  }
  let collectionType = 'Events_Organized'
  let data: FullEvent[] = [{
    _id: 'jghfjk',
    title: 'some title',
    description: 'descr',
    location: 'some location',
    imageURL: 'some img',
    startDate: new Date(),
    endDate: new Date(),
    category: {
      _id: 'h',
      name: 'some category'
    },
    price: '300$',
    isFree: false,
    siteURL: 'svs',
    organizer: {
      username: 'h'
    }
  }, {
    _id: 'jghfjk',
    title: 'some title',
    description: 'descr',
    location: 'some location',
    imageURL: 'some img',
    startDate: new Date(),
    endDate: new Date(),
    category: {
      _id: 'h',
      name: 'some category'
    },
    price: '300$',
    isFree: false,
    siteURL: 'svs',
    organizer: {
      username: 'h'
    }
  }]
  return (
    <>
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
        </div>
        <Pagination page={2} totalPages={4} />
        </>

  )
}