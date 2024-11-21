import { Controller, Get, Param } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private movies: MoviesService) { }

    @Get()
    getAllMovies() {
        return this.movies.getAllMovies();
    }

    @Get('/:id')
    getMovie(@Param('id') id: string) {
        return this.movies.getMovie(parseInt(id));
    }
}
