export interface RegisterUserType {
  username: string;
  phone: string;
  email: string;
  password: string;
  watchlist: WatchListType[];
}

export interface WatchListType {
  movieId: number;
  page: number;
  title: string;
  img: string;
}

export interface LoginUserType {
  email: string;
  password: string;
}

export interface ResetPasswordType {
  password: string;
  newPassword: string;
}

export interface MovieStructureType {
  movieId: number;
  page: number;
  title: string;
  img: string;
}
