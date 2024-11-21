import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [MoviesModule, AuthModule],
    controllers: [MoviesController],
    providers: [MoviesService],
})

export class AppModule { }
