import * as z from "zod"

export const eventFormSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  description: z.string().min(3, 'Description must be at least 3 characters').max(400, 'Description must be less than 400 characters'),
  location: z.string().min(3, 'Location must be at least 3 characters').max(400, 'Location must be less than 400 characters'),
  imageUrl: z.string(),
  startDateTime: z.date(),
  endDateTime: z.date(),
  categoryId: z.string(),
  price: z.string(),
  isFree: z.boolean(),
  url: z.string().url()
})
export type CreateEventParams = {
  event: {
    title: string
    description: string
    location: string
    imageURL: string
    startDate: Date
    endDate: Date
    category: string
    price: string
    isFree: boolean
    siteURL: string
  }
}
export type IEvent = {
  _id: string
  title: string;
        description: string;
        location: string;
        imageURL: string;
        startDate: Date;
        endDate: Date;
        category: string;
        price: string;
        isFree: boolean;
        siteURL: string;
}
export type UpdateEvent = {
  _id: string
  title: string;
        description: string;
        location: string;
        imageURL: string;
        startDate: Date;
        endDate: Date;
        category: string;
        price: string;
        isFree: boolean;
        siteURL: string;
}