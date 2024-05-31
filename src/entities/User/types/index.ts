interface UserSettings {
  isNotifiedDaily: boolean
}
export interface IUser {
  _id: number;
  login: string;
  password: string;
  fine_coins: number;
  pleasure_coins: number;
  chatId: string | null;
  accounts: number[];
  settings: UserSettings
}