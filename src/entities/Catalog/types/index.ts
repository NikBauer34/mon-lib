export interface ICatalog {
  _id: number;
  title: string;
  type: 'private' | 'public';
  libraryId: number;
  parent: number;
  children: number;
  items: number[];
}