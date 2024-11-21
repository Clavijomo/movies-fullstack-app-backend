import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [MoviesModule, AuthModule],
    controllers: [MoviesController, AuthController],
    providers: [MoviesService, AuthService],
})

export class AppModule { }
