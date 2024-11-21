import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register-user.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    async login(@Body() user: RegisterUserDto) {
        const existUser = await this.authService.validateUser(user);
        if (!existUser) {
            throw new UnauthorizedException('Credenciales invalidas');
        }

        return this.authService.login(user);
    }

    @Post('register')
    async registerUser(@Body() registerDto: RegisterUserDto) {
        return this.authService.signUp(registerDto);
    }
}
