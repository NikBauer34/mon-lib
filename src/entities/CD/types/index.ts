type IStatus = 'В наличии' | 'В наличии, но кто-то уже положил в корзину' | 'Кто-то уже читает' | 'Потеряна'
interface BookAmount {
  count: number;
  status: IStatus
}
export interface ICD {
  _id: number;
  title: string;
  description: string;
  picture_path: string;
  amount: BookAmount[]
}