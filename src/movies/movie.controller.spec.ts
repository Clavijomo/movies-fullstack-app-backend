import { Test, TestingModule } from '@nestjs/testing';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { MovieFound, RequestMovieRecommends } from './interface/movie';
import { Movie } from 'src/data/movies';

describe('MoviesController', () => {
    let controller: MoviesController;
    let service: MoviesService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [MoviesController],
            providers: [
                {
                    provide: MoviesService,
                    useValue: {
                        getAllMovies: jest.fn(),
                        getMovie: jest.fn(),
                        getRecommendMovies: jest.fn(),
                    },
                },
            ],
        }).compile();

        controller = module.get<MoviesController>(MoviesController);
        service = module.get<MoviesService>(MoviesService);
    });

    it('Should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('Get All Movies', () => {
        it('Should call MoviesService.getAllMovies and return its result', () => {
            const mockMovies: Movie[] = [
                {
                    id: 1,
                    name: 'Inception',
                    date: '2010-07-16',
                    description: 'A mind-bending thriller.',
                    duration: 148,
                    rating: 8.8,
                    tags: ['thriller', 'sci-fi'],
                    relatedMovies: [2, 3],
                    favorite: true,
                    image: 'inception.jpg',
                    module: 'module1',
                },
                {
                    id: 2,
                    name: 'The Dark Knight',
                    date: '2008-07-18',
                    description: 'A dark tale of Gotham.',
                    duration: 152,
                    rating: 9.0,
                    tags: ['action', 'drama'],
                    relatedMovies: [1],
                    favorite: false,
                    image: 'dark_knight.jpg',
                    module: 'module2',
                },
            ];
            jest.spyOn(service, 'getAllMovies').mockReturnValue(mockMovies);

            const result = controller.getAllMovies();
            expect(service.getAllMovies).toHaveBeenCalled();
            expect(result).toEqual(mockMovies);
        });
    });

    describe('Get Movie', () => {
        it('Should call MoviesService.getMovie with correct params and return its result', () => {
            const mockMovie: MovieFound = { movieId: 1 };
            const mockResponse: Movie = {
                id: 1,
                name: 'Inception',
                date: '2010-07-16',
                description: 'A mind-bending thriller.',
                duration: 148,
                rating: 8.8,
                tags: ['thriller', 'sci-fi'],
                relatedMovies: [2, 3],
                favorite: true,
                image: 'inception.jpg',
                module: 'module1',
            };
            jest.spyOn(service, 'getMovie').mockReturnValue(mockResponse);

            const result = controller.getMovie(mockMovie);
            expect(service.getMovie).toHaveBeenCalledWith(mockMovie);
            expect(result).toEqual(mockResponse);
        });
    });

    describe('Get Recommends Movies', () => {
        it('Should call MoviesService.getRecommendMovies with correct params and return its result', () => {
            const mockIds: RequestMovieRecommends = { recommend: [1, 2] };
            const mockRecommendations: Movie[] = [
                {
                    id: 1,
                    name: 'Inception',
                    date: '2010-07-16',
                    description: 'A mind-bending thriller.',
                    duration: 148,
                    rating: 8.8,
                    tags: ['thriller', 'sci-fi'],
                    relatedMovies: [2, 3],
                    favorite: true,
                    image: 'inception.jpg',
                    module: 'module1',
                },
                {
                    id: 2,
                    name: 'The Dark Knight',
                    date: '2008-07-18',
                    description: 'A dark tale of Gotham.',
                    duration: 152,
                    rating: 9.0,
                    tags: ['action', 'drama'],
                    relatedMovies: [1],
                    favorite: false,
                    image: 'dark_knight.jpg',
                    module: 'module2',
                },
            ];
            jest.spyOn(service, 'getRecommendMovies').mockReturnValue(mockRecommendations);

            const result = controller.getRecommendsMovies(mockIds);
            expect(service.getRecommendMovies).toHaveBeenCalledWith(mockIds.recommend);
            expect(result).toEqual(mockRecommendations);
        });
    });
});
