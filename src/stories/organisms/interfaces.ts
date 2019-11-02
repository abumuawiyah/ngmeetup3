export interface IResponse {
  results: IUser[];
  info: object;
}

export interface IUser {
  gender: string;
  name: object;
  location: object;
  email: string;
  login: object;
  dob: object;
  registered: object;
  phone: string;
  cell: string;
  id: object;
  picture: object;
  nat: string;
}
