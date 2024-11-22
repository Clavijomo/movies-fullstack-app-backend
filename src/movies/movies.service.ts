import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie, movies } from '../data/movies'
import { MovieFound, ResponseMovie } from './dto/movie';

@Injectable()
export class MoviesService {

    private movies: Movie[] = movies;
    getAllMovies() {
        return movies;
    }

    getMovie(movie: MovieFound) {
        const movieFound = this.movies.find(item => item.id === movie.movieId);
        if (!movieFound) {
            return new NotFoundException(`Movie with id ${movie.movieId} not found`);
        }

        const responseMovie: Movie = movieFound

        return responseMovie
    }

    getRecommendMovies(idsMovies: number[]) {
        let idsFound = [];
        idsMovies.forEach((_, index) => {
            this.movies.forEach((item, i) => {
                if (idsMovies[index] === item.id) {
                    idsFound.push(item);
                }
            })
        })

        return idsFound
    }
}
