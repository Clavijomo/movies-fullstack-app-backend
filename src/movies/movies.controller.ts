import { Body, Controller, Get, Post } from '@nestjs/common';
import { MovieFound, RequestMovieRecommends } from './interface/movie';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private movies: MoviesService) { }

    @Get()
    getAllMovies() {
        return this.movies.getAllMovies();
    }

    @Post('/movie')
    getMovie(@Body() movie: MovieFound) {
        return this.movies.getMovie(movie);
    }

    @Post('/recommend')
    getRecommendsMovies(@Body() idsMovies: RequestMovieRecommends) {
        return this.movies.getRecommendMovies(idsMovies.recommend);
    }
}
