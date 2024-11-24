import { Test, TestingModule } from "@nestjs/testing";
import { AuthController } from "./auth.controller"
import { AuthService } from "./auth.service";
import { RegisterUserDto } from "./dto/register-user.dto";

describe('Auth Controller', () => {
    let controller: AuthController;
    let service: AuthService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AuthController],
            providers: [
                {
                    provide: AuthService,
                    useValue: {
                        validateUser: jest.fn(),
                        login: jest.fn(),
                        signUp: jest.fn(),
                    }
                }
            ]
        }).compile();

        controller = module.get<AuthController>(AuthController);
        service = module.get<AuthService>(AuthService);
    });

    it('Should be defined', () => {
        expect(controller).toBeDefined();
    })

    describe('Login', () => {
        it('Should return a token if credentials are valid', async () => {
            const mockerUser: RegisterUserDto = {
                email: 'test@example.com',
                password: 'Password123!'
            };

            const mockToken = { access_token: 'mockAccessToken' };

            jest.spyOn(service, 'validateUser').mockResolvedValue({ email: mockerUser.email });
            jest.spyOn(service, 'login').mockResolvedValue(mockToken);

            const result = await controller.login(mockerUser);

            expect(service.validateUser).toHaveBeenCalledWith(mockerUser);
            expect(service.login).toHaveBeenCalledWith(mockerUser);
            expect(result).toEqual(mockToken);
        })
    });

    describe('Register User', () => {
        it('Should call AuthService.register and return the result', async () => {
            const mockRegisterDto: RegisterUserDto = {
                email: 'newuser@example.com',
                password: 'Password123!'
            }
            const mockResponse = { access_token: 'mockAccessToken' };
            jest.spyOn(service, 'signUp').mockResolvedValue(mockResponse);
            const result = await controller.registerUser(mockRegisterDto);

            expect(service.signUp).toHaveBeenCalledWith(mockRegisterDto);
            expect(result).toEqual(mockResponse);
        })
    })
})