export type Mutable<T> = { -readonly [P in keyof T]: T[P] };

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  favourites: Array<number>;
  role: string;
}
