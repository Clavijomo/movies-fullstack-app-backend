import { Injectable, NotFoundException } from '@nestjs/common';
import { movies } from '../data/movies'

@Injectable()
export class MoviesService {
    private movies = movies;
    getAllMovies() {
        return movies;
    }

    getMovie(id: number) {
        const movieFound = this.movies.find(movie => movie.id === id);
        if (!movieFound) {
            return new NotFoundException(`Movie with id ${id} not found`);
        }

        return movieFound;
    }
}
