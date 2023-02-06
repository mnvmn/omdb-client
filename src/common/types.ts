export interface ListResponse<T> {
  Search?: T[]
  totalResults: string
  Response: string
  Error?: string
}

export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export interface MovieDetail {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: Rating[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}
interface MovieMeta {
  isFavorite: boolean
}

export type MovieListResponse = ListResponse<Movie>
export type MovieList = MovieWithMeta[]
export type MovieFavorites = Record<string, MovieWithMeta>
export interface MovieWithMeta extends Movie, MovieMeta {}
export interface MovieDetailWithMeta extends MovieDetail, MovieMeta {}

export interface Rating {
  Source: string
  Value: string
}
