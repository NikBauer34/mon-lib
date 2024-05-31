interface AccountSettings {
  isMuted: boolean;
}
export interface IAccount {
  _id: number;
  name: string;
  surname: string;
  patronymic?: string;
  class: string;
  library_login: string;
  library_password: string;
  subscribed_items: number[];
  liked_items: number[];
  library: number;
  baskets: number[];
  owners: number[];
  ratings: number[];
  settings: AccountSettings;
}