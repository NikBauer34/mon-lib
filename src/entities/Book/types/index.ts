export type IBookPG = '0+' | '6+' | '13+' | '16+' | '18+'
export type IStatus = 'В наличии' | 'В наличии, но кто-то уже положил в корзину' | 'Кто-то уже читает' | 'Потеряна'
interface BookAmount {
  count: number;
  status: IStatus
}
export interface IBook {
  _id: number;
  title: string;
  description: string;
  picture_path: string;
  pg: IBookPG
  amount: BookAmount[]
}