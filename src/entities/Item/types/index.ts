type ItemType = 'CD' | 'Textbook' | 'Book'
export interface IItem {
  _id: number;
  item: number;
  type: ItemType;
  rating: number[];
  catalogs: number[];
}