import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie, movies } from '../data/movies';
import { MovieFound } from './interface/movie';

@Injectable()
export class MoviesService {

    private movies: Movie[] = movies;
    getAllMovies() {
        return movies;
    }

    getMovie(movie: MovieFound) {
        const movieFound = this.movies.find(item => item.id === movie.movieId);
        if (!movieFound) {
            throw new NotFoundException(`Movie with id ${movie.movieId} not found`);
        }

        const responseMovie: Movie = movieFound
        return responseMovie;
    }

    getRecommendMovies(idsMovies: number[]) {
        const movieMap = new Map(this.movies.map(movie => [movie.id, movie]));
        return idsMovies.map(id => movieMap.get(id))
            .filter(movie => movie !== undefined);
    }
}
