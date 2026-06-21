export type MoviesCategoryType =
  | "Popular Movies"
  | "New Movies"
  | "Recomended Movies";

export type MoviesDataType = "popularMovies" | "newMovies" | "recomendedMovies";

export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  softcore: false;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type WatchlistItemType = {
  movieId: number;
  page: number;
  title: string;
  img: string;
};
