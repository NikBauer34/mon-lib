type IStatus = 'В наличии' | 'В наличии, но кто-то уже положил в корзину' | 'Кто-то уже читает' | 'Потеряна'
interface TextbookAmount {
  count: number;
  status: IStatus
}
export interface ITextbook {
  _id: number;
  title: string;
  description: string;
  mean_rating: number;
  picture_path: string;
  class_needed: number;
  amount: TextbookAmount[];
}