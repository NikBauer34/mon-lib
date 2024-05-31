export type BasketStatus = 'Создана' | 'Подтверждена' | 'Отклонена'
export interface BasketItems {
  bookId: number;
  count: number
}
export interface IBasket {
  _id: number;
  account: number;
  title: string;
  return_data: Date;
  status: BasketStatus;
  libraryId: number;
  items: BasketItems[];
}