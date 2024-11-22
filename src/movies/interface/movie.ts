import { Movie } from "src/data/movies";

export interface MovieFound {
    movieId: number;
}

export interface ResponseMovie {
    movie: Movie
}

export interface RequestMovieRecommends {
    recommend: number[]
}