import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config'

@Module({
    imports: [
        MoviesModule,
        AuthModule,
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env'
        })
    ],
    controllers: [MoviesController],
    providers: [MoviesService],
})

export class AppModule { }
