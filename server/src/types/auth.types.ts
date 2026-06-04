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
